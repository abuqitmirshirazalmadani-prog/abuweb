import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export const uiUxFaqItems = [
  {
    id: "1",
    title: "How long does it take to design a UI/UX project?",
    content: "The timeline depends on the complexity of the project. Typically, a standard app or website design takes 2 to 4 weeks, including research, wireframing, UI design, and feedback cycles.",
  },
  {
    id: "2",
    title: "Why is UI/UX design important for my business?",
    content: "Good UI/UX design improves user satisfaction, which directly impacts your business metrics. It increases conversion rates, reduces bounce rates, and builds brand trust.",
  },
  {
    id: "3",
    title: "Do you provide developer-ready files?",
    content: "Yes, we provide fully annotated, developer-ready design files, usually via Figma, along with all associated assets and a comprehensive design system.",
  },
  {
    id: "4",
    title: "What makes Abuqitmir Tech's UI/UX services different?",
    content: "We focus on real business results rather than just aesthetics. We combine aesthetic appeal with functional design to maximize user satisfaction and business conversions.",
  }
];

export function AccordionUiUx() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {uiUxFaqItems.map((item) => (
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
