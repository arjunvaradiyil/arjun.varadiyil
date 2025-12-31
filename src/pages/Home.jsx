import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Contactform from '../components/Contactform'
import AboutPreview from '../components/AboutPreview'
// import Testing from '../components/Testing'
import ServicesSection from '../components/Services'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <Banner/>
        <AboutPreview/>
        {/* <Testing/> */}
        <ServicesSection/>
        <Skills/>        
        <Contactform/>
    </div>
  )
}

export default Home