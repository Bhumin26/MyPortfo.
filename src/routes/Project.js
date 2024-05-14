import React from 'react'
import Navbar from '../components/navbar'
// import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
import HeroimgProj from '../components/HeroimgProj'
import Workcard from '../components/workcard'

const Project = () => {
  return (
    <div> 
      <Navbar />
      <HeroimgProj />
      <Workcard />
      <Footer /> 
    </div>
  )
}

export default Project