import React from "react";
import eldritch_logo from "../pictures/Eldritch_logo.png";
import './AllPages.css'


const Home = ({ loadAzathoth, loadYog, loadShub, loadCthulhu }) => {

    return (
        <div className='Home'>
            <div>
                <img src={eldritch_logo} className="main_eldritch_logo" alt="eldritch_logo" />
            </div>
            <div>
                <h1 className="main_title">WYBIERZ PRZEDWIECZNEGO:</h1>
            </div>
            <div>
                <button className="mainButton" id="buttonAzathoth" onClick={loadAzathoth}>Azathoth</button>
                <button className="mainButton" id="buttonYog" onClick={loadYog}>Yog-Sothoth</button>
                <button className="mainButton" id="buttonShub" onClick={loadShub}>Shub-Niggurath</button>
                <button className="mainButton" id="buttonCthulhu" onClick={loadCthulhu}>Cthulhu</button>
            </div>
        </div>
    )
}

export default Home;