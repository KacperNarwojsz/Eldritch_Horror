import React from "react";
import EncountersCards from "../Components/EncountersCards";
import CthulhuBoard from "../Components/CthulhuBoard";
import EldritchBoard from "../Components/EldritchBoard";
import './AllPages.css'


const Cthulhu = ({ submitAnswerToMain }) => {
    return (
        <div className="Cthulhu">
            <div className="CthulhuDiv">
                <EldritchBoard>
                    <div className="CthulhuBoardDiv">
                        <div className="CthulhuBoardGrid">
                            <CthulhuBoard />
                        </div>
                    </div>
                    <div className="EncountersDiv">
                        <div className="EncountersGrid">
                            <EncountersCards />
                        </div>
                    </div> 
                </EldritchBoard>
            </div>

        </div>
    )
}

export default Cthulhu;