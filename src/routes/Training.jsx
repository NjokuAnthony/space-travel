import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../components/Image'
import Footer from '../components/Footer'
import TrainingSection from '../components/Training'



const Training = () => {
  return (
    <div>
        <Navbar />
        <Image heading='TRAINING' text='Pre-Flight & In-Flight Training' />
        <TrainingSection />
        <Footer />
    </div>
  )
}

export default Training