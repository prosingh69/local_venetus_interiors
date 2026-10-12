import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ServiceHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative w-full h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image — taking the exact same full space as the video */}
      <img
        src="/bedroom3.jpeg"
        alt="Venetus Interior — Bespoke Design"
        className="absolute inset-0 w-full h-full object-cover object-center transform-gpu pointer-events-none scale-105"
        loading="eager"
        fetchPriority="high"
      />

      {/* Cinematic Overlays — exactly same as AboutHero / Homepage */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 pointer-events-none" />

      {/* Content — exactly same positioning as AboutHero */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-10 md:px-16 flex flex-col items-center text-center mt-2 sm:mt-3 md:mt-4">

        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="w-10 h-px bg-primary mb-6 sm:mb-8 origin-center"
        />

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
          className="text-primary text-[11px] sm:text-xs tracking-[0.22em] uppercase font-semibold mb-5 sm:mb-7"
        >
          Venetus Interior Services
        </motion.p>

        {/* Main Quote — Strictly 2 Lines */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
          className="text-[clamp(17px,4.5vw,52px)] text-white leading-[1.25] tracking-tight mb-4 sm:mb-5 max-w-full"
        >
          <span className="block font-sans font-bold whitespace-nowrap">
            Every corner thoughtfully curated.
          </span>
          <span className="block font-serif font-semibold italic text-primary text-[1.04em] whitespace-nowrap mt-1 sm:mt-1.5 drop-shadow-[0_2px_14px_rgba(212,165,58,0.25)]">
            Every space designed to inspire.
          </span>
        </motion.h1>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.65 }}
          className="font-sans text-white/70 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-xl"
        >
          Bespoke modular kitchens, living spaces & full home transformations in Bangalore — backed by up to a 10-year warranty.
        </motion.p>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
          className="w-10 h-px bg-primary mt-6 sm:mt-8 origin-center"
        />
      </div>

      {/* Scroll indicator — exact match with AboutHero */}
      <motion.div
        className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="w-px h-7 sm:h-9 bg-gradient-to-b from-white/50 to-transparent"
          animate={{ scaleY: [1, 0.25, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

export default ServiceHero
