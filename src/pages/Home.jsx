import React from 'react'
import Banner from '../components/Home/Banner'
// import Navbar from '../components/Navbar'
import Contactform from '../components/Contactform'
import ServicesSection from '../components/Home/Services'
import WhyMe from '../components/Home/Whyme'
import AboutScrollText from '../components/Home/AboutScrollText'

const Home = ({ theme }) => {
  return (
    <div className='overflow-x-hidden'>
        {/* <Navbar /> */}
        <Banner/>
        <AboutScrollText theme={theme} />
        <ServicesSection/>   
        <WhyMe/>   
        <Contactform/>
    </div>
  )
}

export default Home