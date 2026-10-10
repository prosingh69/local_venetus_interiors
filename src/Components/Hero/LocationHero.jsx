import React, { useRef } from 'react';
import { ArrowRight, ChevronRight, Sparkle, Building2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { TypingEffect } from '../Animations/TypingEffect';
import { useConsultationModal } from '../../context/ConsultationModalContext';

/**
 * LocationHeroPanel1 — First Viewport Panel
 * - High-res interior background image customized for location.
 * - Dynamic 2-line title, location pill badge, action CTA buttons.
 */
const LocationHeroPanel1 = ({ locationName = 'Indiranagar', bgImage = '/design.jpg' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { openModal } = useConsultationModal();

  return (
    <div
      ref={ref}
      className="relative w-full h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Ambient Scale */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <img
          src={bgImage}
          alt={`Luxury Interior Designers in ${locationName}, Bangalore`}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Cinematic Overlays for High Legibility & Full Vertical Screen View */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14 flex flex-col justify-center pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 text-center md:text-left">
        
        {/* Top Tag / Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          className="mb-3.5 sm:mb-5 flex items-center justify-center md:justify-start"
        >
          <NavLink
            to="/services"
            className="group inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs md:text-[13px] font-medium transition-all shadow-sm active:scale-98 max-w-[94%] sm:max-w-none"
          >
            <span className="bg-primary text-white text-[9px] sm:text-[10px] md:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wide uppercase whitespace-nowrap shrink-0">
              {locationName}
            </span>
            <span className="text-white/95 truncate">
              <span className="sm:hidden">Luxury Home Interiors</span>
              <span className="hidden sm:inline">Luxury Interiors in {locationName}, Bangalore</span>
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </NavLink>
        </motion.div>

        {/* Mobile View Title: Exactly matching Homepage Hero (Playfair serif + italic gold + curved underline) */}
        <div className="md:hidden flex flex-col items-center text-center mb-2.5 sm:mb-4 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-[clamp(32px,8.6vw,44px)] font-normal text-white tracking-tight leading-[1.12] drop-shadow-md"
          >
            Interior Designers in
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center mt-1"
          >
            <span className="font-serif italic text-[clamp(26px,6.8vw,36px)] font-normal text-primary tracking-tight leading-[1.18] drop-shadow-md">
              {locationName}
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
        <div className="hidden md:flex mb-3 sm:mb-5 max-w-4xl flex-col items-start text-left mx-0">
          {/* Line 1 */}
          <div className="w-full flex justify-start">
            <TypingEffect
              text={`Interior Designers in`}
              className="font-sans text-white md:text-5xl lg:text-[48px] xl:text-[52px] font-bold tracking-tight leading-[1.1] drop-shadow-md"
              startDelay={0.15}
              charDelay={0.035}
              align="left"
              nowrap={true}
            />
          </div>

          {/* Line 2 — Stylized Serif Ampersand + Location Name */}
          <div className="w-full flex justify-start mt-0.5 sm:mt-0 md:-mt-2">
            <TypingEffect
              segments={[
                {
                  text: '&',
                  className: 'font-serif italic font-normal text-accent md:text-7xl lg:text-[80px] xl:text-[88px] leading-none drop-shadow-md select-none inline-block align-baseline'
                },
                {
                  text: `${locationName}`,
                  className: 'font-sans font-bold text-white md:text-5xl lg:text-[48px] xl:text-[52px] tracking-tight leading-[1.1] drop-shadow-md align-baseline'
                }
              ]}
              startDelay={0.7}
              charDelay={0.035}
              align="left"
              itemsAlign="items-baseline"
              nowrap={true}
            />
          </div>
        </div>

        {/* Bottom Split Row — Description on Left, Action Buttons on Right */}
        <div className="w-full relative pt-1">
          
          {/* Accent Stars Framing */}
          <div className="hidden md:flex w-full items-center justify-between pointer-events-none mb-2.5 sm:mb-3">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="text-white/75"
            >
              <Sparkle className="w-3.5 h-3.5 fill-white/75 text-white/75" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="text-white/75 pr-0 md:pr-4"
            >
              <Sparkle className="w-3.5 h-3.5 fill-white/75 text-white/75" />
            </motion.div>
          </div>

          {/* Description & Buttons */}
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.5 }}
              className="max-w-md lg:max-w-lg text-center md:text-left mx-auto md:mx-0"
            >
              <p className="font-sans text-white/85 text-xs sm:text-sm md:text-[14px] leading-relaxed font-normal drop-shadow-sm px-2 sm:px-0">
                Transform your {locationName} residence with Venetus Interior. From modular kitchens to full turnkey luxury homes, we craft bespoke living spaces tailored around your lifestyle and budget — backed by up to 10-year warranty.
              </p>
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3 sm:gap-3 w-full sm:w-auto shrink-0 relative pr-0 md:pr-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 1.65 }}
                className="w-full sm:w-auto max-w-xs sm:max-w-none flex justify-center"
              >
                <button
                  type="button"
                  onClick={() => openModal({
                    title: `Book Free Consultation in ${locationName}`,
                    subtitle: `Transform your ${locationName} residence with bespoke luxury designs & transparent pricing.`,
                    projectLocation: locationName
                  })}
                  className="font-sans group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 shrink-0 cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 1.75 }}
                className="w-full sm:w-auto max-w-xs sm:max-w-none flex justify-center"
              >
                <NavLink
                  to="/portfolio"
                  className="font-sans group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 py-2.5 sm:py-3 px-5 sm:px-6 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 shadow-md shrink-0"
                >
                  <span>View Portfolio</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0 text-neutral-700" />
                </NavLink>
              </motion.div>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 2.0 }}
      >
        <motion.div
          className="w-px h-6 sm:h-7 bg-gradient-to-b from-white/45 to-transparent"
          animate={{ scaleY: [1, 0.25, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
};

/**
 * LocationHeroPanel2 — Second Hero Viewport Panel
 * - Background cinematic video with dark gradient melt.
 * - Project highlight tag (Active projects at key apartments).
 * - Location-customized paragraph mentioning client apartments & turnkey scope.
 * - Badges for key residential societies in that locality.
 * - Sub-tagline.
 */
const LocationHeroPanel2 = ({ locConfig, locationName = 'Bangalore' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const statement =
    locConfig?.secondHeroStatement ||
    `Crafting bespoke luxury homes, modular kitchens & full turnkey interiors in ${locationName}, Bangalore — backed by up to 10-year warranty and in-house execution.`;
  const highlightProject = locConfig?.highlightProject;
  const apartments = locConfig?.apartments || [];
  const subTag = locConfig?.subTag || `${locationName} Living`;

  return (
    <div
      ref={ref}
      className="relative w-full h-screen min-h-[100dvh] pt-24 pb-16 sm:py-20 md:py-24 flex items-center justify-center overflow-hidden bg-black"
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

      {/* Cinematic Overlays that melt seamlessly into 100% pure black */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-[#5C2A0A]/18 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col items-center justify-center text-center">
        
        {/* Top Tag / Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
          className="mb-4 sm:mb-6 flex items-center justify-center w-full px-4"
        >
          <NavLink
            to="/portfolio"
            className="group inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs md:text-[13px] font-medium transition-all shadow-sm active:scale-98"
          >
            <span className="bg-primary text-white text-[9px] sm:text-[10px] md:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wide uppercase whitespace-nowrap shrink-0">
              {locationName}
            </span>
            <span className="text-white/95">
              <span className="sm:hidden">
                {locConfig?.apartments?.[0] ? `${locConfig.apartments[0]} Projects` : `Luxury Interiors`}
              </span>
              <span className="hidden sm:inline">
                {highlightProject || `Luxury Interiors in ${locationName}, Bangalore`}
              </span>
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </NavLink>
        </motion.div>

        {/* Top Decorative Accent Bar (Desktop only to prevent awkward floating line on mobile) */}
        <motion.div
          className="hidden sm:block w-12 h-px bg-primary/70 mb-5 sm:mb-7"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        />

        {/* Main Statement Paragraph — Customized for the Location */}
        <motion.p
          className="font-sans text-white/95 text-base sm:text-xl md:text-2xl lg:text-[27px] leading-relaxed font-normal tracking-normal mb-6 sm:mb-7 drop-shadow-sm max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.3 }}
        >
          {statement}
        </motion.p>

        {/* Apartment Societies Badges List — Solid Clean Dark Tags (Zero Glassmorphism) */}
        {apartments && apartments.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8 max-w-2xl"
          >
            <span className="text-gray-400 text-xs sm:text-sm font-medium mr-1 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-primary" />
              Key Societies:
            </span>
            {apartments.map((apt, idx) => (
              <span
                key={idx}
                className="px-3 sm:px-3.5 py-1 rounded-full bg-[#161616] border border-[#2b2b2b] text-gray-300 hover:text-white hover:border-primary/50 text-xs sm:text-[13px] font-medium transition-colors"
              >
                {apt}
              </span>
            ))}
          </motion.div>
        )}

        {/* Sub-tagline */}
        <motion.p
          className="font-sans text-primary text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold mb-5 sm:mb-7"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        >
          Venetus Interior · {subTag}
        </motion.p>

        {/* Bottom Decorative Accent Bar */}
        <motion.div
          className="w-12 h-px bg-primary/70"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.75 }}
        />
      </div>
    </div>
  );
};

/**
 * LocationHero — Combines Panel 1 (Image Hero) & Panel 2 (Hyper-local Projects & Societies)
 */
const LocationHero = ({ locConfig, locationName, bgImage }) => {
  const name = locConfig?.name || locationName || 'Bangalore';
  const image = locConfig?.image || bgImage || '/design.jpg';

  return (
    <section className="w-full bg-black border-none">
      <LocationHeroPanel1 locationName={name} bgImage={image} />
      <LocationHeroPanel2 locConfig={locConfig} locationName={name} />
    </section>
  );
};

export default LocationHero;
