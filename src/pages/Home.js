import React from "react";
import eldrich_logo from "../pictures/eldrich_logo.png";
import './AllPages.css'


const Home = ({ submitAnswerToMain }) => {

    return (
        <div className='Home'>
            <div>
                <img src={eldrich_logo} className="eldrich_logo" alt="eldrich_logo" />
            </div>
            <div>
                <h1 className="title">WYBIERZ PRZEDWIECZNEGO:</h1>
            </div>
            <div>
                <button className="mainButton" id="buttonAzathoth">Azathoth</button>
                <button className="mainButton" id="buttonYog">Yog-Sothoth</button>
                <button className="mainButton" id="buttonShub">Shub-Niggurath</button>
                <button className="mainButton" id="buttonCthulhu">Cthulhu</button>
            </div>
        </div>
    )
}

export default Home;