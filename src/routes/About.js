import React from 'react'
import Navbar from '../components/navbar'
import HeroimgAbout from '../components/HeroimgAbout'

import Footer from '../components/Footer'
import Aboucontent from '../components/Aboucontent'


const About = () => {
  return (
    <div>
      <Navbar />
      <HeroimgAbout classname="AboutHead" heading1 = "About"  />
      <Aboucontent />
      <Footer />
    </div>
  )
}

export default About;