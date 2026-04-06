"use client"

import { useRef } from "react"
import { Link } from "react-router"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export function CTAButtons() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const primaryBtn = container.current?.querySelector(".primary-btn")
    const secondaryBtns = container.current?.querySelectorAll(".secondary-btn")

    if (primaryBtn) {
      primaryBtn.addEventListener("mouseenter", () => {
        gsap.to(primaryBtn, { scale: 1.05, duration: 0.3, ease: "power2.out" })
      })
      primaryBtn.addEventListener("mouseleave", () => {
        gsap.to(primaryBtn, { scale: 1, duration: 0.3, ease: "power2.out" })
      })
    }

    if (secondaryBtns) {
      secondaryBtns.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, { backgroundColor: "rgba(255, 255, 255, 0.1)", scale: 1.02, duration: 0.3, ease: "power2.out" })
        })
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, { backgroundColor: "rgba(255, 255, 255, 0.05)", scale: 1, duration: 0.3, ease: "power2.out" })
        })
      })
    }
  }, { scope: container })

  return (
    <div ref={container} className="relative z-10 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
      {/* Primary Button */}
      <Link 
        to="/contact" 
        className="primary-btn flex flex-col items-center justify-center px-8 py-3 rounded-full bg-primary text-black font-semibold shadow-[0_0_30px_rgba(92,230,92,0.4)] w-full sm:w-auto text-center"
      >
        <span className="flex items-center gap-2 text-lg">
          Book a Discovery Call
          <ArrowRight size={20} />
        </span>
        <span className="text-xs font-medium opacity-80 mt-0.5">Expert consultation • Actionable roadmap</span>
      </Link>

      {/* Secondary Button */}
      <Link 
        to="/services" 
        className="secondary-btn flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white text-lg w-full sm:w-auto"
      >
        View Our Work
      </Link>
    </div>
  )
}
