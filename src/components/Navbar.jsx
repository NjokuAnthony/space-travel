import React from 'react'


import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <link to='/'><h1>CAN TRVL</h1></link>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
                <Link to='/training'>Training</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar