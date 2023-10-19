import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

class MythosHB4 extends Component {
    constructor({ mythosHB4Done, characters, defeat }) {
        super(); 
        this.state = {
            counter: 8,
            mythosHB4Done: mythosHB4Done,
            characters: characters,
            defeat: defeat,
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
        if (this.state.counter < 8) {
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
                        {<figure className="mythosFront" id="MythosHB4">
                            <button className="tokenMythosEldritchFaded">{this.state.counter}</button>
                        </figure>}modal nested>
                        {<div className="mythosFrontFocus" id="MythosHB4">
                            <button className="tokenMythosEldritchFaded" id="tokenMythosEldritchFadedFocusHB4">{this.state.counter}</button>
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
                                    <div className='mythosPopUpTextDiv'>
                                        <p className='mythosPopUpText'>Odrzuć z tej karty żetony Plugastwa <br></br>w liczbie równej połowie Bram na planszy.</p>
                                    </div>
                                    <div className='mythosPopUpCounterDiv'>
                                        <button className='tokenMythosPopUpCounter'>{this.state.counter}/8</button>
                                        <div className='tokenMythosPopUpCounterDiv'>
                                            <button className="tokenMythosPopUpMinus" onClick={this.counterDecrement}></button>
                                            <button className="tokenMythosPopUpEldritch"></button>
                                            <button className="tokenMythosPopUpPlus" onClick={this.counterIncrement}></button>
                                        </div>
                                    </div>
                                    <div className='mythosPopUpDoneDiv'>
                                        {this.state.counter===0?<p className='mythosPopUpText'>Jeśli na tej karcie nie ma żadnych żetonów Plugastwa, <strong>badacze przegrywają</strong>.</p>:null}
                                        {this.state.counter===0?<button className='tokenMythosPopUpDefeat' onClick={this.state.defeat}>PRZEGRANA</button>:null} 
                                    </div>                           
                                </div>
                            </div>)}
                        </Popup>
                        {this.state.isTokenMythosDoneActive?<button className="tokenMythosDone" onClick={this.state.mythosHB4Done}></button>:null}
                        <button className="tokenMythosClueFaded" onClick={this.doneButtonOnOff}>{Math.ceil(this.state.characters/2)}</button>
                    </div>
                </div>
        )
    }
}
export default MythosHB4;