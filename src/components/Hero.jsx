import React from 'react'
import {Link} from 'react-router-dom'
import './Hero.css'

import spaceVideo from '../assets/globe.mp4'


const Hero = () => {
  return (
    <div className='hero'>
        <video autoplay loop muted id='video'>
            <source src={spaceVideo} type='video.mp4' />
        </video>
        <div className='content'>
            <h1>Galaxy. Travel.</h1>
            <p>World First Civilian Space Travel</p>
            <div>
            <Link to='/training' className='btn' >Training</Link>
            <Link to='/contact' className='btn btn-light' >launch</Link>
        </div>
        </div>
        
    </div>
  )
}

export default Hero