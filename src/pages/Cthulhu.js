import React from "react";
import EncountersCards from "../Components/EncountersCards";
import CthulhuBoard from "../Components/CthulhuBoard";
import EldritchBoard from "../Components/EldritchBoard";
import './AllPages.css'


const Cthulhu = ({ submitAnswerToMain }) => {
    return (
        <div className="Cthulhu">
            <EldritchBoard>
                <CthulhuBoard />
                <EncountersCards />
            </EldritchBoard>
        </div>
    )
}

export default Cthulhu;