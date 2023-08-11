import React from "react";
import './AllPages.css'


const Victory = ({ loadHome }) => {

    return (
        <div>
            <div className="victoryDiv">
                <h1 className="victoryText">WYGRANA</h1>
                <button className="victoryButton" onClick={loadHome}> Zagraj ponownie </button>
            </div>
        </div>
    )
}

export default Victory;