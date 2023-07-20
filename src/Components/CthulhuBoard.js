import React from 'react';
import './Components.css'

const CthulhuBoard = ({ submitAnswerToHome }) => {
    return (
        <div>
            <button className='CthulhuSheet'></button> 
            <button className='CthulhuMystery'></button>
            <button className='CthulhuMysteryFront'></button>
            <button className='Mythos'></button>
            <button className='Mythos1'></button>
            <button className='Mythos2'></button>
            <button className='Mythos3'></button>
            <button className='Mythos4'></button>
            <button className='Mythos5'></button>
        </div>
    )
}

export default CthulhuBoard;