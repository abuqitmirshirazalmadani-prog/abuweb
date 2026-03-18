import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { PlusIcon } from "lucide-react";
import { cn } from "../../utils/cn"; 

export const faqItems = [
  {
    id: "1",
    title: "How fast can you ship?",
    content:
      "We move fast. We typically deliver MVPs in 4-6 weeks and full enterprise rollouts in 3-4 months, depending on complexity. Our agile methodology ensures you see progress weekly.",
  },
  {
    id: "2",
    title: "What is your core technology stack?",
    content:
      "We build for scale. Our primary stack includes React, Next.js, Node.js, Python, and cloud infrastructure (AWS/GCP). We choose the right tool for the job, favoring modern, high-performance ecosystems.",
  },
  {
    id: "3",
    title: "Do you handle legacy code modernization?",
    content:
      "Yes. We audit, refactor, and migrate legacy systems to modern architectures with zero downtime. We eliminate technical debt while preserving your core business logic.",
  },
  {
    id: "4",
    title: "How do you approach UI/UX design?",
    content:
      "Our design process is data-backed and conversion-led. We don't just make things look good; we design intuitive interfaces that reduce cognitive friction and drive user action.",
  },
  {
    id: "5",
    title: "Can you integrate custom AI into our existing workflows?",
    content:
      "Absolutely. We specialize in custom LLM integrations, automated data pipelines, and intelligent agents that multiply your workforce's output and reduce operational costs.",
  },
  {
    id: "6",
    title: "Do you work with international clients?",
    content:
      "Yes. We are a global engineering partner, currently powering forward-thinking teams across the US, UK, EU, and Pakistan.",
  },
  {
    id: "7",
    title: "What does your engagement model look like?",
    content:
      "We offer flexible models: dedicated engineering teams for long-term partnerships, or fixed-scope contracts for specific deliverables. We adapt to your operational needs.",
  },
  {
    id: "8",
    title: "How do we get started?",
    content:
      "Book a discovery call. We'll discuss your business objectives, technical challenges, and outline a strategic roadmap to execute your vision.",
  },
];

export function Accordion05() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {faqItems.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="border-b border-white/10">
            <AccordionTrigger className="text-left py-6 overflow-hidden text-white/80 duration-200 hover:no-underline hover:text-white cursor-pointer data-[state=open]:text-primary group">
              <div className="flex flex-1 items-center gap-6">
                <span className="text-sm font-mono text-white/40 group-hover:text-white/60 transition-colors">{item.id.padStart(2, '0')}</span>
                <h3 className="text-xl md:text-2xl font-heading font-medium">
                  {item.title}
                </h3>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-white/60 pb-6 pl-12 md:pl-16 text-base leading-relaxed">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
