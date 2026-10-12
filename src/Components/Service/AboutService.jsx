import React from 'react'
import { motion } from 'framer-motion'
import { useConsultationModal } from '../../context/ConsultationModalContext'
import LettersPullUp from '../Animations/LettersPullUp'
import FadeUp from '../Animations/FadeUp'

const serviceCards = [
  {
    index: '01',
    title: 'Residential Interior Design',
    image: '/bedroom4.jpeg',
    imageHeight: 'h-[360px] sm:h-[380px] lg:h-[330px]',
    description: 'Tailored design services for private homes, including room makeovers and complete home transformations.'
  },
  {
    index: '02',
    title: 'Commercial Interior Design',
    image: '/premium.jpg',
    imageHeight: 'h-[360px] sm:h-[380px] lg:h-[470px]',
    description: 'Designing functional and attractive interiors for businesses, including offices, retail spaces, and hospitality venues.'
  },
  {
    index: '03',
    title: 'Interior Design Consultation',
    image: '/design.jpg',
    imageHeight: 'h-[360px] sm:h-[380px] lg:h-[330px]',
    description: 'Providing professional advice on concepts, spatial layouts, curated color schemes, and premium material selection.'
  },
  {
    index: '04',
    title: 'Outdoor & Landscape Design',
    image: '/kitchen1.jpeg',
    imageHeight: 'h-[360px] sm:h-[380px] lg:h-[430px]',
    description: 'Extending design services to outdoor spaces such as gardens, patios, and decks with weather-resistant finishes.'
  },
  {
    index: '05',
    title: 'Custom Interior Design',
    image: '/bedroom3.jpeg',
    imageHeight: 'h-[360px] sm:h-[380px] lg:h-[290px]',
    description: 'Overhauling existing spaces to modernize and improve functionality, custom wardrobes, and tailored aesthetics.'
  },
  {
    index: '06',
    title: 'Interior 2D/3D Layouts',
    image: '/bedroom.jpeg',
    imageHeight: 'h-[360px] sm:h-[380px] lg:h-[430px]',
    description: 'Realistic 3D visualizations to help you envision your space, textures, and lighting before it’s built in real life.'
  }
]

const col1Cards = [serviceCards[0], serviceCards[3]] // 01, 04
const col2Cards = [serviceCards[1], serviceCards[4]] // 02, 05
const col3Cards = [serviceCards[2], serviceCards[5]] // 03, 06

const ServiceCardItem = ({ data, isBottomCard = false }) => {
  const { openModal } = useConsultationModal()

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => openModal({
        title: `Consultation: ${data.title}`,
        subtitle: `Talk with our senior design architects to plan your layout, 3D designs, and exact budget for ${data.title}.`
      })}
      className={`group cursor-pointer flex flex-col ${isBottomCard ? 'lg:mt-auto' : ''}`}
    >
      {/* Image container with rounded corners & top-left index number */}
      <div className={`relative w-full ${data.imageHeight} overflow-hidden rounded-2xl sm:rounded-[26px] bg-neutral-100 shadow-sm`}>
        {/* Top-left number */}
        <div className="absolute top-4 left-5 z-10 pointer-events-none">
          <span className="font-sans font-bold text-2xl sm:text-3xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {data.index}
          </span>
        </div>

        {/* Top gradient for legibility */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/45 via-black/15 to-transparent z-1 pointer-events-none" />

        {/* Image */}
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transform-gpu group-hover:scale-106 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Caption: Title & Excerpt (Centered on Mobile like reference, Left-aligned on Desktop) */}
      <div className="pt-4 sm:pt-5 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h3 className="font-sans text-xl sm:text-[22px] md:text-[23px] font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 tracking-tight leading-snug mb-2">
          {data.title}
        </h3>
        <p className="font-sans text-gray-500 text-sm sm:text-[14.5px] leading-relaxed max-w-sm sm:max-w-md lg:max-w-none">
          {data.description}
        </p>
      </div>
    </motion.div>
  )
}

const AboutService = () => {
  return (
    <section id="services-grid" className="w-full bg-white pt-10 sm:pt-14 md:pt-16 pb-12 sm:pb-14 md:pb-16 border-b border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-14">

        {/* Section Header matching Homepage styling & Reference Screenshot */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4">
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 tracking-tight leading-tight sm:leading-[1.2] mb-2 sm:mb-3 text-center">
            <LettersPullUp
              text="Explore Our Comprehensive Interior Design Services"
              highlightWord="Comprehensive Interior Design"
              highlightClass="text-primary italic"
              startDelay={0.08}
              charDelay={0.025}
              align="center"
            />
          </h2>

          <FadeUp delay={0.35} duration={0.6}>
            <p className="hidden sm:block font-sans text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto mt-1 sm:mt-2">
              From bespoke residential styling to turnkey modular execution, discover how we craft spaces tailored to your lifestyle.
            </p>
          </FadeUp>
        </div>

        {/* Mobile & Tablet View (< lg): Sequential Order 01 -> 02 -> 03 -> 04 -> 05 -> 06 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:hidden">
          {serviceCards.map((card) => (
            <ServiceCardItem key={`mobile-${card.index}`} data={card} />
          ))}
        </div>

        {/* Desktop View (≥ lg): 3-Column Staggered Masonry Grid matching reference layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-7 xl:gap-8 items-stretch">
          
          {/* Column 1 (01, 04) */}
          <div className="flex flex-col justify-between h-full gap-7 lg:gap-8">
            {col1Cards.map((card, idx) => (
              <ServiceCardItem key={`desk-${card.index}`} data={card} isBottomCard={idx === 1} />
            ))}
          </div>

          {/* Column 2 (02, 05 — Tall Top, Short Bottom, Anchored to Bottom Line) */}
          <div className="flex flex-col justify-between h-full gap-7 lg:gap-8">
            {col2Cards.map((card, idx) => (
              <ServiceCardItem key={`desk-${card.index}`} data={card} isBottomCard={idx === 1} />
            ))}
          </div>

          {/* Column 3 (03, 06) */}
          <div className="flex flex-col justify-between h-full gap-7 lg:gap-8">
            {col3Cards.map((card, idx) => (
              <ServiceCardItem key={`desk-${card.index}`} data={card} isBottomCard={idx === 1} />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutService
