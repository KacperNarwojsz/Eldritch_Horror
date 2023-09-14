import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

class MythosNB1 extends Component {
    constructor({ mythosNB1Done, characters }) {
        super(); 
        this.state = {
            characters: characters,
            mythosNB1Done: mythosNB1Done,
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

    render() {
        return (
                <div className="mythosFrontDiv">
                    <div>
                    <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                        {<figure className="mythosFront" id="MythosNB1"></figure>}modal nested>
                        {<div className="mythosFrontFocus" id="MythosNB1"></div>}
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
                                    <div className='mythosPopUpTextDiv' id='mythosPopUpTextDivNB1'>
                                        <p className='mythosPopUpText'>Zagłada postępuje o <span className='mythosPopUpTextNumber'>1</span>.</p>
                                    </div>
                                    <div className='mythosPopUpTextCaseDiv'>
                                        <button className="tokenMythosPopUpDoom"></button>
                                        <h1 className='tokenMythosPopUpNumbersFont'>-1</h1>
                                    </div>                           
                                </div>
                            </div>)}
                        </Popup>
                        {this.state.isTokenMythosDoneActive?<button className="tokenMythosDone" onClick={this.state.mythosNB1Done}></button>:null}
                        <button className="tokenMythosClueFaded" onClick={this.doneButtonOnOff}>{Math.ceil(this.state.characters/2)}</button>
                    </div>
                </div>
        )
    }
}
export default MythosNB1;