"use client"

import { useRef } from "react"
import { Link } from "react-router-dom"
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
          gsap.to(btn, { backgroundColor: "rgba(0, 0, 0, 0.8)", scale: 1.02, duration: 0.3, ease: "power2.out" })
        })
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, { backgroundColor: "rgba(0, 0, 0, 0.6)", scale: 1, duration: 0.3, ease: "power2.out" })
        })
      })
    }
  }, { scope: container })

  return (
    <div ref={container} className="relative z-10 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
      {/* Primary Button */}
      <Link 
        to="/contact" 
        className="primary-btn flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-500 text-black font-semibold text-lg shadow-[0_0_30px_rgba(34,197,94,0.6)] w-full sm:w-auto"
      >
        Get Free Consultation
        <ArrowRight size={20} />
      </Link>

      {/* Book Call */}
      <a 
        href="tel:+923233260859" 
        className="secondary-btn flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black/60 border border-white/10 text-white text-lg w-full sm:w-auto"
      >
        <Phone size={18} />
        Book Call
      </a>

      {/* WhatsApp */}
      <a 
        href="https://wa.me/923233260859" 
        target="_blank" 
        rel="noopener noreferrer"
        className="secondary-btn flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black/60 border border-white/10 text-white text-lg w-full sm:w-auto"
      >
        <MessageCircle size={18} className="text-green-400" />
        WhatsApp
      </a>
    </div>
  )
}
