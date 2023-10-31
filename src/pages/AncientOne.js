import React, { Component } from "react";
import EncountersCards from "../Components/EncountersCards";
import EldritchBoard from "../Components/EldritchBoard";
import AncientBoard from "../Components/AncientBoard";
import Popup from "reactjs-popup";
import chooseRandom from '../Components/Shuffler';
import './AllPages.css'

class AncientOne extends Component {
    constructor({ ancient, chooseAzathoth, chooseYogSothoth, chooseShubNiggurath, chooseCthulhu, level, characters, victory, defeat }) {
        super();
        this.shuffleDeckReverseExpedition = ['Antarctica', 'Antarctica', 'Antarctica', 'TheAmazon', 'TheAmazon', 'TheAmazon', 
                                             'TheHeartofAfrica', 'TheHeartofAfrica', 'TheHeartofAfrica', 'TheHimalayas', 'TheHimalayas', 'TheHimalayas',
                                             'ThePyramids', 'ThePyramids', 'ThePyramids', 'Tunguska', 'Tunguska', 'Tunguska']                                
        this.shuffleDeckReverseExpeditionFiltered = ['Antarctica', 'Antarctica', 'Antarctica', 'TheAmazon', 'TheAmazon', 'TheAmazon', 
                                                     'TheHeartofAfrica', 'TheHeartofAfrica', 'TheHeartofAfrica', 'TheHimalayas', 'TheHimalayas', 'TheHimalayas',
                                                     'ThePyramids', 'ThePyramids', 'ThePyramids', 'Tunguska', 'Tunguska', 'Tunguska']
        this.discardDeckReverseExpedition = []
        this.deletedDeckReverseExpedition = []
        this.shuffleDeckExpeditionAntarctica = [1,2,3]
        this.shuffleDeckExpeditionTheAmazon = [1,2,3]
        this.shuffleDeckExpeditionTheHeartofAfrica = [1,2,3]
        this.shuffleDeckExpeditionTheHimalayas = [1,2,3]
        this.shuffleDeckExpeditionThePyramids = [1,2,3]
        this.shuffleDeckExpeditionTunguska = [1,2,3]
        this.discardDeckExpedition = [] 
        this.mythosDeckGreenEasy = ['EG1','EG2','EG3','EG4','EG5','NG1','NG2','NG3','NG4','NG5','NG6','NG7','NG8']
        this.mythosDeckGreenNormal = ['EG1','EG2','EG3','EG4','EG5','NG1','NG2','NG3','NG4','NG5','NG6','NG7','NG8','HG1','HG2','HG3','HG4','HG5']
        this.mythosDeckGreenHard = ['NG1','NG2','NG3','NG4','NG5','NG6','NG7','NG8','HG1','HG2','HG3','HG4','HG5']
        this.mythosDeckYellowEasy = ['EY1','EY2','EY3','EY4','EY5','NY1','NY2','NY3','NY4','NY5','NY6','NY7','NY8','NY9','NY10','NY11']
        this.mythosDeckYellowNormal = ['EY1','EY2','EY3','EY4','EY5','NY1','NY2','NY3','NY4','NY5','NY6','NY7','NY8','NY9','NY10','NY11','HY1','HY2','HY3','HY4','HY5']
        this.mythosDeckYellowHard = ['NY1','NY2','NY3','NY4','NY5','NY6','NY7','NY8','NY9','NY10','NY11','HY1','HY2','HY3','HY4','HY5']
        this.mythosDeckBlueEasy = ['EB1','EB2','EB3','EB4','NB1','NB2','NB3','NB4']
        this.mythosDeckBlueNormal = ['EB1','EB2','EB3','EB4','NB1','NB2','NB3','NB4','HB1','HB2','HB3','HB4']
        this.mythosDeckBlueHard = ['NB1','NB2','NB3','NB4','HB1','HB2','HB3','HB4']
        this.mythosDeckGreen = []
        this.mythosDeckYellow = []
        this.mythosDeckBlue = []
        this.mythosDeck = []
        this.mythosDeckStage2 = []
        this.mythosDeckStage3 = []
        this.rumorDeck = []
        this.state = {
            ancient: ancient,
            chooseAzathoth: chooseAzathoth,
            chooseYogSothoth: chooseYogSothoth,
            chooseShubNiggurath: chooseShubNiggurath,
            chooseCthulhu: chooseCthulhu,
            level: level,
            characters: characters,
            victory: victory,
            defeat: defeat,
            expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition),
            expeditionPreviousReverse: 0,
            expeditionShuffle: 0,
            deletedAntarctica: false,
            deletedTheAmazon: false,
            deletedTheHeartofAfrica: false,
            deletedTheHimalayas: false,
            deletedThePyramids: false,
            deletedTunguska: false,
          }                        
        if (level === 'Easy') {
            this.mythosDeckGreen= this.mythosDeckGreenEasy
            this.mythosDeckYellow = this.mythosDeckYellowEasy
            this.mythosDeckBlue = this.mythosDeckBlueEasy
        } else if (level === 'Normal') {
            this.mythosDeckGreen= this.mythosDeckGreenNormal
            this.mythosDeckYellow = this.mythosDeckYellowNormal
            this.mythosDeckBlue = this.mythosDeckBlueNormal
        } else if (level === 'Hard') {
            this.mythosDeckGreen= this.mythosDeckGreenHard
            this.mythosDeckYellow = this.mythosDeckYellowHard
            this.mythosDeckBlue = this.mythosDeckBlueHard
        }

        if (ancient === 'Azathoth') {
            this.mythosDeck.push(chooseRandom(this.mythosDeckGreen)); 
            this.mythosDeck.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeck.push(chooseRandom(this.mythosDeckYellow)); 
            this.mythosDeck.push(chooseRandom(this.mythosDeckBlue));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckGreen));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckGreen));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckBlue));  
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreen));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreen)); 
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            for (let i = 0; i <= this.mythosDeckBlue.length; i++) {
                this.rumorDeck.push(this.mythosDeckBlue[i])
            }    
        } else if (ancient === 'YogSothoth') {
            this.mythosDeck.push(chooseRandom(this.mythosDeckYellow)); 
            this.mythosDeck.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeck.push(chooseRandom(this.mythosDeckBlue)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckGreen)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckGreen)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckBlue));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreen)); 
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreen));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreen)); 
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            for (let i = 0; i <= this.mythosDeckBlue.length; i++) {
                this.rumorDeck.push(this.mythosDeckBlue[i])
            } 
        } else if (ancient === 'ShubNiggurath') {
            this.mythosDeck.push(chooseRandom(this.mythosDeckGreen));
            this.mythosDeck.push(chooseRandom(this.mythosDeckYellow)); 
            this.mythosDeck.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeck.push(chooseRandom(this.mythosDeckBlue)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckGreen)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckGreen)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckGreen)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellow)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckBlue)); 
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreen)); 
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreen));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            for (let i = 0; i <= this.mythosDeckBlue.length; i++) {
                this.rumorDeck.push(this.mythosDeckBlue[i])
            } 
        } else if (ancient === 'Cthulhu') {
            this.mythosDeck.push(chooseRandom(this.mythosDeckYellow)); 
            this.mythosDeck.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeck.push(chooseRandom(this.mythosDeckBlue)); 
            this.mythosDeck.push(chooseRandom(this.mythosDeckBlue));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellow)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckGreen)); 
            this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreen)); 
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreen));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreen)); 
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellow));
            for (let i = 0; i <= this.mythosDeckBlue.length; i++) {
                this.rumorDeck.push(this.mythosDeckBlue[i])
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

    componentDidUpdate() {
        if (this.shuffleDeckReverseExpedition.length < 1) {
            this.shuffleDeckReverseExpedition = this.shuffleDeckReverseExpeditionFiltered.slice();
        }  
    }

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
    }
  
    handleExpeditionDiscard = () => {
        this.discardDeckReverseExpedition.push(this.state.expeditionPreviousReverse);
        this.discardDeckExpedition.push(this.state.expeditionShuffle);
    }
  
    removeExpedition = () => {
        if      (this.state.expeditionReverseShuffle === 'Antarctica')       {this.setState({deletedAntarctica: true})} 
        else if (this.state.expeditionReverseShuffle === 'TheAmazon')        {this.setState({deletedTheAmazon: true})} 
        else if (this.state.expeditionReverseShuffle === 'TheHeartofAfrica') {this.setState({deletedTheHeartofAfrica: true})}
        else if (this.state.expeditionReverseShuffle === 'TheHimalayas')     {this.setState({deletedTheHimalayas: true})} 
        else if (this.state.expeditionReverseShuffle === 'ThePyramids')      {this.setState({deletedThePyramids: true})} 
        else if (this.state.expeditionReverseShuffle === 'Tunguska')         {this.setState({deletedTunguska: true})}
        this.deletedDeckReverseExpedition.push(this.state.expeditionReverseShuffle);
        let filterExpeditions = this.shuffleDeckReverseExpedition.filter(currentExpedition => currentExpedition !== this.state.expeditionReverseShuffle)
        this.shuffleDeckReverseExpedition = filterExpeditions
        let backupExpeditions = this.shuffleDeckReverseExpeditionFiltered.filter(currentExpedition => currentExpedition !== this.state.expeditionReverseShuffle)
        this.shuffleDeckReverseExpeditionFiltered = backupExpeditions
        if (this.shuffleDeckReverseExpedition.length === 0 && this.shuffleDeckReverseExpeditionFiltered.length !== 0){
            this.setState({expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpeditionFiltered)}) 
        } else {
            this.setState({expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition)})
        }
    }
  
    // undoRemoveExpedition = () => {
    //     if      (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'Antarctica')       {this.setState({deletedAntarctica: false})} 
    //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'TheAmazon')        {this.setState({deletedTheAmazon: false})} 
    //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'TheHeartofAfrica') {this.setState({deletedTheHeartofAfrica: false})}
    //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'TheHimalayas')     {this.setState({deletedTheHimalayas: false})} 
    //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'ThePyramids')      {this.setState({deletedThePyramids: false})} 
    //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'Tunguska')         {this.setState({deletedTunguska: false})}
    //     this.shuffleDeckReverseExpedition.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
    //     this.shuffleDeckReverseExpedition.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
    //     this.shuffleDeckReverseExpedition.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
    //     this.shuffleDeckReverseExpeditionFiltered.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
    //     this.shuffleDeckReverseExpeditionFiltered.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
    //     this.shuffleDeckReverseExpeditionFiltered.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
    //     this.deletedDeckReverseExpedition.pop()
    // }

    render() {
        return (
            <div className="ancient" id={`${this.props.ancient}`}>
                <EldritchBoard>
                    <div className="topDiv">
                        <div className="boardDiv">
                            <div className="flexDiv">
                                <button className="backBoardButton" 
                                        onClick={this.props.ancient === 'Azathoth'?this.state.chooseAzathoth
                                                :this.props.ancient === 'YogSothoth'?this.state.chooseYogSothoth
                                                :this.props.ancient === 'ShubNiggurath'?this.state.chooseShubNiggurath
                                                :this.state.chooseCthulhu}></button>
                                {/* <button onClick={this.removeExpedition}>CLICK ME</button> */}
                                <AncientBoard level={this.state.level} 
                                              characters={this.state.characters} 
                                              ancient={this.props.ancient}
                                              mythosDeck={this.mythosDeck} 
                                              mythosDeckStage2={this.mythosDeckStage2} 
                                              mythosDeckStage3={this.mythosDeckStage3} 
                                              rumorDeck={this.rumorDeck} 
                                              expeditionReverseShuffle={this.state.expeditionReverseShuffle} 
                                              deletedDeckReverseExpedition={this.deletedDeckReverseExpedition}
                                              deletedAntarctica={this.state.deletedAntarctica}
                                              deletedTheAmazon={this.state.deletedTheAmazon}
                                              deletedTheHeartofAfrica={this.state.deletedTheHeartofAfrica}
                                              deletedTheHimalayas={this.state.deletedTheHimalayas}
                                              deletedThePyramids={this.state.deletedThePyramids}
                                              deletedTunguska={this.state.deletedTunguska}
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
                                         ancient={this.props.ancient}
                                         defeat={this.state.defeat} />
                    </div> 
                </EldritchBoard>
            </div>
        )
    }
}


export default AncientOne;