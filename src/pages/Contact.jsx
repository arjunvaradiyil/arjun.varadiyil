import React from 'react'
import Contactform from '../components/Contactform'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <Contactform/>
    </div>
  )
}

export default Home