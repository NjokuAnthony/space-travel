import React from 'react'
import { Link } from 'react-router-dom'


import Rocket from '../assets/rocket.jpg'
import Satelite from '../assets/satelite.jpg'

import './Training.css'

const Training = () => {
  return (
    <div className='training'>
        <div className="left">
            <h1>TRAINING</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi laudantium praesentium.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={Rocket} className='img' alt='' />
            </div>
            <div className="img-stack bottom">
              <img src={Satelite} className='img' alt='' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Training