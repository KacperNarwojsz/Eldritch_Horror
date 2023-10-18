import React, { Component } from "react";
import EncountersCards from "../Components/EncountersCards";
import EldritchBoard from "../Components/EldritchBoard";
import CthulhuBoard from "../Components/CthulhuBoard";
import Popup from "reactjs-popup";
import chooseRandom from '../Components/Shuffler';
import './AllPages.css'

class Cthulhu extends Component {
    constructor({ loadChulhuLvlChar, level, characters, victory, defeat }) {
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
        this.shuffleDeckReverseExpedition = ['Antarctica', 'Antarctica', 'Antarctica', 
                                             'TheAmazon', 'TheAmazon', 'TheAmazon', 
                                             'TheHeartofAfrica', 'TheHeartofAfrica', 'TheHeartofAfrica',
                                             'TheHimalayas', 'TheHimalayas', 'TheHimalayas',
                                             'ThePyramids', 'ThePyramids', 'ThePyramids', 
                                             'Tunguska', 'Tunguska', 'Tunguska']                                
        this.shuffleDeckReverseExpeditionFiltered = ['Antarctica', 'Antarctica', 'Antarctica', 
                                                     'TheAmazon', 'TheAmazon', 'TheAmazon', 
                                                     'TheHeartofAfrica', 'TheHeartofAfrica', 'TheHeartofAfrica',
                                                     'TheHimalayas', 'TheHimalayas', 'TheHimalayas',
                                                     'ThePyramids', 'ThePyramids', 'ThePyramids', 
                                                     'Tunguska', 'Tunguska', 'Tunguska']
        this.discardDeckReverseExpedition = []
        this.shuffleDeckExpeditionAntarctica = [1,2,3]
        this.shuffleDeckExpeditionTheAmazon = [1,2,3]
        this.shuffleDeckExpeditionTheHeartofAfrica = [1,2,3]
        this.shuffleDeckExpeditionTheHimalayas = [1,2,3]
        this.shuffleDeckExpeditionThePyramids = [1,2,3]
        this.shuffleDeckExpeditionTunguska = [1,2,3]
        this.discardDeckExpedition = []  
        this.state = {
            loadChulhuLvlChar: loadChulhuLvlChar,
            level: level,
            characters: characters,
            victory: victory,
            defeat: defeat,
            expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition),
            expeditionPreviousReverse: 0,
            expeditionShuffle: 0,
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

    // componentDidUpdate(prevProps, prevState) {
    //     if  (prevState.expeditionPreviousReverse !== this.state.expeditionPreviousReverse || 
    //          prevState.expeditionShuffle !== this.state.expeditionShuffle) {
    //         this.discardDeckReverseExpedition.push(this.state.expeditionPreviousReverse);
    //         this.discardDeckExpedition.push(this.state.expeditionShuffle);
    //     }
    // } 

    handleExpeditionShuffle = () => {
        switch (this.state.expeditionReverseShuffle) {
            case 'Antarctica':
                this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionAntarctica)});
                    if (this.shuffleDeckExpeditionAntarctica.length < 1) {
                        this.shuffleDeckExpeditionAntarctica = [1,2,3]
                    }
            break;        
            case 'TheAmazon':
                this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheAmazon)});
                    if (this.shuffleDeckExpeditionTheAmazon.length < 1) {
                        this.shuffleDeckExpeditionTheAmazon = [1,2,3]
                    }
            break;             
            case 'TheHeartofAfrica':
                this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheHeartofAfrica)});
                    if (this.shuffleDeckExpeditionTheHeartofAfrica.length < 1) {
                        this.shuffleDeckExpeditionTheHeartofAfrica = [1,2,3]
                    }
            break;     
            case 'TheHimalayas':
                this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheHimalayas)});
                    if (this.shuffleDeckExpeditionTheHimalayas.length < 1) {
                        this.shuffleDeckExpeditionTheHimalayas = [1,2,3]
                    }
            break;     
            case 'ThePyramids':
                this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionThePyramids)});
                    if (this.shuffleDeckExpeditionThePyramids.length < 1) {
                        this.shuffleDeckExpeditionThePyramids = [1,2,3]
                    }
            break;          
            default:
                this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTunguska)});
                    if (this.shuffleDeckExpeditionTunguska.length < 1) {
                        this.shuffleDeckExpeditionTunguska = [1,2,3]
                    }
        }

        this.setState(prevState => ({expeditionPreviousReverse: prevState.expeditionReverseShuffle})); 
        this.setState({expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition)});
            if (this.shuffleDeckReverseExpedition.length < 1) {
                this.shuffleDeckReverseExpedition = this.shuffleDeckReverseExpeditionFiltered.slice();
            }  
    }

    handleExpeditionDiscard = () => {
        this.discardDeckReverseExpedition.push(this.state.expeditionPreviousReverse);
        this.discardDeckExpedition.push(this.state.expeditionShuffle);
    }

    removeExpedition = () => {
        let filterExpeditions = this.shuffleDeckReverseExpedition.filter(currentExpedition => currentExpedition !== this.state.expeditionReverseShuffle)
        this.shuffleDeckReverseExpedition = filterExpeditions
        this.setState({expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition)}) 
        let backupExpeditions = this.shuffleDeckReverseExpeditionFiltered.filter(currentExpedition => currentExpedition !== this.state.expeditionReverseShuffle)
        this.shuffleDeckReverseExpeditionFiltered = backupExpeditions
    }

    render() {
        return (
            <div className="cthulhu">
                <EldritchBoard>
                    <div className="topDiv">
                        <div className="boardDiv">
                            <div className="flexDiv">
                                <button className="backBoardButton" onClick={this.state.loadChulhuLvlChar}></button>
                                {/* <button onClick={this.removeExpedition}>CLICK ME</button> */}
                                <CthulhuBoard level={this.state.level} 
                                              characters={this.state.characters} 
                                              mythosDeck={this.mythosDeck} 
                                              mythosDeckStage2={this.mythosDeckStage2} 
                                              mythosDeckStage3={this.mythosDeckStage3} 
                                              rumorDeck={this.rumorDeck} 
                                              expeditionReverseShuffle={this.state.expeditionReverseShuffle} 
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
                                         expeditionReverseShuffle={this.state.expeditionReverseShuffle} 
                                         expeditionPreviousReverse={this.state.expeditionPreviousReverse} 
                                         expeditionShuffle={this.state.expeditionShuffle} 
                                         discardDeckReverseExpedition={this.discardDeckReverseExpedition}
                                         discardDeckExpedition={this.discardDeckExpedition} 
                                         defeat={this.state.defeat} />
                    </div> 
                </EldritchBoard>
            </div>
        )
    }
}


export default Cthulhu;