import React from "react";
import eldritch_logo from "../pictures/Eldritch_logo.png";
import './AllPages.css'


const Home = ({ loadAzathoth, loadYog, loadShub, loadCthulhu }) => {

    return (
        <div className='home'>
            <div>
                <img src={eldritch_logo} className="main_eldritch_logo" alt="eldritch_logo" />
            </div>
            <div>
                <h1 className="mainTitle">WYBIERZ PRZEDWIECZNEGO:</h1>
            </div>
            <div className="ancientsButtons">
                <button className="mainButton" id="ButtonAzathoth" onClick={loadAzathoth}>Azathoth</button>
                <button className="mainButton" id="ButtonYog" onClick={loadYog}>Yog-Sothoth</button>
                <button className="mainButton" id="ButtonShub" onClick={loadShub}>Shub-Niggurath</button>
                <button className="mainButton" id="ButtonCthulhu" onClick={loadCthulhu}>Cthulhu</button>
            </div>
        </div>
    )
}

export default Home;