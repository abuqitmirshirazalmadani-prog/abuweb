import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export const contentWritingFaqItems = [
  {
    id: "1",
    title: "Why is high-quality content important?",
    content: "Content is the foundation of online success. It improves SEO rankings, builds trust with your audience, and drives conversions by clearly communicating your value proposition.",
  },
  {
    id: "2",
    title: "Is the content optimized for search engines?",
    content: "Yes, all our web content and blog posts are crafted with SEO best practices in mind, seamlessly integrating targeted keywords to boost your search visibility.",
  },
  {
    id: "3",
    title: "Do you write content for my specific industry?",
    content: "Absolutely. We conduct thorough research into your industry, target audience, and competitors to ensure the content is authoritative, relevant, and engaging.",
  },
  {
    id: "4",
    title: "What makes Abuqitmir Tech's content services different?",
    content: "We focus on creating content that not only ranks well but also genuinely engages your readers and compels them to take action. Quality and strategy go hand-in-hand.",
  }
];

export function AccordionContentWriting() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {contentWritingFaqItems.map((item) => (
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
