import React from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="class-container">
            <div className="left">
                <div className="location">
                    <FaSearchLocation size={20} style={{color: "#fff", marginRight: '2rem'}}/>
                    <div>
                    <p>42 Jagunmolu St.</p>
                    <h4>Lagos, Nigeria</h4>
                </div>
                </div>
                
                <div className="phone">
                     <h4><FaPhone size={20} style={{color: "#fff", marginRight: '2rem'}} />08065610691</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: '2rem'}} />a_njokuchibuzor@yahoo.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About The Company</h4>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Suscipit quaerat quibusdam 
                    neque numquam provident molestias veritatis 
                    id iste. Quidem, illum!</p>

                    <div className="social">
                        <FaFacebook size={30} style={{color: "#fff", marginRight: '1rem'}} />
                        <FaTwitter size={30} style={{color: "#fff", marginRight: '1rem'}} />
                        <FaLinkedin size={30} style={{color: "#fff", marginRight: '1rem'}} />
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Footer