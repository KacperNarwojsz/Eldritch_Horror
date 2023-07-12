import React from 'react';
import './EncountersCards.css'

const EncountersCards = ({ submitAnswerToHome }) => {
    return (
        <div className='encounters'>
            <button className='encounterCard' id='America'></button> 
            <button className='encounterCard' id='Europe'></button> 
            <button className='encounterCard' id='AsiaAustralia'></button> 
            <button className='encounterCard' id='General'></button>
            <button className='encounterCard' id='OtherWorld'></button>
            <button className='encounterCard' id='Expedition'></button>
        </div>
    )
}

export default EncountersCards;