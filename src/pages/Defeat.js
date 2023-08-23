import React from "react";
import './AllPages.css'


const Defeat = ({ reloadApp }) => {

    return (
        <div>
            <div className="defeatDiv">
                <h1 className="defeatText">PORAŻKA</h1>
                <button className="defeatButton" onClick={reloadApp}> Zagraj <br></br>ponownie </button>
            </div>
        </div>
    )
}

export default Defeat;