import React from "react";
import EncountersCards from "../Components/EncountersCards";
import EldritchBoard from "../Components/EldritchBoard";
import CthulhuBoard from "../Components/CthulhuBoard";
import Popup from "reactjs-popup";
import './AllPages.css'


const Cthulhu = ({ loadChulhuLvlChar, level, characters, victory, defeat }) => {
    return (
        <div className="cthulhu">
            <EldritchBoard>
                <div className="topDiv">
                    <div className="boardDiv">
                        <div className="flexDiv">
                            <button className="backBoardButton" onClick={loadChulhuLvlChar}></button>
                            <CthulhuBoard level={level} characters={characters} victory={victory} defeat={defeat}/>
                            <Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                            {<button className="surrenderButton"></button>}modal nested>
                            {close => (<div className='defeatPopup'><h1 className="defeatPopupText">Czy chcesz poddać grę?</h1><div className="defeatChoiceButtons"><button className="defeatChoiceButton" onClick={defeat}>TAK</button><button className="defeatChoiceButton" onClick={() => close()}>NIE</button></div></div>)}
                            </Popup>
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