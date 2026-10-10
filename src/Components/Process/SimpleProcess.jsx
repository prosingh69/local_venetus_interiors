import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Compass, 
  Layers, 
  Hammer, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import LettersPullUp from '../Animations/LettersPullUp';
import FadeUp from '../Animations/FadeUp';
import { useConsultationModal } from '../../context/ConsultationModalContext';

const stepsData = [
  {
    id: 1,
    stepNumber: "01",
    icon: MessageSquare,
    title: "In-Home Consultation",
    shortDesc: "Free consultation to understand your vision, requirements, space, and exact budget.",
    image: "/design.jpg",
    stageTag: "Step 01 · Initial Consultation",
    actionTitle: "Understanding Your Vision & Space",
    actionDesc: "Our senior design consultant visits your site, listens to your lifestyle needs, and plans budget-friendly possibilities.",
    featureBadge: "100% Free & No Obligation"
  },
  {
    id: 2,
    stepNumber: "02",
    icon: Compass,
    title: "Measure & 3D Design",
    shortDesc: "Millimeter-precise laser measurements & customized photorealistic 3D room renders.",
    image: "https://res.cloudinary.com/lbei6xmb/image/upload/f_auto,q_auto/v1786158021/WhatsApp_Image_2026-08-08_at_8.29.42_AM_gqiqg2.jpg",
    stageTag: "Step 02 · 3D Space Planning",
    actionTitle: "Photorealistic 3D Walkthrough",
    actionDesc: "Experience how every corner, modular cabinet, and ambient light will look before any physical work starts.",
    featureBadge: "Virtual 3D Walkthrough"
  },
  {
    id: 3,
    stepNumber: "03",
    icon: Layers,
    title: "Planning & Material Selection",
    shortDesc: "Hand-pick BWR plywood, acrylics, laminates & German hardware with clear itemized pricing.",
    image: "/premium.jpg",
    stageTag: "Step 03 · Materials & Quotes",
    actionTitle: "Certified Materials & Transparent Quote",
    actionDesc: "Touch and select verified material swatches with full itemized specification sheets and zero hidden costs.",
    featureBadge: "Certified Brands"
  },
  {
    id: 4,
    stepNumber: "04",
    icon: Hammer,
    title: "Professional Installation",
    shortDesc: "Precision factory fabrication followed by clean, dust-managed on-site assembly by master craftsmen.",
    image: "/kitchen1.jpeg",
    stageTag: "Step 04 · In-House Execution",
    actionTitle: "Precision On-Site Craftsmanship",
    actionDesc: "Our in-house project managers supervise daily execution to ensure guaranteed delivery timelines.",
    featureBadge: "Guaranteed Timelines"
  },
  {
    id: 5,
    stepNumber: "05",
    icon: CheckCircle2,
    title: "Final Walkthrough & Support",
    shortDesc: "Rigorous 100+ point quality inspection, deep cleaning, key handover, and up to 10-year warranty.",
    image: "/bedroom4.jpeg",
    stageTag: "Step 05 · Quality & Handover",
    actionTitle: "Turnkey Handover & Warranty",
    actionDesc: "We review every hinge, finish, and drawer with you for complete satisfaction, backed by ongoing aftercare.",
    featureBadge: "Up to 10-Year Warranty"
  }
];

const SimpleProcess = () => {
  // Step 1 is active by default
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = stepsData.find((s) => s.id === activeStep) || stepsData[0];
  const { openModal } = useConsultationModal();

  return (
    <section className="w-full bg-surface-soft pt-10 sm:pt-12 md:pt-14 pb-10 sm:pb-14 md:pb-16 border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-14">

        {/* Section Header (Centered on Top) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 px-2 sm:px-4">
          {/* Main Title matching CompanyIntro font, leading, and LettersPullUp */}
          <h2 className="font-sans text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-gray-900 tracking-tight leading-[1.18] mb-3 sm:mb-4 text-center">
            <LettersPullUp
              text="Our Interior Design Process in Bangalore"
              highlightWord="Bangalore"
              highlightClass="text-primary italic"
              startDelay={0.1}
              charDelay={0.032}
              align="center"
            />
          </h2>

          {/* Subtitle Paragraph */}
          <FadeUp delay={0.35} duration={0.6}>
            <p className="text-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Our structured process is designed to make your home interior journey seamless, transparent, and stress-free. Explore each stage of how we craft your Bangalore home:
            </p>
          </FadeUp>
        </div>

        {/* 2-Column Interactive Layout: Left = Image Showcase (on top on mobile), Right = 5 Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">

          {/* Left Column (Dynamic Visual Representation Card) — order-1 on mobile so user sees image change immediately on tap */}
          <div className="lg:col-span-6 w-full order-1 lg:order-1">
            <div className="sticky top-28 h-full min-h-[340px] sm:min-h-[440px] lg:min-h-[520px]">
              <div className="relative w-full h-full min-h-[340px] sm:min-h-[440px] lg:min-h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/80 shadow-xl bg-gray-900 flex flex-col justify-between">

                {/* Animated Image Crossfade on Step Change */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep.id}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={currentStep.image}
                      alt={currentStep.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Cinematic Dark Gradient Overlays for High Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/40 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Glass Badges (Responsive layout ensuring right-side badge never overflows or gets clipped on mobile) */}
                <div className="relative z-10 p-3 sm:p-5 md:p-6 flex items-center justify-between gap-2 w-full">
                  {/* Step Tag */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs md:text-[13px] font-medium shadow-sm whitespace-nowrap shrink-0">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse shrink-0" />
                    <span className="sm:hidden text-white/70 text-[10px] uppercase tracking-wider font-semibold">Step</span>
                    <span className="text-primary font-bold">{currentStep.stepNumber}</span>
                    <span className="text-white/40 hidden sm:inline">·</span>
                    <span className="text-white/95 hidden sm:inline">{currentStep.title}</span>
                  </div>

                  {/* Feature Pill */}
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-primary text-white text-[10px] sm:text-xs font-bold shadow-md whitespace-nowrap shrink-0 max-w-[65%] sm:max-w-none">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                    <span className="truncate">{currentStep.featureBadge}</span>
                  </span>
                </div>

                {/* Bottom Glass Content Card (Visual Explanation of What Happens) */}
                <div className="relative z-10 p-3.5 sm:p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="bg-black/75 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 text-white shadow-2xl"
                    >
                      <h4 className="font-sans text-sm sm:text-base md:text-lg font-bold tracking-tight text-white mb-1">
                        {currentStep.actionTitle}
                      </h4>
                      <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-2.5">
                        {currentStep.actionDesc}
                      </p>

                      <button
                        type="button"
                        onClick={() => openModal({
                          title: `Step ${currentStep.stepNumber} · ${currentStep.title}`,
                          subtitle: currentStep.actionDesc
                        })}
                        className="inline-flex items-center gap-1.5 text-primary hover:text-primary-hover text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                      >
                        <span>Start this step with our experts</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column (5 Interactive Process Points) — order-2 on mobile */}
          <div className="lg:col-span-6 flex flex-col gap-2.5 sm:gap-3.5 justify-between order-2 lg:order-2">
            {stepsData.map((step) => {
              const IconComponent = step.icon;
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  onTouchStart={() => setActiveStep(step.id)}
                  onMouseEnter={() => setActiveStep(step.id)}
                  role="button"
                  tabIndex={0}
                  className={`group relative rounded-xl sm:rounded-2xl p-3.5 sm:p-5 transition-all duration-300 cursor-pointer border flex items-center gap-3.5 sm:gap-5 select-none active:scale-[0.99] ${
                    isActive
                      ? 'bg-white border-primary shadow-lg shadow-primary/10 ring-2 ring-primary/20 scale-[1.01]'
                      : 'bg-white/80 hover:bg-white border-gray-100/90 hover:border-gray-300/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)]'
                  }`}
                >
                  {/* Step Number / Icon */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'bg-primary text-white shadow-md shadow-primary/25'
                        : 'bg-surface-soft text-gray-600 border border-gray-100 group-hover:text-primary group-hover:bg-brand-light'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Step Text Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5 sm:mb-1">
                      <h3
                        className={`font-bold text-xs sm:text-base md:text-[17px] tracking-tight transition-colors ${
                          isActive ? 'text-primary' : 'text-gray-900 group-hover:text-primary'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span
                        className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shrink-0 transition-colors ${
                          isActive
                            ? 'bg-primary/15 text-primary'
                            : 'bg-gray-100 text-gray-500 group-hover:bg-brand-light group-hover:text-primary'
                        }`}
                      >
                        {step.stepNumber}
                      </span>
                    </div>

                    <p className="text-secondary text-[11px] sm:text-[13px] md:text-sm leading-relaxed">
                      {step.shortDesc}
                    </p>
                  </div>

                  {/* Active Indicator Arrow */}
                  <div
                    className={`shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'opacity-100 translate-x-0 text-primary'
                        : 'opacity-0 -translate-x-2 text-gray-300 group-hover:opacity-60'
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default SimpleProcess;
