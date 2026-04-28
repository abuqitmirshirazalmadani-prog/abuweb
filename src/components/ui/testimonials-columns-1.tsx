"use client";
import React from "react";
import { motion } from "motion/react";

export const testimonials = [
  {
    text: "Abuqitmir delivered our MVP in half the expected time. The code quality is exceptional and the architecture is flawless.",
    name: "Alex M.",
    role: "CTO at FinScale",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=120&fit=crop&q=80"
  },
  {
    text: "Our conversion rate doubled after their UI/UX overhaul. They don't just design; they understand user psychology.",
    name: "Sarah J.",
    role: "VP Product at Nexa",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=120&fit=crop&q=80"
  },
  {
    text: "The custom AI automation they built saves our operations team 40 hours a week. Absolute game-changers.",
    name: "David R.",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=120&fit=crop&q=80"
  },
  {
    text: "We needed an enterprise-grade platform that could handle millions of requests. They executed perfectly.",
    name: "Elena K.",
    role: "Founder at DataFlow",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=120&fit=crop&q=80"
  },
  {
    text: "Their engineering team feels like an extension of our own. Transparent, fast, and incredibly reliable.",
    name: "Usman T.",
    role: "CTO at CloudEdge",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=120&fit=crop&q=80"
  },
  {
    text: "From complex backend integrations to a stunning frontend, Abuqitmir handled everything seamlessly.",
    name: "Zara L.",
    role: "Project Lead at DevSphere",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=120&fit=crop&q=80"
  },
  {
    text: "They modernized our legacy systems with zero downtime. The ROI on their work has been massive.",
    name: "Bilal H.",
    role: "VP Engineering",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=120&fit=crop&q=80"
  },
  {
    text: "Their strategic approach to SEO and digital marketing drove a 300% increase in our high-intent organic traffic.",
    name: "Hina S.",
    role: "Marketing Head at GrowthLab",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=120&fit=crop&q=80"
  },
  {
    text: "The delivery is so fast, robust, and effective that we practically doubled our output instantly.",
    name: "Jonathan D.",
    role: "Head of Growth",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=120&fit=crop&q=80"
  }
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-3xl border shadow-lg shadow-primary/5 max-w-xs w-full bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10" key={i}>
                  <div className="text-white/80 text-sm leading-relaxed">"{text}"</div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-heading font-medium tracking-tight leading-5 text-white">{name}</div>
                      <div className="text-xs leading-5 opacity-60 tracking-tight text-white/60">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-transparent my-20 relative">
      <div className="container z-10 mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-4"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-white/10 text-white/50 py-1 px-4 rounded-full text-xs uppercase tracking-wider bg-white/5 backdrop-blur-md">Testimonials</div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white text-center">
            What our clients say
          </h2>
          <p className="text-center mt-5 text-white/60 text-lg">
            Hear from industry leaders and startups who have transformed their digital presence.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
