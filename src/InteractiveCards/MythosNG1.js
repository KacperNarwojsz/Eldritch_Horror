import React, { Component } from 'react';
import "./InteractiveCards.css"

class MythosNG1 extends Component {
    constructor({ mythosNG1Done }) {
        super(); 
        this.state = {
            counter: 0,
            mythosNG1Done: mythosNG1Done,
            isTokenMythosDoneActive: false,
        } 
    }

    doneButtonOnOff = () => {
            this.setState ({isTokenMythosDoneActive: !this.state.isTokenMythosDoneActive})
        }

    counterIncrement = () => {
        if (this.state.counter !== this.state.characters) {
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
                        <button className="mythosFront" id="MythosNG1"></button>
                    </div>
                    <div className="mythosTokensDiv">
                        <button className="tokenMythosReckoning" onClick={this.doneButtonOnOff}></button>
                        {this.state.isTokenMythosDoneActive?<button className="tokenMythosDone" onClick={this.state.mythosNG1Done}></button>:null}
                    </div>
                </div>
        )
    }
}
export default MythosNG1;