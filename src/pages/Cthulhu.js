import React from "react";
import EncountersCards from "../Components/EncountersCards";
import eldrich_board from "../pictures/Eldrich_board.png";
import CthulhuBoard from "../Components/CthulhuBoard";
// import EldrichBox from "../pictures/EldrichBox.jpg"
import './AllPages.css'


const Cthulhu = ({ submitAnswerToMain }) => {
    return (
        <div className='Cthulhu'>
            <div className="CthulhuContainer">
                {/* <div className="test"><img src={EldrichBox} alt={EldrichBox} /></div> */}
                <div className="EldrichBoardDiv"><img src={eldrich_board} className="eldrich_board" alt="Eldrich_board" /></div>
                <div className="CthuluBoardDiv"><CthulhuBoard /></div>
                <div className="EncountersCardsDiv"><EncountersCards /></div>
            </div>
        </div>
    )
}

export default Cthulhu;