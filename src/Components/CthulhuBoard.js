import React from 'react';
import './Components.css'

const CthulhuBoard = ({ submitAnswerToHome }) => {
    return (
        <div className='CthulhuBoard'>
            <button className='CthulhuSheet'></button> 
            <button className='CthulhuMystery'></button>
            <button className='Mythos'></button>
        </div>
    )
}

export default CthulhuBoard;