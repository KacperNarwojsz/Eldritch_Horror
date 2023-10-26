import React, { Component } from "react";
import EncountersCards from "../Components/EncountersCards";
import EldritchBoard from "../Components/EldritchBoard";
import CthulhuBoard from "../Components/CthulhuBoard";
import Popup from "reactjs-popup";
import chooseRandom from '../Components/Shuffler';
import './AllPages.css'

class Cthulhu extends Component {
    constructor({ loadCthulhuLvlChar, level, characters, handleExpeditionShuffle, handleExpeditionDiscard, removeExpedition, victory, defeat }) {
        super();
        this.mythosDeckGreenEasy = ['EG1','EG2','EG3','EG4','EG5','NG1','NG2','NG3','NG4','NG5','NG6','NG7','NG8']
        this.mythosDeckGreenNormal = ['EG1','EG2','EG3','EG4','EG5','NG1','NG2','NG3','NG4','NG5','NG6','NG7','NG8','HG1','HG2','HG3','HG4','HG5']
        this.mythosDeckGreenHard = ['NG1','NG2','NG3','NG4','NG5','NG6','NG7','NG8','HG1','HG2','HG3','HG4','HG5']
        this.mythosDeckYellowEasy = ['EY1','EY2','EY3','EY4','EY5','NY1','NY2','NY3','NY4','NY5','NY6','NY7','NY8','NY9','NY10','NY11']
        this.mythosDeckYellowNormal = ['EY1','EY2','EY3','EY4','EY5','NY1','NY2','NY3','NY4','NY5','NY6','NY7','NY8','NY9','NY10','NY11','HY1','HY2','HY3','HY4','HY5']
        this.mythosDeckYellowHard = ['NY1','NY2','NY3','NY4','NY5','NY6','NY7','NY8','NY9','NY10','NY11','HY1','HY2','HY3','HY4','HY5']
        this.mythosDeckBlueEasy = ['EB1','EB2','EB4','NB1','NB2','NB3','NB4']
        this.mythosDeckBlueNormal = ['EB1','EB2','EB4','NB1','NB2','NB3','NB4','HB1','HB2','HB3','HB4']
        this.mythosDeckBlueHard = ['NB1','NB2','NB3','NB4','HB1','HB2','HB3','HB4']
        this.mythosDeck = []
        this.mythosDeckStage2 = []
        this.mythosDeckStage3 = []
        this.rumorDeck = []
        this.handleExpeditionShuffle = handleExpeditionShuffle
        this.handleExpeditionDiscard = handleExpeditionDiscard
        this.removeExpedition = removeExpedition  
        this.state = {
            loadCthulhuLvlChar: loadCthulhuLvlChar,
            level: level,
            characters: characters,
            victory: victory,
            defeat: defeat,
          }                        

        if (level === 'Easy') {
            this.mythosDeck.push(chooseRandom(this.mythosDeckYellowEasy)); 
            this.mythosDeck.push(chooseRandom(this.mythosDeckYellowEasy));
            this.mythosDeck.push(chooseRandom(this.mythosDeckBlueEasy)); 
            this.mythosDeck.push(chooseRandom(this.mythosDeckBlueEasy));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowEasy));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowEasy)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckGreenEasy)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowEasy));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenEasy)); 
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenEasy));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenEasy)); 
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowEasy));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowEasy));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowEasy));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowEasy));
            for (let i = 0; i <= this.mythosDeckBlueEasy.length; i++) {
                this.rumorDeck.push(this.mythosDeckBlueEasy[i])
            } 
        } else if (level === 'Normal') {
            this.mythosDeck.push(chooseRandom(this.mythosDeckYellowNormal)); 
            this.mythosDeck.push(chooseRandom(this.mythosDeckYellowNormal));
            this.mythosDeck.push(chooseRandom(this.mythosDeckBlueNormal)); 
            this.mythosDeck.push(chooseRandom(this.mythosDeckBlueNormal));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckGreenNormal)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowNormal));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowNormal)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowNormal));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenNormal)); 
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenNormal));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenNormal)); 
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowNormal));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowNormal));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowNormal));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowNormal));
            for (let i = 0; i <= this.mythosDeckBlueNormal.length; i++) {
                this.rumorDeck.push(this.mythosDeckBlueNormal[i])
            } 
        } else if (level === 'Hard') {
            this.mythosDeck.push(chooseRandom(this.mythosDeckYellowHard)); 
            this.mythosDeck.push(chooseRandom(this.mythosDeckYellowHard));
            this.mythosDeck.push(chooseRandom(this.mythosDeckBlueHard)); 
            this.mythosDeck.push(chooseRandom(this.mythosDeckBlueHard));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckGreenHard)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowHard));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowHard)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowHard));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenHard)); 
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenHard));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenHard)); 
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowHard));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowHard));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowHard));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowHard));
            for (let i = 0; i <= this.mythosDeckBlueHard.length; i++) {
                this.rumorDeck.push(this.mythosDeckBlueHard[i])
            }     
        }
    }

    render() {
        return (
            <div className="cthulhu">
                <EldritchBoard>
                    <div className="topDiv">
                        <div className="boardDiv">
                            <div className="flexDiv">
                                <button className="backBoardButton" onClick={this.state.loadCthulhuLvlChar}></button>
                                {/* <button onClick={this.removeExpedition}>CLICK ME</button> */}
                                <CthulhuBoard level={this.state.level} 
                                              characters={this.state.characters} 
                                              mythosDeck={this.mythosDeck} 
                                              mythosDeckStage2={this.mythosDeckStage2} 
                                              mythosDeckStage3={this.mythosDeckStage3} 
                                              rumorDeck={this.rumorDeck} 
                                              expeditionReverseShuffle={this.props.expeditionReverseShuffle} 
                                              deletedDeckReverseExpedition={this.props.deletedDeckReverseExpedition}
                                              deletedAntarctica={this.props.deletedAntarctica}
                                              deletedTheAmazon={this.props.deletedTheAmazon}
                                              deletedTheHeartofAfrica={this.props.deletedTheHeartofAfrica}
                                              deletedTheHimalayas={this.props.deletedTheHimalayas}
                                              deletedThePyramids={this.props.deletedThePyramids}
                                              deletedTunguska={this.props.deletedTunguska}
                                              removeExpedition={this.removeExpedition}
                                              victory={this.state.victory} 
                                              defeat={this.state.defeat} />
                                <Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                                {<button className="surrenderButton"></button>}modal nested>
                                {close => (<div className='defeatPopup'><h1 className="defeatPopupText">Czy chcesz poddać grę?</h1><div className="defeatChoiceButtons"><button className="defeatChoiceButton" onClick={this.state.defeat}>TAK</button><button className="defeatChoiceButton" onClick={() => close()}>NIE</button></div></div>)}
                                </Popup>
                            </div>
                        </div>
                    </div>
                    <div className="bottomDiv">
                        <EncountersCards handleExpeditionShuffle={this.handleExpeditionShuffle} 
                                         handleExpeditionDiscard={this.handleExpeditionDiscard}
                                         expeditionReverseShuffle={this.props.expeditionReverseShuffle} 
                                         expeditionPreviousReverse={this.props.expeditionPreviousReverse} 
                                         expeditionShuffle={this.props.expeditionShuffle} 
                                         discardDeckReverseExpedition={this.props.discardDeckReverseExpedition}
                                         discardDeckExpedition={this.props.discardDeckExpedition} 
                                         ancient={this.props.ancient}
                                         defeat={this.state.defeat} />
                    </div> 
                </EldritchBoard>
            </div>
        )
    }
}


export default Cthulhu;