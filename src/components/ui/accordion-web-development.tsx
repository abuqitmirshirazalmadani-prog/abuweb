import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export const webDevelopmentFaqItems = [
  {
    id: "1",
    title: "How long does web development take?",
    content:
      "Simple websites require 6-8 weeks, standard business sites need 8-12 weeks, and complex web applications take 12-24+ weeks. Our agile development process delivers working features incrementally.",
  },
  {
    id: "2",
    title: "Will my website be mobile-friendly?",
    content:
      "Absolutely. Every website includes responsive design ensuring flawless performance across all devices—smartphones, tablets, and desktops.",
  },
  {
    id: "3",
    title: "Can you redesign my existing website?",
    content:
      "Yes. We provide website redesign services including UX improvements, technology upgrades, and modern responsive design while preserving your content and SEO.",
  },
  {
    id: "4",
    title: "Do you provide hosting and maintenance?",
    content:
      "We offer managed hosting on reliable cloud infrastructure plus ongoing maintenance covering security updates, performance monitoring, and technical support.",
  },
  {
    id: "5",
    title: "How do you ensure website security?",
    content:
      "We implement SSL encryption, secure authentication, regular security audits, vulnerability scanning, and follow OWASP security guidelines protecting your platform and user data.",
  },
];

export function AccordionWebDevelopment() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {webDevelopmentFaqItems.map((item) => (
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
