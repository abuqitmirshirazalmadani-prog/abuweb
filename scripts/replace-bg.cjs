const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      // Also remove bg-black except in RainingLetters (which is in components, so safe here)
      content = content.replace(/bg-\[#050505\]/g, 'bg-transparent');
      content = content.replace(/bg-elevated/g, 'bg-transparent');
      content = content.replace(/bg-card/g, 'bg-transparent');
      // bg-black is tricky, let's just do bg-[#050505] and bg-elevated/bg-card
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
      }
    }
  });
}

processDir(path.join(__dirname, '../src/pages'));
