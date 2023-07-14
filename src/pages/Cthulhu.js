import React from "react";
import EncountersCards from "../Components/EncountersCards";
import eldrich_board from "../pictures/Eldrich_board.png";
import CthulhuBoard from "../Components/CthulhuBoard";
import './AllPages.css'


const Cthulhu = ({ submitAnswerToMain }) => {
    return (
        <div className='Cthulhu'>
                <img src={eldrich_board} className="eldrich_board" alt="Eldrich_board" />
            {/* <div className="CthulhuCards">
                <CthulhuBoard />
                <EncountersCards />
            </div> */}
        </div>
    )
}

export default Cthulhu;