import React from "react";
import { ScrollArea, ScrollBar } from "./scroll-area";
import { CheckCircle2 } from "lucide-react";

export interface WebService {
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

const services: WebService[] = [
  {
    title: "Business Websites",
    description: "Professional websites designed to attract and convert customers.",
    bullets: [
      "Corporate websites",
      "Portfolio websites",
      "Landing pages",
      "Service-based websites",
    ],
    image: "https://images.pexels.com/photos/5082577/pexels-photo-5082577.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "E-Commerce Development",
    description: "Sell your products online with powerful e-commerce solutions.",
    bullets: [
      "Shopify stores",
      "WooCommerce websites",
      "Custom e-commerce platforms",
      "Payment gateway integration",
    ],
    image: "https://images.pexels.com/photos/7679865/pexels-photo-7679865.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Custom Web Applications",
    description: "Build scalable platforms tailored to your needs.",
    bullets: [
      "SaaS platforms",
      "Dashboards",
      "Booking systems",
      "CRM systems",
    ],
    image: "https://images.pexels.com/photos/7439135/pexels-photo-7439135.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function WebServicesScroll() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-lg">
      <div className="flex w-max space-x-6 p-4">
        {services.map((service) => (
          <div key={service.title} className="shrink-0 w-[350px] md:w-[400px] glass-panel rounded-2xl overflow-hidden border border-white/10 flex flex-col hover:border-primary/50 transition-colors">
            <div className="h-[200px] w-full overflow-hidden relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
            </div>
            <div className="p-6 whitespace-normal flex-1 flex flex-col">
              <h4 className="text-xl font-heading font-bold text-white mb-2">{service.title}</h4>
              <p className="text-white/70 text-sm mb-6">{service.description}</p>
              
              <ul className="space-y-3 mt-auto">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="bg-white/5" />
    </ScrollArea>
  );
}
