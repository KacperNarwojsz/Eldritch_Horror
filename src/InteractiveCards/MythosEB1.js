import React, { Component } from 'react';
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
                            <div classname='mythosEldritchDiv'>
                                {this.state.reckoning?<button className='mythosTokenMinus' onClick={this.counterDecrement}></button>:null}
                                <div className='mythosAddons'>
                                    <button className='mythosEldritch'></button>
                                    <button className='mythosCounter'>{this.state.counter}</button>
                                </div>
                                {this.state.reckoning?<button className='mythosTokenPlus' onClick={this.counterIncrement}></button>:null}
                            </div>
                        </button>
                    </div>
                    <div className="mythosTokensDiv">
                        <button className="tokenMythosReckoning" onClick={this.reckoningButton}></button>
                        {this.state.isTokenMythosDoneActive?<button className="tokenMythosDone" onClick={this.state.mythosEB1Done}></button>:null}
                        <button className="tokenMythosClue" onClick={this.doneButtonOnOff}><div className='tokenMythosClueText'>{Math.ceil(this.state.characters/2)}</div></button>
                    </div>
                </div>
        )
    }
}
export default MythosEB1;