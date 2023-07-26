import React from "react";
import lvl_char_matt from '../pictures/LvlCharMatt.png'
import './Components.css'


const LvlCharMatt = ({ children }) => {
    return (
        <div className='lvlCharMatt'>
            <img src={lvl_char_matt} className="lvl_char_matt" alt="lvl_char_matt" />
            {children} 
        </div>
    )
}

export default LvlCharMatt;