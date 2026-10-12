import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import LettersPullUp from '../Animations/LettersPullUp'
import FadeUp from '../Animations/FadeUp'
import { useConsultationModal } from '../../context/ConsultationModalContext'

const packagesData = [
  {
    id: '3bhk',
    title: '3 BHK Apartments',
    price: 'Starts at 35 Lakhs*',
    image: '/design.jpg',
  },
  {
    id: '4bhk',
    title: '4 BHK Apartments',
    price: 'Starts at 45 Lakhs*',
    image: '/premium.jpg',
  },
  {
    id: 'villas',
    title: 'Luxury Villas',
    price: 'Starts at 50 Lakhs*',
    image: '/bedroom4.jpeg',
  },
]

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 240, damping: 22 },
  },
}

const ServicePackages = () => {
  const { openModal } = useConsultationModal()

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12">
        
        {/* ── Section Header (Exact Homepage Theme & Style) ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16 px-4">
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 tracking-tight leading-tight mb-4 text-center">
            <LettersPullUp
              text="Interior Design Packages"
              highlightWord="Packages"
              highlightClass="text-primary italic"
              startDelay={0.1}
              charDelay={0.035}
              align="center"
            />
          </h2>

          <FadeUp delay={0.35} duration={0.6}>
            <p className="font-sans text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-normal max-w-2xl mx-auto px-2">
              Explore our transparent, tailored interior design packages for Bangalore homes. From spacious apartments to luxury villas, crafted with premium materials and guaranteed timelines.
            </p>
          </FadeUp>
        </div>

        {/* ── 3 Packages Cards (Minimalist & Faithful to Reference Image) ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 xl:gap-10"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {packagesData.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              onClick={() =>
                openModal({
                  title: `Enquiry: ${pkg.title}`,
                  subtitle: `Plan your dream ${pkg.title} with transparent Bangalore pricing (${pkg.price}) and custom 3D layouts.`,
                })
              }
              className="group cursor-pointer flex flex-col items-center text-center"
            >
              {/* Wide Rounded Image */}
              <div className="w-full h-[240px] sm:h-[280px] md:h-[310px] lg:h-[340px] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-md bg-neutral-100 relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Subtle Hover Vignette */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
              </div>

              {/* Title & Price Below Image */}
              <div className="pt-4 sm:pt-5 w-full flex flex-col items-center text-center">
                <h3 className="font-sans text-xl sm:text-2xl lg:text-[25px] font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 tracking-tight leading-snug">
                  {pkg.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-gray-500 font-medium tracking-normal mt-1">
                  {pkg.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Price Awareness / Transparency Note ── */}
        <FadeUp delay={0.3} duration={0.6}>
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-8 sm:mt-10 max-w-2xl mx-auto px-4 leading-relaxed font-normal">
            *Final cost is customized based on actual carpet area, selected material brands (Greenply, Hafele, Blum), finishes (Acrylic, PU, Laminate), and specialized architectural requirements.
          </p>
        </FadeUp>

        {/* ── Two Action Buttons ── */}
        <FadeUp delay={0.4} duration={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mt-6 sm:mt-8">
            <button
              type="button"
              onClick={() =>
                openModal({
                  title: 'Get Customized Package Estimate',
                  subtitle: 'Share your floor plan or requirements to get an itemized budget quote and free 3D design consultation.',
                })
              }
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 sm:py-3.5 px-7 sm:px-8 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 active:scale-95 cursor-pointer"
            >
              <span>Get Customized Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="https://wa.me/919916565945?text=Hi%20Venetus%20Interior%2C%20I%20would%20like%20to%20know%20more%20about%20your%20interior%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-neutral-900 hover:bg-black text-white py-3 sm:py-3.5 px-7 sm:px-8 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="fill-white transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}

export default ServicePackages
