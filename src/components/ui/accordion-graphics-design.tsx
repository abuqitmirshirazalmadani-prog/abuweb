import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export const graphicsDesignFaqItems = [
  {
    id: "1",
    title: "What types of design services do you offer?",
    content: "We offer a wide range of graphic design services including logo design, brand identity creation, social media graphics, marketing materials, and digital advertising creatives.",
  },
  {
    id: "2",
    title: "How many revisions do I get?",
    content: "We typically offer up to 3 rounds of revisions for most design projects to ensure the final product aligns perfectly with your vision.",
  },
  {
    id: "3",
    title: "What files will I receive?",
    content: "You will receive all standard high-resolution files needed for your specific project, including vectors (AI, EPS, SVG) and raster images (PNG, JPG).",
  },
  {
    id: "4",
    title: "How long does a typical design project take?",
    content: "Project timelines vary depending on the scope. A logo design might take 1-2 weeks, while a full brand identity package may take 3-4 weeks from initial concept to final delivery.",
  }
];

export function AccordionGraphicsDesign() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {graphicsDesignFaqItems.map((item) => (
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
