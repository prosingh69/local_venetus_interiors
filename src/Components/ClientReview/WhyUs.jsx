import React from 'react'
import ClientTrust from './ClientTrust'
import { motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp'

const familyData = [
  {
    id: 1,
    Title: "Transparent Communication",
    Para: "We keep you updated at every step. No surprises, only honest conversations."
  },
  {
    id: 2,
    Title: "Quality Guarantee",
    Para: "Premium materials and expert craftsmanship backed by 10-year warranty."
  },
  {
    id: 3,
    Title: "On-Time Delivery",
    Para: "We respect your time. 100% on-time delivery record with guaranteed 45-day handover."
  },
  {
    id: 4,
    Title: "Fair Pricing",
    Para: "Transparent quotes with no hidden costs. You know exactly what you're paying for."
  },
  {
    id: 5,
    Title: "Expert Team",
    Para: "Certified designers with specialized experience in Bangalore apartments."
  },
  {
    id: 6,
    Title: "Post-Project Support",
    Para: "Ongoing support and maintenance for 10 years after project completion."
  }
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 240, damping: 22 },
  },
}

const WhyUs = () => {
  return (
    <section className='py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto'>
      <FadeUp delay={0.05} duration={0.65}>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-balance px-2 mb-2'>
          Why Families Trust Us
        </h2>
      </FadeUp>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-6 sm:mt-10'
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {familyData.map((data) => (
          <motion.div key={data.id} variants={itemVariants}>
            <ClientTrust Title={data.Title} Para={data.Para} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default WhyUs
