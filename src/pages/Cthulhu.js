import React from "react";
import EncountersCards from "../Components/EncountersCards";
import CthulhuBoard from "../Components/CthulhuBoard";
import EldritchBoard from "../Components/EldritchBoard";
import './AllPages.css'


const Cthulhu = ({ submitAnswerToMain }) => {
    return (
        <div className="Cthulhu">
            <EldritchBoard>
                <div className="TopDiv">
                    <div className="BoardDiv">
                        <div className="FlexDiv">
                            <CthulhuBoard />
                        </div>
                    </div>
                    
                </div>
                <div className="BottomDiv">
                        <EncountersCards />
                </div> 
            </EldritchBoard>
        </div>
    )
}

export default Cthulhu;