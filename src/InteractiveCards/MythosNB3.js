import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

class MythosNB3 extends Component {
    constructor({ mythosNB3Done }) {
        super(); 
        this.state = {
            counter: 4,
            mythosNB3Done: mythosNB3Done,
            isTokenMythosDoneActive: false,
            reckoning: false,
        } 
    }

    doneButtonOnOff = () => {
        this.setState ({isTokenMythosDoneActive: !this.state.isTokenMythosDoneActive})
    }

    reckoningButton = () => {
        this.setState ({reckoning: !this.state.reckoning})
    }

    counterIncrement = () => {
        if (this.state.counter < 4) {
            this.setState ({counter: this.state.counter +1})
        }
    }

    counterDecrement = () => {
        if (this.state.counter !== 0) {
            this.setState ({counter: this.state.counter -1})
        }
    }

    render() {
        return (
                <div className="mythosFrontDiv">
                    <div>
                    <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                        {<figure className="mythosFront" id="MythosNB3">
                            <button className="tokenMythosEldritchFaded" id="tokenMythosEldritchFadedNB3">{this.state.counter}</button>
                        </figure>}modal nested>
                        {<div className="mythosFrontFocus" id="MythosNB3">
                            <button className="tokenMythosEldritchFaded" id="tokenMythosEldritchFadedFocusNB3">{this.state.counter}</button>
                        </div>}
                    </Popup>
                    </div>
                    <div className="mythosTokensDiv">
                        <Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                            {<button className="tokenMythosReckoning" onClick={this.reckoningButton}></button>}modal nested>
                            {close => (<div className='outerPopupMythos'>
                                <div className='mythosPopUpMattBlue'>
                                    <div className='mythosPopUpCloseButtonDiv'>
                                        {this.state.counter===0?null:<button className='mythosPopUpCloseButton' onClick={() => close()}>X</button>}
                                    </div>
                                    <div className='mythosPopUpTextDiv' id='mythosPopUpTextDivOneliner'>
                                        <p className='mythosPopUpText'>Odrzuć z tej karty <span className='mythosPopUpTextNumber'>1</span> żeton Plugastwa.</p>
                                    </div>
                                    <div className='mythosPopUpCounterDiv'>
                                        <button className='tokenMythosPopUpCounter'>{this.state.counter}/4</button>
                                        <div className='tokenMythosPopUpCounterDiv'>
                                            <button className="tokenMythosPopUpMinus" onClick={this.counterDecrement}></button>
                                            <button className="tokenMythosPopUpEldritch"></button>
                                            <button className="tokenMythosPopUpPlus" onClick={this.counterIncrement}></button>
                                        </div>
                                    </div>
                                    <div className='mythosPopUpDoneDiv'>
                                        {this.state.counter===0?<p className='mythosPopUpText'>Jeśli na tej karcie nie ma żadnych żetonów Plugastwa, każdy badacz zostaje Wstrzymany i traci <span className='mythosPopUpTextNumber'>6</span> Zdrowia, a następnie ta <em>POGŁOSKA</em> zostaje rozwiązana.</p>:null}
                                        <div className='mythosPopUpDoneCaseDiv'>
                                        {/* {this.state.counter===0?<button className="tokenMythosPopUpDelayedInvestigator"></button>:null} */}
                                            {this.state.counter===0?<button className="tokenMythosPopUpHealth"></button>:null}
                                            {this.state.counter===0?<h1 className='tokenMythosPopUpNumbersFont'>- 6</h1>:null}
                                        </div>
                                        {this.state.counter===0?<button className='tokenMythosPopUpDone' onClick={this.state.mythosNB3Done}></button>:null} 
                                    </div>                           
                                </div>
                            </div>)}
                        </Popup>
                        {this.state.isTokenMythosDoneActive?<button className="tokenMythosDone" onClick={this.state.mythosNB3Done}></button>:null}
                        <button className="tokenMythosMonsterSlayed" id='tokenMythosWindWalkerSlayed' onClick={this.doneButtonOnOff}></button>
                    </div>
                </div>
        )
    }
}
export default MythosNB3;