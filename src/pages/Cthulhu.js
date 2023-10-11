import React from "react";
import EncountersCards from "../Components/EncountersCards";
import EldritchBoard from "../Components/EldritchBoard";
import CthulhuBoard from "../Components/CthulhuBoard";
import Popup from "reactjs-popup";
import chooseRandom from '../Components/Shuffler';
import './AllPages.css'


const Cthulhu = ({ loadChulhuLvlChar, level, characters, victory, defeat }) => {
    const mythosDeckGreenEasy = ['EG1','EG2','EG3','EG4','EG5','NG1','NG2','NG3','NG4','NG5','NG6','NG7','NG8']
    const mythosDeckGreenNormal = ['EG1','EG2','EG3','EG4','EG5','NG1','NG2','NG3','NG4','NG5','NG6','NG7','NG8','HG1','HG2','HG3','HG4','HG5']
    const mythosDeckGreenHard = ['NG1','NG2','NG3','NG4','NG5','NG6','NG7','NG8','HG1','HG2','HG3','HG4','HG5']
    const mythosDeckYellowEasy = ['EY1','EY2','EY3','EY4','EY5','NY1','NY2','NY3','NY4','NY5','NY6','NY7','NY8','NY9','NY10','NY11']
    const mythosDeckYellowNormal = ['EY1','EY2','EY3','EY4','EY5','NY1','NY2','NY3','NY4','NY5','NY6','NY7','NY8','NY9','NY10','NY11','HY1','HY2','HY3','HY4','HY5']
    const mythosDeckYellowHard = ['NY1','NY2','NY3','NY4','NY5','NY6','NY7','NY8','NY9','NY10','NY11','HY1','HY2','HY3','HY4','HY5']
    const mythosDeckBlueEasy = ['EB1','EB2','EB4','NB1','NB2','NB3','NB4']
    const mythosDeckBlueNormal = ['EB1','EB2','EB4','NB1','NB2','NB3','NB4','HB1','HB2','HB3','HB4']
    const mythosDeckBlueHard = ['NB1','NB2','NB3','NB4','HB1','HB2','HB3','HB4']
    const mythosDeck = []
    const mythosDeckStage2 = []
    const mythosDeckStage3 = []
    const rumorDeck = []
    if (level === 'Easy') {
        mythosDeck.push(chooseRandom(mythosDeckYellowEasy)); 
        mythosDeck.push(chooseRandom(mythosDeckYellowEasy));
        mythosDeck.push(chooseRandom(mythosDeckBlueEasy)); 
        mythosDeck.push(chooseRandom(mythosDeckBlueEasy));
        mythosDeckStage2.push(chooseRandom(mythosDeckYellowEasy));
        mythosDeckStage2.push(chooseRandom(mythosDeckYellowEasy)); 
        mythosDeckStage2.push(chooseRandom(mythosDeckGreenEasy)); 
        mythosDeckStage2.push(chooseRandom(mythosDeckYellowEasy));
        mythosDeckStage3.push(chooseRandom(mythosDeckGreenEasy)); 
        mythosDeckStage3.push(chooseRandom(mythosDeckGreenEasy));
        mythosDeckStage3.push(chooseRandom(mythosDeckGreenEasy)); 
        mythosDeckStage3.push(chooseRandom(mythosDeckYellowEasy));
        mythosDeckStage3.push(chooseRandom(mythosDeckYellowEasy));
        mythosDeckStage3.push(chooseRandom(mythosDeckYellowEasy));
        mythosDeckStage3.push(chooseRandom(mythosDeckYellowEasy));
        for (let i = 0; i <= mythosDeckBlueEasy.length; i++) {
            rumorDeck.push(mythosDeckBlueEasy[i])
          } 
    } else if (level === 'Normal') {
        mythosDeck.push(chooseRandom(mythosDeckYellowNormal)); 
        mythosDeck.push(chooseRandom(mythosDeckYellowNormal));
        mythosDeck.push(chooseRandom(mythosDeckBlueNormal)); 
        mythosDeck.push(chooseRandom(mythosDeckBlueNormal));
        mythosDeckStage2.push(chooseRandom(mythosDeckGreenNormal)); 
        mythosDeckStage2.push(chooseRandom(mythosDeckYellowNormal));
        mythosDeckStage2.push(chooseRandom(mythosDeckYellowNormal)); 
        mythosDeckStage2.push(chooseRandom(mythosDeckYellowNormal));
        mythosDeckStage3.push(chooseRandom(mythosDeckGreenNormal)); 
        mythosDeckStage3.push(chooseRandom(mythosDeckGreenNormal));
        mythosDeckStage3.push(chooseRandom(mythosDeckGreenNormal)); 
        mythosDeckStage3.push(chooseRandom(mythosDeckYellowNormal));
        mythosDeckStage3.push(chooseRandom(mythosDeckYellowNormal));
        mythosDeckStage3.push(chooseRandom(mythosDeckYellowNormal));
        mythosDeckStage3.push(chooseRandom(mythosDeckYellowNormal));
        for (let i = 0; i <= mythosDeckBlueNormal.length; i++) {
            rumorDeck.push(mythosDeckBlueNormal[i])
          } 
    } else if (level === 'Hard') {
        mythosDeck.push(chooseRandom(mythosDeckYellowHard)); 
        mythosDeck.push(chooseRandom(mythosDeckYellowHard));
        mythosDeck.push(chooseRandom(mythosDeckBlueHard)); 
        mythosDeck.push(chooseRandom(mythosDeckBlueHard));
        mythosDeckStage2.push(chooseRandom(mythosDeckGreenHard)); 
        mythosDeckStage2.push(chooseRandom(mythosDeckYellowHard));
        mythosDeckStage2.push(chooseRandom(mythosDeckYellowHard)); 
        mythosDeckStage2.push(chooseRandom(mythosDeckYellowHard));
        mythosDeckStage3.push(chooseRandom(mythosDeckGreenHard)); 
        mythosDeckStage3.push(chooseRandom(mythosDeckGreenHard));
        mythosDeckStage3.push(chooseRandom(mythosDeckGreenHard)); 
        mythosDeckStage3.push(chooseRandom(mythosDeckYellowHard));
        mythosDeckStage3.push(chooseRandom(mythosDeckYellowHard));
        mythosDeckStage3.push(chooseRandom(mythosDeckYellowHard));
        mythosDeckStage3.push(chooseRandom(mythosDeckYellowHard));
        for (let i = 0; i <= mythosDeckBlueHard.length; i++) {
            rumorDeck.push(mythosDeckBlueHard[i])
          } 
    }

    return (
        <div className="cthulhu">
            <EldritchBoard>
                <div className="topDiv">
                    <div className="boardDiv">
                        <div className="flexDiv">
                            <button className="backBoardButton" onClick={loadChulhuLvlChar}></button>
                            <CthulhuBoard level={level} characters={characters} mythosDeck={mythosDeck} mythosDeckStage2={mythosDeckStage2} mythosDeckStage3={mythosDeckStage3} rumorDeck={rumorDeck} victory={victory} defeat={defeat}/>
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