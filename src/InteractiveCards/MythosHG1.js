import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

class MythosHG1 extends Component {
    constructor({ mythosHG1Done }) {
        super(); 
        this.state = {
            counter: 0,
            mythosHG1Done: mythosHG1Done,
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
                            {<figure className="mythosFront" id="MythosHG1"></figure>}modal nested>
                            {<div className="mythosFrontFocus" id="MythosHG1"></div>}
                        </Popup>
                    </div>
                    <div className="mythosTokensDiv">
                        <button className="tokenMythosReckoning" onClick={this.doneButtonOnOff}></button>
                        {this.state.isTokenMythosDoneActive?<button className="tokenMythosDone" onClick={this.state.mythosHG1Done}></button>:null}
                    </div>
                </div>
        )
    }
}
export default MythosHG1;