import React from 'react'
import '../style/Card.css'
import Athlete from '../images/katie-zaferes.png'
import Star from '../images/star.png'


export default function Card(){
    return(
        <div className='card--container'>
            <div className='card-img--container'>
                <strong className='card-img--status'>SOLD OUT</strong>
                <img src={Athlete} alt="katie-experience" className='card-img' />
            </div>
            <div className='card-information--container'>
                <img src={Star} alt="star-rating" className='card-information--img' />
                <span className='card-information--rating'>5.0 </span>
                <span className='card-information--count'>(6) </span>
                <span className='card-information--division'>· </span>
                <span className='card-information--country'>USA</span>
            </div>
            <div className='card-text--container'>
                <p className='card-text--description'>Life lessons with Katie Zaferes</p>
                <p className='card-text--price--container'>
                    <strong className='card-text--price'>From $136 /</strong>
                    <span className='card-text--unitary'>person</span>
                </p>
            </div>
        </div>
    )
}