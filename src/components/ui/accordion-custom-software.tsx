import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export const customSoftwareFaqItems = [
  {
    id: "1",
    title: "How long does custom software development take?",
    content:
      "Timeline varies by complexity. Simple applications take 3-6 months, medium complexity systems require 6-12 months, and large enterprise platforms need 12-24+ months. Our agile development approach delivers working features incrementally, providing value throughout the project.",
  },
  {
    id: "2",
    title: "What's the cost of custom software development?",
    content:
      "Costs depend on scope, complexity, and team size. Projects typically range from $50,000 for basic applications to $500,000+ for comprehensive enterprise systems. We provide detailed estimates after requirements analysis.",
  },
  {
    id: "3",
    title: "Can you integrate with our existing systems?",
    content:
      "Absolutely. Our software engineers specialize in API integration, data migration, and creating middleware connecting legacy and modern platforms seamlessly.",
  },
  {
    id: "4",
    title: "Do you provide ongoing support after launch?",
    content:
      "Yes. We offer maintenance contracts covering bug fixes, security updates, performance monitoring, and feature enhancements ensuring long-term success.",
  },
  {
    id: "5",
    title: "How do you ensure software quality?",
    content:
      "We employ comprehensive testing strategies, code reviews, automated testing, continuous integration, and QA engineers dedicated to quality throughout development.",
  },
];

export function AccordionCustomSoftware() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {customSoftwareFaqItems.map((item) => (
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
