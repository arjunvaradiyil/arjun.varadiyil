import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Contactform from '../components/Contactform'
import AboutPreview from '../components/AboutPreview'
import ServicesSection from '../components/Services'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <Banner/>
        <AboutPreview/>
        <ServicesSection/>      
        <Contactform/>
    </div>
  )
}

export default Home