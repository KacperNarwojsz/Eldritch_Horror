import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

class MythosEB1 extends Component {
    constructor({ mythosEB1Done, characters }) {
        super(); 
        this.state = {
            characters: characters,
            counter: 4,
            mythosEB1Done: mythosEB1Done,
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
        if (this.state.counter <= this.state.characters) {
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
                        <button className="mythosFront" id="MythosEB1">
                            {/* <div classname='mythosEldritchDiv'>
                                {this.state.reckoning?<button className='mythosTokenMinus' onClick={this.counterDecrement}></button>:null}
                                <div className='mythosAddons'>
                                    <button className='mythosEldritch'></button>
                                    <button className='mythosCounter'>{this.state.counter}</button>
                                </div>
                                {this.state.reckoning?<button className='mythosTokenPlus' onClick={this.counterIncrement}></button>:null}
                            </div> */}
                            <button className="tokenMythosEldritchFaded">{this.state.counter}</button>
                        </button>
                    </div>
                    <div className="mythosTokensDiv">
                        <Popup onOpen={this.chooseMystery} onClose={this.canPop} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                            {<button className="tokenMythosReckoning" onClick={this.reckoningButton}></button>}modal nested>
                            {close => (<div className='outerPopupMythos'>
                                <div className='mythosPopUpMattBlue'>
                                    <div className='mythosPopUpCloseButtonDiv'>
                                        {this.state.counter===0?null:<button className='mythosPopUpCloseButton' onClick={() => close()}>X</button>}
                                    </div>
                                    <div className='mythosPopUpTextDiv'>
                                        <p className='mythosPopUpText'>Główny Badacz otrzymuje Stan <em>SZALEŃSTWO</em>, <br></br>a następnie za każdy posiadany Stan <em>SZALEŃSTWO</em> odrzuca <p className='mythosPopUpTextNumber'>1</p> żeton Plugastwa z tej karty.</p>
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
                                        {this.state.counter===0?<p className='mythosPopUpText'>Jeśli na tej karcie nie ma żadnych żetonów Plugastwa, każdy badacz traci <p className='mythosPopUpTextNumber'>3</p> Poczytalności, a następnie ta <em>POGŁOSKA</em> zostaje rozwiązana.</p>:null}
                                        <div className='mythosPopUpDoneCaseDiv'>
                                            {this.state.counter===0?<button className="tokenMythosPopUpSanity"></button>:null}
                                            {this.state.counter===0?<h1 className='tokenMythosPopUpNumbersFont'>-3</h1>:null}
                                        </div>
                                        {this.state.counter===0?<button className='tokenMythosPopUpDone' onClick={this.state.mythosEB1Done}></button>:null} 
                                    </div>                           
                                </div>
                            </div>)}
                        </Popup>
                        {this.state.isTokenMythosDoneActive?<button className="tokenMythosDone" onClick={this.state.mythosEB1Done}></button>:null}
                        <button className="tokenMythosClueFaded" onClick={this.doneButtonOnOff}>{Math.ceil(this.state.characters/2)}</button>
                    </div>
                </div>
        )
    }
}
export default MythosEB1;