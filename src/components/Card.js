import React from 'react'
import '../style/Card.css'
import Star from '../images/star.png'


export default function Card(props){
    let badgeText
    if (props.item.openSpots  === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.item.location === 'Online'){
        badgeText = 'ONLINE'
    }
    // coverImg={require('./images/' + data.coverImg)}
    return(
        <div className='card--container'>
            <div className='card-img--container'>
                {badgeText && <strong className='card-img--status'>{badgeText}</strong>}
                <img src={require ('../images/' + props.item.coverImg)} alt="katie-experience" className='card-img' />
            </div>
            <div className='card-information--container'>
                <img src={Star} alt="star-rating" className='card--star' />
                <span className='card-information--rating'>{props.item.stats.rating} </span>
                <span className='card-information--count'>({props.item.stats.reviewCount}) </span>
                <span className='card-information--division'>· </span>
                <span className='card-information--country'>{props.item.location}</span>
            </div>
            <div className='card-text--container'>
                <p className='card--title'>{props.item.title}</p>
                <p className='card-text--description'>{props.item.description}</p>
                <p className='card-text--price--container'>
                    <strong className='card-text--price'>From ${props.item.price} /</strong>
                    <span className='card-text--unitary'>person</span>
                </p>
            </div>
        </div>
    )
}