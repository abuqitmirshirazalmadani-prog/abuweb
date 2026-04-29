"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticlesComponent from './particles-bg';

// A utility function for class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// The main hero component
const AetherFlowHero = () => {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2 + 0.5,
                duration: 0.8,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* The Particles background */}
            <ParticlesComponent />
            
            {/* Overlay HTML Content */}
            <div className="relative z-10 text-center p-6 mt-20">
                <motion.div
                    custom={0}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm"
                >
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-gray-200">
                        Intelligent Automation
                    </span>
                </motion.div>

                <motion.h1
                    custom={1}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                >
                    AI Development Services<br/>
                    <span className="text-primary">in Pakistan</span>
                </motion.h1>

                <motion.div
                    custom={2}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10 flex flex-col gap-4"
                >
                    <strong className="text-white font-semibold">Build Intelligent Systems That Automate, Predict, and Scale Your Business</strong>
                    <p>Artificial Intelligence is no longer the future — it’s the present. At Abuqitmir Tech, we provide advanced AI development services in Pakistan designed to help startups and businesses automate processes, reduce costs, and unlock new growth opportunities.</p>
                </motion.div>

                <motion.div
                    custom={3}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                >
            <Link to="/contact" className="px-8 py-4 bg-primary text-black font-semibold rounded-lg shadow-[0_0_20px_rgba(92,230,92,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto w-fit">
                Start Your AI Project Today
                <ArrowRight className="h-5 w-5" />
            </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default AetherFlowHero;