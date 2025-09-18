import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Contactform from '../components/Contactform'
import AboutPreview from '../components/AboutPreview'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <Banner/>
        <AboutPreview/>
        <Skills/>        
        <Contactform/>
    </div>
  )
}

export default Home