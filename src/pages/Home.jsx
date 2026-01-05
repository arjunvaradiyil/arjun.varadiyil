import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Contactform from '../components/Contactform'
import AboutPreview from '../components/AboutPreview'
import ServicesSection from '../components/Services'
import WhyMe from '../components/Whyme'
import AboutScrollText from '../components/Home/AboutScrollText'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <Banner/>
        <AboutScrollText/>
        {/* <AboutPreview/> */}
        <ServicesSection/>   
        <WhyMe/>   
        <Contactform/>
    </div>
  )
}

export default Home