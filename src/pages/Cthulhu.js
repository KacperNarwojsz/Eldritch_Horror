import React from "react";
import EncountersCards from "../Components/EncountersCards";
import CthulhuBoard from "../Components/CthulhuBoard";
import EldritchBoard from "../Components/EldritchBoard";
import './AllPages.css'


const Cthulhu = ({ submitAnswerToMain }) => {
    return (
        <div className="cthulhu">
            <EldritchBoard>
                <div className="topDiv">
                    <div className="boardDiv">
                        <div className="flexDiv">
                            <CthulhuBoard />
                        </div>
                    </div>
                </div>
                <div className="bottomDiv">
                     <EncountersCards />
                </div> 
            </EldritchBoard>
        </div>
    )
}

export default Cthulhu;