import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../components/Image'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Image heading='CONTACT' text='Contact NJOKU Travels'/>
        <Form />
        <Footer />
    </div>
  )
}

export default Contact