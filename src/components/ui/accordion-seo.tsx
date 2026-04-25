import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export const seoFaqItems = [
  {
    id: "1",
    title: "How long does it take to see results from SEO?",
    content: "SEO is a long-term strategy. Typically, you can start seeing noticeable improvements in rankings and traffic within 3 to 6 months, depending on the competitiveness of your industry and the current state of your website.",
  },
  {
    id: "2",
    title: "Is Local SEO different from regular SEO?",
    content: "Yes! While traditional SEO focuses on improving your site's visibility on a national or global scale, Local SEO specifically targets search queries within a specific geographic area (like 'SEO services near me' or 'plumbers in Lahore'). It involves optimizing your Google Business Profile and local citations.",
  },
  {
    id: "3",
    title: "Do I need SEO if I'm already running Google Ads?",
    content: "Absolutely. While Google Ads provide immediate traffic, you pay for every click. SEO builds organic authority, leading to sustained, free traffic over time. Combining both creates a powerful digital marketing strategy.",
  },
  {
    id: "4",
    title: "What makes Abuqitmir Tech's SEO services different?",
    content: "We use a complete, data-driven methodology that covers Technical SEO, On-Page optimization, and Off-Page link building. We prioritize sustainable, white-hat techniques that protect your website from Google penalties while delivering consistent growth.",
  },
  {
    id: "5",
    title: "How do you measure SEO success?",
    content: "We measure success through key performance indicators (KPIs) like organic traffic growth, improvements in keyword rankings, increased lead generation, and higher conversion rates. We provide transparent monthly reports so you can track your ROI.",
  }
];

export function AccordionSeo() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {seoFaqItems.map((item) => (
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
