import * as React from "react";
import { TestimonialSlider } from "./testimonial-slider-1";

// Abu Qitmir Client Testimonials - www.abuqitmir.tech
const reviews = [
  {
    id: 1,
    name: "Salman Raza",
    affiliation: "Manufacturing Company",
    quote:
      "Abu Qitmir developed custom inventory management software that streamlined our entire operation. Saved us thousands monthly!",
    imageSrc:
      "C:\Users\AL KHAIR COMPUTER\Downloads\Untitled design (58).jpg",
    thumbnailSrc:
      "C:\Users\AL KHAIR COMPUTER\Downloads\Untitled design (67).jpg",
  },
  {
    id: 2,
    name: "Hamza Yousaf",
    affiliation: "Food Delivery Service",
    quote:
      "Abu Qitmir built our iOS and Android apps in 8 weeks. Already at 4.8 stars with 10K+ downloads!",
    imageSrc:
      "C:\Users\AL KHAIR COMPUTER\Downloads\Untitled design (61).jpg",
    thumbnailSrc:
      "C:\Users\AL KHAIR COMPUTER\Downloads\Untitled design (71).jpg",
  },
  {
    id: 3,
    name: "Hassan Raza",
    affiliation: "New Business Owner",
    quote:
      "Best rates in Karachi without compromising on quality. Abu Qitmir made my dream project affordable!",
    imageSrc:
      "C:\Users\AL KHAIR COMPUTER\Downloads\Untitled design (60).jpg",
    thumbnailSrc:
      "C:\\Users\\AL KHAIR COMPUTER\\Downloads\\Untitled design (72).jpg",
  },
  {
    id: 4,
    name: "Imran Khan",
    affiliation: "Event Management",
    quote:
      "Needed a website in 5 days for a major event. Abu Qitmir delivered in 3 days with everything perfect!",
    imageSrc:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop&q=80",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Sana Akram",
    affiliation: "New Startup",
    quote:
      "Logo, website, app—all perfectly matched. Abu Qitmir created a cohesive brand identity that stands out!",
    imageSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&q=80",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Rabia Fatima",
    affiliation: "Educational Institute",
    quote:
      "The custom admission and fee management system Abu Qitmir built automated 80% of our manual work. Incredible ROI!",
    imageSrc:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=600&fit=crop&q=80",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Adnan Ali",
    affiliation: "Fintech Startup",
    quote:
      "Custom platform built to scale with our growth. Clean code, excellent documentation, and ongoing support. Couldn't ask for more!",
    imageSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&q=80",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=120&fit=crop&q=80",
  },
];

// Render the Abu Qitmir testimonial slider
export default function AbuQitmirTestimonials() {
  return (
    <div className="w-full">
      <TestimonialSlider reviews={reviews} className="bg-transparent" />
    </div>
  );
}
