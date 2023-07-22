import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
           <img src={logo} alt='logo'/>
        </div>
        <div className='links'>
            <Link to='./'>Home</Link>
            <Link to='./Products'>Products</Link>
            <Link to='./Documentation'>Documentation</Link>
            <Link to='./Pricing'>Pricing</Link>
        </div>
        <div className='Open'>
            <button className='btn'>Open Dashboard</button>
        </div>
    </div>
  )
}

export default Navbar