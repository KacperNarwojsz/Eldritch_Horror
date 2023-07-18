import React from "react";
import EncountersCards from "../Components/EncountersCards";
// import eldritch_board from "../pictures/Eldritch_board.png";
import CthulhuBoard from "../Components/CthulhuBoard";
import EldritchBoard from "../Components/EldritchBoard";
import './AllPages.css'


const Cthulhu = ({ submitAnswerToMain }) => {
    return (
        <div className="Cthulhu">
            <EldritchBoard>
                {/* <CthulhuBoard />
                <EncountersCards /> */}
            </EldritchBoard>
        </div>
    )
}

export default Cthulhu;