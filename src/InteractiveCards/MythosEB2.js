import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

class MythosEB2 extends Component {
    constructor({ mythosEB2Done }) {
        super(); 
        this.state = {
            counter: 4,
            mythosEB2Done: mythosEB2Done,
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
                        {<figure className="mythosFront" id="MythosEB2">
                            <button className="tokenMythosEldritchFaded">{this.state.counter}</button>
                        </figure>}modal nested>
                        {<div className="mythosFrontFocus" id="MythosEB2">
                            <button className="tokenMythosEldritchFaded" id="tokenMythosEldritchFadedFocusEB2">{this.state.counter}</button>
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
                                        {this.state.counter===0?<p className='mythosPopUpText'>Jeśli na tej karcie nie ma żadnych żetonów Plugastwa, za każdą Bramę na planszy Zagłada postępuje o <span className='mythosPopUpTextNumber'>1</span>, a ta <em>POGŁOSKA</em> zostaje rozwiązana.</p>:null}
                                        <div className='mythosPopUpDoneCaseDiv'>
                                            {this.state.counter===0?<button className="tokenMythosPopUpGate"></button>:null}
                                            {this.state.counter===0?<button className="tokenMythosPopUpArrow"></button>:null}
                                            {this.state.counter===0?<button className="tokenMythosPopUpDoom"></button>:null}
                                            {this.state.counter===0?<h1 className='tokenMythosPopUpNumbersFont'>-1</h1>:null}
                                        </div>
                                        {this.state.counter===0?<button className='tokenMythosPopUpDone' onClick={this.state.mythosEB2Done}></button>:null} 
                                    </div>                           
                                </div>
                            </div>)}
                        </Popup>
                        {this.state.isTokenMythosDoneActive?<button className="tokenMythosDone" onClick={this.state.mythosEB2Done}></button>:null}
                        <button className="tokenMythosGateFaded" onClick={this.doneButtonOnOff}></button>
                    </div>
                </div>
        )
    }
}
export default MythosEB2;