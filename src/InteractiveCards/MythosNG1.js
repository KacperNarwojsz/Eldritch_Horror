import React, { Component } from 'react';
import Popup from 'reactjs-popup';
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
                        <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                            {<figure className="mythosFront" id="MythosNG1"></figure>}modal nested>
                            {<div className="mythosFrontFocus" id="MythosNG1"></div>}
                        </Popup>
                    </div>
                    <div className="mythosTokensDiv">
                        {this.state.isTokenMythosDoneActive?<button className="tokenMythosDone" onClick={this.state.mythosNG1Done}></button>:null}
                        <button className="tokenMythosReckoning" onClick={this.doneButtonOnOff}></button>
                    </div>
                </div>
        )
    }
}
export default MythosNG1;