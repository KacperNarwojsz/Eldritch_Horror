import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

class MythosHB1 extends Component {
    constructor({ mythosHB1Done, characters }) {
        super(); 
        this.state = {
            characters: characters,
            counter: 0,
            mythosHB1Done: mythosHB1Done,
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
            this.setState ({counter: this.state.counter +1})
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
                        {<figure className="mythosFront" id="MythosHB1">
                            <button className="tokenMythosHealthFaded" id="tokenMythosHealthFadedHB1">{this.state.counter}</button>
                        </figure>}modal nested>
                        {<div className="mythosFrontFocus" id="MythosHB1">
                            <button className="tokenMythosHealthFaded" id="tokenMythosHealthFadedFocusHB1">{this.state.counter}</button>
                        </div>}
                    </Popup>
                    </div>
                    <div className="mythosTokensDiv">
                        <Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                            {<button className="tokenMythosReckoning" onClick={this.reckoningButton}></button>}modal nested>
                            {close => (<div className='outerPopupMythos'>
                                <div className='mythosPopUpMattBlue'>
                                    <div className='mythosPopUpCloseButtonDiv'>
                                        <button className='mythosPopUpCloseButton' onClick={() => close()}>X</button>
                                    </div>
                                    <div className='mythosPopUpTextDiv' id='mythosPopUpTextDivOneliner'>
                                        <p className='mythosPopUpText'>Umieść na tej karcie żeton Zdrowia.</p>
                                    </div>
                                    <div className='mythosPopUpCounterDiv'>
                                        <button className='tokenMythosPopUpCounter'>{this.state.counter}</button>
                                        <div className='tokenMythosPopUpCounterDiv'>
                                            <button className="tokenMythosPopUpMinus" onClick={this.counterDecrement}></button>
                                            <button className="tokenMythosPopUpHealth" id='tokenMythosPopUpHealthHB1'></button>
                                            <button className="tokenMythosPopUpPlus" onClick={this.counterIncrement}></button>
                                        </div>
                                    </div> 
                                    <div className='mythosPopUpTextDiv' id='mythosPopUpTextDivHB1'>
                                        <p className='mythosPopUpText'>Następnie każdy badacz traci <span className='mythosPopUpTextNumber'>1</span> Zdrowia <br></br>za każdy żeton Zdrowia na tej karcie.</p>
                                    </div>
                                    <div className='mythosPopUpCounterCaseDiv'>
                                        <button className="tokenMythosPopUpHealth"></button>
                                        <h1 className='tokenMythosPopUpNumbersFont'>- {this.state.counter}</h1>
                                    </div>                       
                                </div>
                            </div>)}
                        </Popup>
                        {this.state.isTokenMythosDoneActive?<button className="tokenMythosDone" onClick={this.state.mythosEB1Done}></button>:null}
                        <button className="tokenMythosClueFaded" onClick={this.doneButtonOnOff}>{Math.ceil(this.state.characters)-this.state.counter}</button>
                    </div>
                </div>
        )
    }
}
export default MythosHB1;