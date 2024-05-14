import React from 'react'
import Navbar from '../components/navbar'
import HeroimgAbout from '../components/HeroimgAbout'
import Footer from '../components/Footer'
import Form from '../components/Form1'



const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroimgAbout heading1 = "CONTACT" text1 = "Let's have a Chat " />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact