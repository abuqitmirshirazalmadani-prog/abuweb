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
    title: "What services does ABUQITMIR.TECH offer?",
    content:
      "ABUQITMIR.TECH provides custom software development, modern web development, mobile app development, UI/UX design, SEO optimization, automation solutions, and scalable digital platforms for startups and businesses.",
  },
  {
    id: "2",
    title: "Which technologies do you use?",
    content:
      "We work with modern technologies including Next.js, React, Tailwind CSS, Node.js, WordPress, and cloud platforms.",
  },
  {
    id: "3",
    title: "Do you build custom websites?",
    content:
      "Yes. Every website we build is tailored to the business goals, ensuring performance, scalability, and modern user experience.",
  },
  {
    id: "4",
    title: "Do you provide SEO services?",
    content:
      "Yes. We provide technical SEO, AI search optimization (AEO and GEO), on-page SEO, and performance improvements.",
  },
  {
    id: "5",
    title: "Can you redesign an existing website?",
    content:
      "Yes. We redesign outdated websites with modern UI/UX, improved speed, and better conversion-focused layouts.",
  },
  {
    id: "6",
    title: "Do you work with international clients?",
    content:
      "Yes. ABUQITMIR.TECH works with clients across Pakistan, the USA, the UK, and Europe.",
  },
  {
    id: "7",
    title: "How long does a project usually take?",
    content:
      "Most website projects are completed within 2 to 6 weeks depending on complexity and required features.",
  },
  {
    id: "8",
    title: "How can I contact ABUQITMIR.TECH?",
    content:
      "You can contact us through the website contact form or via email for project inquiries and collaborations.",
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
