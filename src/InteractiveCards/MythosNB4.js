import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

class MythosNB4 extends Component {
    constructor({ mythosNB4Done, characters }) {
        super(); 
        this.state = {
            characters: characters,
            counter: 4,
            mythosNB4Done: mythosNB4Done,
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
                        {<figure className="mythosFront" id="MythosNB4">
                            <button className="tokenMythosEldritchFaded">{this.state.counter}</button>
                        </figure>}modal nested>
                        {<div className="mythosFrontFocus" id="MythosNB4">
                            <button className="tokenMythosEldritchFaded" id="tokenMythosEldritchFadedFocusNB4">{this.state.counter}</button>
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
                                    <div className='mythosPopUpTextDiv' id='mythosPopUpTextDivNB4'>
                                        <p className='mythosPopUpText'>Wyszukaj w talii Zasobów, stosie kart odrzuconych <br></br>i rezerwach wszystkie Zasoby o wartości równej lub wyższej od liczby żetonów Plugastwa na tej karcie <br></br>i odłóż je do pudełka. Następnie odrzuć z tej karty <br></br><span className='mythosPopUpTextNumber'>1</span> żeton Plugastwa.</p>
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
                                        {this.state.counter===0?<p className='mythosPopUpText'>Jeśli na tej karcie nie ma żadnego żetonu Plugastwa, <br></br>ta <em>POGŁOSKA</em> zostaje rozwiązana.</p>:null}
                                        {this.state.counter===0?<button className='tokenMythosPopUpDone' onClick={this.state.mythosNB4Done}></button>:null} 
                                    </div>                           
                                </div>
                            </div>)}
                        </Popup>
                        {this.state.isTokenMythosDoneActive?<button className="tokenMythosDone" onClick={this.state.mythosNB4Done}></button>:null}
                        <button className="tokenMythosClueFaded" onClick={this.doneButtonOnOff}>{Math.ceil(this.state.characters/2)}</button>
                    </div>
                </div>
        )
    }
}
export default MythosNB4;