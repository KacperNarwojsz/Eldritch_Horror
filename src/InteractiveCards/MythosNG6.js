import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

class MythosNG6 extends Component {
    constructor({ mythosNG6Done }) {
        super(); 
        this.state = {
            counter: 0,
            mythosNG6Done: mythosNG6Done,
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
                            {<figure className="mythosFront" id="MythosNG6"></figure>}modal nested>
                            {<div className="mythosFrontFocus" id="MythosNG6"></div>}
                        </Popup>
                    </div>
                    <div className="mythosTokensDiv">
                        {this.state.isTokenMythosDoneActive?<button className="tokenMythosDone" onClick={this.state.mythosNG6Done}></button>:null}
                        <button className="tokenMythosReckoning" onClick={this.doneButtonOnOff}></button>
                    </div>
                </div>
        )
    }
}
export default MythosNG6;