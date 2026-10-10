import React from 'react'
import Hero from '../Components/Hero/Hero'
import TrustBelt from '../Components/TrustBelt/TrustBelt'
import OurDesignService from '../Components/OurDesignService/OurDesignService'
import SimpleProcess from '../Components/Process/SimpleProcess'
import CompanyIntro from '../Components/CompanyIntro/CompanyIntro'
import WhyChoose from '../Components/WhyChoose/WhyChoose'
import Testimonial from '../Components/Testimonial/Testimonial'
import HomeFAQ from '../Components/HomeFAQ/HomeFAQ'
import LastCTA from '../Components/LastCTA/LastCTA'
import { Helmet } from 'react-helmet-async'
// import ReviewByBackend from './../Components/GoogleReview/ReviewByBackend';
const Home = () => {
  return (
    <>
    
    <Helmet prioritizeSeoTags>
        <title>Venetus Interior | Premium Home & Interior Design</title>
        <meta name="description" content="Transform your living space with Venetus Interior. Experience modern home design, stunning before-and-after room transformations, and premium aesthetics." />
        <meta name="keywords" content="interior design, home decor, modern interior design, living room transformation, Venetus Interior" />
        <link rel="canonical" href="https://www.venetusinterior.in/" />
      </Helmet>
    <div>
        <Hero/>
        <TrustBelt/>
        <OurDesignService/>
        <SimpleProcess/>
        <CompanyIntro/>
        <WhyChoose/>
        <Testimonial/>
        <HomeFAQ/>
        <LastCTA/>
    </div>
    </>
  )
}

export default Home