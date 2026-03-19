import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export const mobileAppFaqItems = [
  {
    id: "1",
    title: "What is the cost of mobile app development in 2026?",
    content: "The cost of mobile app development in 2026 depends on complexity, features, and platform (iOS, Android, or both). A basic app can start from $3,000–$10,000, while advanced apps with AI, real-time features, or custom backend systems can exceed $50,000+. Cross-platform development is becoming popular because it reduces cost and development time significantly."
  },
  {
    id: "2",
    title: "How long does it take to build a mobile app?",
    content: "Most mobile apps take 4–16 weeks depending on scope. Simple MVPs can be launched in weeks, while feature-rich apps may take several months. Modern development tools and cross-platform frameworks now allow businesses to launch faster without compromising quality."
  },
  {
    id: "3",
    title: "Should I build a native app or a cross-platform app?",
    content: "In 2026, cross-platform development (React Native, Flutter) is often the best choice for startups and businesses. It allows one codebase for both iOS and Android, reducing cost and speeding up development, while still delivering near-native performance."
  },
  {
    id: "4",
    title: "What features should a modern mobile app have in 2026?",
    content: "Modern apps are expected to include:\n\n• AI-powered personalization\n• Real-time performance (powered by 5G)\n• Strong security & data privacy\n• Smooth UI/UX with fast loading\n• Offline capabilities\n\nAI-driven features and predictive experiences are becoming standard, not optional."
  },
  {
    id: "5",
    title: "Why is AI important in mobile app development?",
    content: "AI is transforming mobile apps by enabling:\n\n• Personalized user experiences\n• Smart recommendations\n• Chatbots & automation\n• Predictive analytics\n\nBy 2026, a large portion of app interactions will be AI-driven, making apps more intelligent and user-centric."
  },
  {
    id: "6",
    title: "How do you ensure mobile app security?",
    content: "Modern mobile apps follow a security-first approach, including:\n\n• End-to-end encryption\n• Secure authentication (biometrics, OTP)\n• Minimal data collection\n• Compliance with global privacy standards\n\nSecurity is now a core requirement, not an afterthought."
  },
  {
    id: "7",
    title: "What is an MVP in mobile app development?",
    content: "An MVP (Minimum Viable Product) is a simplified version of your app with only essential features. It allows you to launch जल्दी, test your idea, and improve based on real user feedback—saving time and cost."
  },
  {
    id: "8",
    title: "Can you build scalable mobile apps for future growth?",
    content: "Yes. Modern apps are built with scalable architecture, allowing them to handle increasing users, features, and integrations without rebuilding from scratch. Scalability is critical for startups aiming for rapid growth."
  },
  {
    id: "9",
    title: "Will my app work without internet (offline support)?",
    content: "Yes, many modern apps include offline functionality using on-device processing and caching. Edge computing and local data storage make apps faster and more reliable even with limited connectivity."
  },
  {
    id: "10",
    title: "Why should I invest in a custom mobile app instead of using templates?",
    content: "Custom mobile apps are tailored to your business needs, offering:\n\n• Better performance\n• Unique user experience\n• Scalability\n• Competitive advantage\n\nBusinesses in 2026 prefer custom solutions because generic apps can’t meet evolving user expectations."
  }
];

export function AccordionMobileApp() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {mobileAppFaqItems.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="border-b border-white/10">
            <AccordionTrigger className="text-left py-6 overflow-hidden text-white/80 duration-200 hover:no-underline hover:text-white cursor-pointer data-[state=open]:text-primary group">
              <div className="flex flex-1 items-center gap-6">
                <span className="text-sm font-mono text-white/40 group-hover:text-white/60 transition-colors">{item.id.padStart(2, '0')}</span>
                <h3 className="text-xl md:text-2xl font-heading font-medium">
                  {item.title}
                </h3>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-white/60 pb-6 pl-12 md:pl-16 text-base leading-relaxed whitespace-pre-line">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
