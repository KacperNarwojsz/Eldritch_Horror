import React from "react";
import eldritch_board from "../pictures/Eldritch_board.png";
import './Components.css'


const EldritchBoard = ({ children }) => {
    return (
        <div className='eldritchBoard'>
            <img src={eldritch_board} className="eldritch_board" alt="eldritch_board" />
            {children} 
        </div>
    )
}

export default EldritchBoard;