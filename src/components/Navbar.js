import React from 'react'
import Logo from '../images/logo.svg'
import '../style/Navbar.css'

export default function Navbar(){
    return(
        <nav className='navbar--container'>
            <img src={Logo} className='navbar-logo' alt='airbnb-logo'/>
        </nav>
    )
}