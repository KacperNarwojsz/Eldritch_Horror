import React from "react";
import EncountersCards from "../Components/EncountersCards";
import EldritchBoard from "../Components/EldritchBoard";
import CthulhuBoard from "../Components/CthulhuBoard";
import './AllPages.css'


const Cthulhu = ({ level, characters }) => {
    return (
        <div className="cthulhu">
            <EldritchBoard>
                <div className="topDiv">
                    <div className="boardDiv">
                        <div className="flexDiv">
                            <CthulhuBoard level={level} characters={characters}/>
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