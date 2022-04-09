// js and html for the memory game

import React from 'react'
import "./singleCard.css"

export default function singleCard( {card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

  return (
    
    <div className='card'>
        <div className={flipped ? "flipped" : ""}>
            <img className='front' src={card.src} alt="card front"/>
            <img 
                className='back' 
                src="./img/cover.jpeg" 
                onClick={handleClick} 
                alt="back cover"
            />
        </div>
    </div>
  )
}
