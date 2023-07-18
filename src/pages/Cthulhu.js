import React from "react";
import EncountersCards from "../Components/EncountersCards";
import eldritch_board from "../pictures/Eldritch_board.png";
import CthulhuBoard from "../Components/CthulhuBoard";
// import EldrichBox from "../pictures/EldrichBox.jpg"
import './AllPages.css'


const Cthulhu = ({ submitAnswerToMain }) => {
    return (
        <div className='Cthulhu'>
            <div className="CthulhuContainer">
                {/* <div className="test"><img src={EldrichBox} alt={EldrichBox} /></div> */}
                <div className="EldritchBoardDiv"><img src={eldritch_board} className="eldritch_board" alt="Eldritch_board" /></div>
                <div className="CthuluBoardDiv"><CthulhuBoard /></div>
                <div className="EncountersCardsDiv"><EncountersCards /></div>
            </div>
        </div>
    )
}

export default Cthulhu;