import React from 'react'
import '../style/Header.css'
import Grid from '../images/grid.png'

export default function Header(){
    return(
        <header className='hero--container'>
            <div className='hero-image--container'>
                <img src={Grid} alt='experiences' className='hero-image'/>
            </div>
            <div className='hero-text--container'>
                <h1 className='hero-title'>Online Experiences</h1>
                <p className='hero-paragraph'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </header>
    )
}