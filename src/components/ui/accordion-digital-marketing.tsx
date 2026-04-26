import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export const digitalMarketingFaqItems = [
  {
    id: "1",
    title: "How long does it take to see results from Digital Marketing?",
    content: "PPC and social media ads can show immediate results, while organic strategies like SEO and content marketing typically take 3 to 6 months to start showing significant returns.",
  },
  {
    id: "2",
    title: "Which digital marketing channels should I use?",
    content: "It depends on your business goals and target audience. We conduct market research to determine the most effective channels for your specific needs, whether that's Facebook, Google Ads, or email marketing.",
  },
  {
    id: "3",
    title: "How do you measure marketing success?",
    content: "We measure success through key performance indicators (KPIs) like lead generation, cost per acquisition (CPA), conversion rates, and overall return on investment (ROI).",
  },
  {
    id: "4",
    title: "What makes Abuqitmir Tech's marketing services different?",
    content: "We provide data-driven strategies specifically tailored to your business, ensuring transparent reporting and a focus on maximizing your ROI across all channels.",
  }
];

export function AccordionDigitalMarketing() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {digitalMarketingFaqItems.map((item) => (
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
