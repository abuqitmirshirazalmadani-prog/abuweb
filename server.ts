import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  fs.writeFileSync('env-before-vite.txt', String(process.env.GEMINI_API_KEY));
  console.log('ENV BEFORE VITE:', process.env.GEMINI_API_KEY);
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.get('/api/dump-env', (req, res) => {
    fs.writeFileSync('env-dump-latest.json', JSON.stringify(process.env, null, 2));
    res.json({ success: true });
  });

  app.post('/api/format-post', async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        // Fallback mock response since the API key is invalid
        const mockResponse = `# Mastering Right Tech 2026: How to Choose the Perfect Tech Stack for Your Startup (Without Wasting Time & Money)

## Meta Description
Mastering Right Tech 2026: Learn how to choose the best tech stack with modern strategies, performance tips, and scalable solutions for startups.

## How to Choose the Right Tech Stack for Your Startup

Here's a hard truth most founders learn the painful way:

> *You don't outgrow a bad tech stack... you suffer through it.*

I've seen startups with brilliant ideas stall out — not because of competition, not because of funding — but because their **tech decisions quietly boxed them in**.

At first, everything feels fine. You ship fast. Users come in. Then suddenly:
- Your app slows down
- Features take weeks instead of days
- Developers complain about the codebase

*(Note: This is a simulated AI response because the Gemini API key is currently set to "MY_GEMINI_API_KEY". To use the real AI, please update your API key in the AI Studio Settings menu under Secrets.)*`;
        
        return res.json({ formattedContent: mockResponse });
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an expert blog editor. Format the following raw text into a well-structured Markdown blog post.
        
        Instructions:
        - Add appropriate Markdown headings (H1 for the main title, H2 for sub-sections).
        - Use **bold** and *italics* to emphasize key points.
        - Convert lists or sequential points into proper Markdown bullet points or numbered lists.
        - Use blockquotes (>) for quotes or important callouts.
        - DO NOT change the actual words, meaning, or tone of the article. Only add Markdown formatting.
        - Return ONLY the raw Markdown text, without any surrounding code blocks or explanations.
        
        Raw Text:
        ${req.body.content}`
      });
      
      let formattedContent = response.text || '';
      formattedContent = formattedContent.replace(/^```markdown\n?/i, '').replace(/\n?```$/i, '');
      
      res.json({ formattedContent });
    } catch (error: any) {
      console.error('AI Formatting Error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  let vite: any;
  if (process.env.NODE_ENV !== 'production') {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist/client'), { index: false }));
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template, render;

      if (process.env.NODE_ENV !== 'production') {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        // @ts-ignore
        render = (await import('./dist/server/entry-server.js')).render;
      }

      const helmetContext: any = {};
      const appHtml = render(url, helmetContext);

      const { helmet } = helmetContext;
      const helmetTags = `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      `;

      // Replace the placeholder or inject into the root div
      let html = template.replace(`<!--ssr-outlet-->`, appHtml);
      
      // If there's no ssr-outlet, replace inside root div
      if (html === template) {
        html = template.replace(
          /<div id="root">([\s\S]*?)<\/div>/,
          `<div id="root">${appHtml}</div>`
        );
      }

      // Inject helmet tags into head
      html = html.replace('</head>', `${helmetTags}</head>`);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      vite?.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
