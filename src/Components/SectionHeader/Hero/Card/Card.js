import React from 'react'
import './Card.scss'
import Picture from './../../../../Assets/Drive-w.jpg'
const Card = () => {
    return(
        <div className='Card'>
            <img src ={Picture} className='Card--picture' />
            <div className = 'Card--text' >
                Drive
            </div>
        </div>
    )
}

export default Card