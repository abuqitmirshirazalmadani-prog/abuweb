import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export const aiSolutionsFaqItems = [
  {
    id: "1",
    title: "How long does it take to implement an AI solution?",
    content: "The timeline depends on the complexity of the project, data availability, and integration requirements. A simple AI chatbot can take 2-4 weeks, while a custom machine learning model may take 2-4 months to develop, train, and deploy.",
  },
  {
    id: "2",
    title: "Do I need technical expertise to manage the AI system?",
    content: "No, we build intuitive dashboards and integrate AI seamlessly into your existing workflows. We also provide comprehensive training and ongoing support to ensure your team can effectively use and manage the AI tools.",
  },
  {
    id: "3",
    title: "Can AI integrate with my current software?",
    content: "Yes, our team specializes in integrating AI capabilities into existing enterprise systems, CRMs, ERPs, and custom software via robust APIs and middleware solutions.",
  },
  {
    id: "4",
    title: "Is my business data secure when using your AI services?",
    content: "Absolutely. We adhere to strict data privacy standards and security protocols. Your data is encrypted, and we can deploy models on private clouds or on-premise infrastructure to ensure complete data sovereignty.",
  },
  {
    id: "5",
    title: "What is the ROI of implementing AI?",
    content: "AI implementation typically yields significant ROI through automated repetitive tasks, reduced operational costs, improved customer satisfaction via instant support, and data-driven insights that uncover new revenue streams.",
  }
];

export function AccordionAiSolutions() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {aiSolutionsFaqItems.map((item) => (
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
