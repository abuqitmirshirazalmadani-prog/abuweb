"use client";

import { ArrowRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/demos/ui/avatar";
import { Button } from "@/demos/ui/button";
import { Marquee } from "@/demos/ui/marquee";

const teamAvatars = [
  {
    initials: "JD",
    src: "https://res.cloudinary.com/doonkheo8/image/upload/v1770279333/a1.jpg",
  },
  {
    initials: "HJ",
    src: "https://res.cloudinary.com/doonkheo8/image/upload/v1770279333/a2.jpg",
  },
  {
    initials: "PI",
    src: "https://res.cloudinary.com/doonkheo8/image/upload/v1770279333/a3.jpg",
  },
  {
    initials: "KD",
    src: "https://res.cloudinary.com/doonkheo8/image/upload/v1770279333/a4.jpg",
  },
  {
    initials: "LD",
    src: "https://res.cloudinary.com/doonkheo8/image/upload/v1770279333/a5.jpg",
  },
];

const stats = [
  { emoji: "🚀", label: "IN CLIENT REVENUE GENERATED", value: "$5M+" },
  { emoji: "📈", label: "BUSINESSES LAUNCHED", value: "200+" },
  { emoji: "💰", label: "SAVED IN OPERATIONAL COSTS", value: "$500K+" },
];

function AvatarStack() {
  return (
    \u003cdiv className="flex -space-x-3"\u003e
      {teamAvatars.map((member, i) =\u003e (
        \u003cAvatar
          className="size-13 border-2 border-primary bg-neutral-800"
          key={member.initials}
          style={{ zIndex: teamAvatars.length - i }}
        \u003e
          \u003cAvatarImage alt={`Team member ${i + 1}`} src={member.src} /\u003e
          \u003cAvatarFallback className="bg-neutral-700 text-white text-xs"\u003e
            {member.initials}
          \u003c/AvatarFallback\u003e
        \u003c/Avatar\u003e
      ))}
    \u003c/div\u003e
  );
}

function StatsMarquee() {
  return (
    \u003cMarquee
      className="border-white/10 border-y bg-black/30 py-2 backdrop-blur-sm [--duration:30s] [--gap:2rem]"
      pauseOnHover
      repeat={4}
    \u003e
      {stats.map((stat) =\u003e (
        \u003cdiv
          className="flex items-center gap-3 whitespace-nowrap"
          key={stat.label}
        \u003e
          \u003cspan className="font-bold font-mono text-primary text-sm tracking-wide"\u003e
            {stat.value}
          \u003c/span\u003e
          \u003cspan className="font-medium font-mono text-sm text-white/70 uppercase tracking-[0.15em]"\u003e
            {stat.label}
          \u003c/span\u003e
          \u003cspan className="text-base"\u003e{stat.emoji}\u003c/span\u003e
        \u003c/div\u003e
      ))}
    \u003c/Marquee\u003e
  );
}

export default function Hero() {
  return (
    \u003csection className="relative flex h-screen w-full flex-col items-start justify-end"\u003e
      \u003cdiv
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a)",
        }}
      \u003e
        \u003cdiv className="absolute inset-0 bg-black/40" /\u003e
      \u003c/div\u003e

      \u003cdiv className="relative z-10 w-full max-w-4xl px-4 text-white sm:px-8 lg:px-16"\u003e
        \u003cdiv className="space-y-4"\u003e
          \u003cAvatarStack /\u003e
          \u003cStatsMarquee /\u003e
        \u003c/div\u003e
      \u003c/div\u003e
      \u003cdiv className="relative z-10 w-full px-4 pb-16 sm:px-8 sm:pb-24 lg:px-16 lg:pb-32"\u003e
        \u003cdiv className="flex flex-col gap-6 sm:flex-row sm:items-end"\u003e
          \u003cdiv className="w-full space-y-4 sm:w-1/2"\u003e
            \u003ch1 className="font-medium text-4xl text-white leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"\u003e
              We \u003cspan className="text-primary"\u003ethink\u003c/span\u003e, you{" "}
              \u003cspan className="text-primary"\u003egrow\u003c/span\u003e
              \u003cbr /\u003e
              \u003cspan className="text-white"\u003e— that's the deal\u003c/span\u003e
            \u003c/h1\u003e
            \u003cButton className="rounded-none py-0 pr-0 font-normal text-black text-lg"\u003e
              Get Template
              \u003cspan className="border-neutral-500 border-l p-3"\u003e
                \u003cArrowRight /\u003e
              \u003c/span\u003e
            \u003c/Button\u003e
          \u003c/div\u003e
          \u003cdiv className="w-full sm:w-1/2"\u003e
            \u003cp className="text-base text-primary italic sm:text-right md:text-2xl"\u003e
              We take your big ideas and turn them into clear, winning
              strategies. From setting up your company to scaling it worldwide,
              we're here every step of the way.
            \u003c/p\u003e
          \u003c/div\u003e
        \u003c/div\u003e
      \u003c/div\u003e
    \u003c/section\u003e
  );
}
