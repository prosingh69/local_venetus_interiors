import React, { useRef } from 'react'
import { ArrowRight, ChevronRight, Sparkle } from "lucide-react"
import { NavLink } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { TypingEffect } from '../Animations/TypingEffect'

/* ─── Panel 1 — Heading + Tag + Split Description & Pill Buttons (100vh Full Viewport) ─── */
const HeroPanel1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="relative w-full h-screen min-h-[100dvh] flex items-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover transform-gpu pointer-events-none scale-105"
      >
        <source src="/herosection1.mp4" type="video/mp4" />
      </video>

      {/* Overlay — cinematic dark gradient for high readability */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black pointer-events-none" />

      {/* Content — Responsive: Centered on Mobile, Left-aligned Split on Desktop */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 xs:px-5 sm:px-8 md:px-12 lg:px-14 flex flex-col justify-center pt-20 sm:pt-28 md:pt-40 lg:pt-44 pb-12 sm:pb-16 md:pb-20 text-center md:text-left">

        {/* Top Tag / Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          className="mb-3.5 sm:mb-6 flex items-center justify-center md:justify-start"
        >
          <NavLink
            to="/services"
            className="group inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs md:text-[13px] font-medium transition-all shadow-sm active:scale-98"
          >
            <span className="bg-primary text-white text-[9px] sm:text-[10px] md:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full tracking-wide uppercase">
              Flexible
            </span>
            <span className="text-white/95">Luxury Interiors Within Your Budget</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform" />
          </NavLink>
        </motion.div>

        {/* Mobile View Title: Exactly matching reference image (Playfair serif + italic gold + curved underline) */}
        <div className="md:hidden flex flex-col items-center text-center mb-2.5 sm:mb-4 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-[clamp(32px,8.6vw,44px)] font-normal text-white tracking-tight leading-[1.12] drop-shadow-md"
          >
            Your Dream Interiors
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center mt-1"
          >
            <span className="font-serif italic text-[clamp(26px,6.8vw,36px)] font-normal text-primary tracking-tight leading-[1.18] drop-shadow-md">
              Designed Within Your Budget
            </span>

            {/* Subtle curved gold underline from reference image */}
            <svg
              viewBox="0 0 260 12"
              fill="none"
              className="w-[clamp(230px,65vw,320px)] h-2.5 sm:h-3 mt-1 text-primary/80 pointer-events-none"
            >
              <path
                d="M2 9C70 2 190 2 258 9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Desktop View Title: Left-aligned with animated typing effect */}
        <div className="hidden md:flex mb-6 sm:mb-8 max-w-4xl flex-col items-start text-left mx-0">
          {/* Line 1 */}
          <div className="w-full flex justify-start">
            <TypingEffect
              text="Your Dream Interiors"
              className="font-sans text-white md:text-5xl lg:text-[50px] xl:text-[56px] font-bold tracking-tight leading-[1.05] drop-shadow-md"
              startDelay={0.15}
              charDelay={0.035}
              align="left"
              nowrap={true}
            />
          </div>

          {/* Line 2 — Stylized Serif Ampersand + Slogan on a single line */}
          <div className="w-full flex justify-start -mt-2">
            <TypingEffect
              segments={[
                {
                  text: '&',
                  className: 'font-serif italic font-normal text-accent md:text-7xl lg:text-[84px] xl:text-[94px] leading-none drop-shadow-md select-none inline-block align-baseline'
                },
                {
                  text: 'Designed Within Your Budget',
                  className: 'font-sans font-bold text-white md:text-4xl lg:text-[50px] xl:text-[56px] tracking-tight leading-[1.05] drop-shadow-md align-baseline'
                }
              ]}
              startDelay={0.88}
              charDelay={0.03}
              align="left"
              itemsAlign="items-baseline"
              nowrap={true}
            />
          </div>
        </div>

        {/* Bottom Split Row — Description on Left, Action Buttons on Right */}
        <div className="w-full relative pt-0 sm:pt-2">
          {/* Desktop Symmetrical Accent Stars — 2 framing stars on tablet/desktop */}
          <div className="hidden md:flex w-full items-center justify-between pointer-events-none mb-4 sm:mb-5">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.85 }}
              className="text-white/75"
            >
              <Sparkle className="w-3.5 h-3.5 fill-white/75 text-white/75" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.85 }}
              className="text-white/75 pr-0 md:pr-4"
            >
              <Sparkle className="w-3.5 h-3.5 fill-white/75 text-white/75" />
            </motion.div>
          </div>

          {/* Content Row: Description on Left, Buttons on Right */}
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            {/* Description — Centered on Mobile, Left on Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.95 }}
              className="max-w-md lg:max-w-lg text-center md:text-left mx-auto md:mx-0"
            >
              <p className="font-sans text-white/85 text-[13px] min-[390px]:text-[14px] sm:text-sm md:text-[15px] leading-relaxed font-normal drop-shadow-sm px-0.5 sm:px-0">
                No more compromising on quality or choice. From modular kitchens to full home interiors, we craft bespoke living spaces tailored exactly around your budget — backed by up to 10-year warranty.
              </p>
            </motion.div>

            {/* Action Buttons — Symmetrical Center Stack on Mobile, Row on Desktop */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3 sm:gap-3.5 w-full sm:w-auto shrink-0 relative pr-0 md:pr-4">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 2.1 }}
                className="w-full sm:w-auto max-w-xs sm:max-w-none flex justify-center"
              >
                <NavLink
                  to="/contact"
                  className="font-sans group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 sm:py-3.5 px-6 sm:px-7 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 shrink-0"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 2.25 }}
                className="w-full sm:w-auto max-w-xs sm:max-w-none flex justify-center"
              >
                <NavLink
                  to="/portfolio"
                  className="font-sans group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 py-3 sm:py-3.5 px-6 sm:px-7 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 shadow-md shrink-0"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0 text-neutral-700" />
                </NavLink>
              </motion.div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 2.6 }}
      >
        <motion.div
          className="w-px h-7 sm:h-8 bg-gradient-to-b from-white/45 to-transparent"
          animate={{ scaleY: [1, 0.25, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

/* ─── Panel 2 — Second Video + Description (60vh mobile / 100vh desktop) ─── */
const HeroPanel2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div
      ref={ref}
      className="relative w-full h-[60vh] md:h-screen md:min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover transform-gpu pointer-events-none scale-105"
      >
        <source src="/herosection2.mp4" type="video/mp4" />
      </video>

      {/* Overlay — dark ambient fade that seamlessly melts into 100% pure black at both top and bottom */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[#5C2A0A]/18 pointer-events-none" />

      {/* Content — font matching image 1 description style */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-8 flex flex-col items-center justify-center text-center">

        {/* Decorative subtle accent bar */}
        <motion.div
          className="w-12 h-px bg-primary/70 mb-5 sm:mb-8"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        />

        {/* Main statement in clean geometric font from reference image */}
        <motion.p
          className="font-sans text-white/95 text-base sm:text-2xl md:text-3xl lg:text-[34px] leading-relaxed font-normal tracking-normal mb-4 sm:mb-6 drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.3 }}
        >
          20+ homes crafted since 2014 — modular kitchens, living spaces & full interiors, backed by up to 10-year warranty. Every material sourced and executed in-house.
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          className="font-sans text-primary text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold mb-5 sm:mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.65 }}
        >
          Venetus Interior · Bangalore Living
        </motion.p>

        {/* Decorative subtle accent bar */}
        <motion.div
          className="w-12 h-px bg-primary/70"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.85 }}
        />
      </div>
    </div>
  );
};

/* ─── Hero — Combines Both Viewport Panels ──────────────────────────── */
const Hero = () => {
  return (
    <section className="w-full bg-black border-none">
      <HeroPanel1 />
      <HeroPanel2 />
    </section>
  );
};

export default Hero;
