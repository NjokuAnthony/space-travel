import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../components/Image'
import Footer from '../components/Footer'
import PricingCards from '../components/PricingCards'

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <Image heading="PRICING" text="Choose Your Trip" />
        <PricingCards />
        <Footer />
    </div>
  )
}

export default Pricing