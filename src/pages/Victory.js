import React from "react";
import './AllPages.css'


const Victory = ({ reloadApp }) => {

    return (
        <div>
            <div className="victoryDiv">
                <h1 className="victoryText">WYGRANA</h1>
                <button className="victoryButton" onClick={reloadApp}> Zagraj ponownie </button>
            </div>
        </div>
    )
}

export default Victory;