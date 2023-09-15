import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

class MythosHB3 extends Component {
    constructor({ mythosHB3Done, characters }) {
        super(); 
        this.state = {
            characters: characters,
            mythosHB3Done: mythosHB3Done,
            isTokenMythosDoneActive: false,
        } 
    }

    doneButtonOnOff = () => {
        this.setState ({isTokenMythosDoneActive: !this.state.isTokenMythosDoneActive})
    }

    render() {
        return (
                <div className="mythosFrontDiv">
                    <div>
                    <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                        {<figure className="mythosFront" id="MythosHB3">
                        </figure>}modal nested>
                        {<div className="mythosFrontFocus" id="MythosHB3">
                        </div>}
                    </Popup>
                    </div>
                    <div className="mythosTokensDiv">
                        {this.state.isTokenMythosDoneActive?<button className="tokenMythosDone" onClick={this.state.mythosHB3Done}></button>:null}
                        <button className="tokenMythosClueFaded" onClick={this.doneButtonOnOff}>{Math.ceil(this.state.characters/2)}</button>
                    </div>
                </div>
        )
    }
}
export default MythosHB3;