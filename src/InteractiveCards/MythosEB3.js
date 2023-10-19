import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

class MythosEB3 extends Component {
    constructor({ mythosEB3Done, characters, removeExpedition, defeat }) {
        super(); 
        this.removeExpedition = removeExpedition
        this.state = {
            mythosEB3Done: mythosEB3Done,
            characters: characters,
            defeat: defeat,
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
                        {<figure className="mythosFront" id="MythosEB3"></figure>}modal nested>
                        {<div className="mythosFrontFocus" id="MythosEB3"></div>}
                    </Popup>
                    </div>
                    <div className="mythosTokensDiv">
                        <Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                            {<button className="tokenMythosReckoning" onClick={this.reckoningButton}></button>}modal nested>
                            {close => (<div className='outerPopupMythos'>
                                <div className='mythosPopUpMattBlue'>
                                    <div className='mythosPopUpCloseButtonDiv'>
                                        {this.props.deletedDeckReverseExpedition.length>5?null:<button className='mythosPopUpCloseButton' onClick={() => close()}>X</button>}
                                    </div>
                                    <div className='mythosPopUpTextDiv'>
                                        <p className='mythosPopUpText'>Wyszukaj z talii Spotkań Ekspedycyjnych<br></br> wszystkie karty pasujące do Aktywnej Ekspedycji<br></br> i odłóż je do pudełka.</p>
                                    </div>
                                    <button className='tokenMythosPopUpExpeditionButton' onClick={this.removeExpedition}>Usuń aktywną ekspedycję</button>
                                    <div className='mythosPopUpExpeditions'>
                                    <figure className='tokenMythosPopUpExpeditionSmall' id={`tokenMythosPopUpExpeditionAntarctica${this.props.deletedAntarctica?'CrossedOut':'Small'}`}></figure>
                                    <figure className='tokenMythosPopUpExpeditionSmall' id={`tokenMythosPopUpExpeditionTheAmazon${this.props.deletedTheAmazon?'CrossedOut':'Small'}`}></figure>
                                    <figure className='tokenMythosPopUpExpeditionSmall' id={`tokenMythosPopUpExpeditionTheHeartofAfrica${this.props.deletedTheHeartofAfrica?'CrossedOut':'Small'}`}></figure>
                                    <figure className='tokenMythosPopUpExpeditionSmall' id={`tokenMythosPopUpExpeditionTheHimalayas${this.props.deletedTheHimalayas?'CrossedOut':'Small'}`}></figure>
                                    <figure className='tokenMythosPopUpExpeditionSmall' id={`tokenMythosPopUpExpeditionThePyramids${this.props.deletedThePyramids?'CrossedOut':'Small'}`}></figure>
                                    <figure className='tokenMythosPopUpExpeditionSmall' id={`tokenMythosPopUpExpeditionTunguska${this.props.deletedTunguska?'CrossedOut':'Small'}`}></figure>
                                    </div>
                                    <div className='mythosPopUpDoneDiv'>
                                        {this.props.deletedDeckReverseExpedition.length>5?<p className='mythosPopUpText'>Jeśli talia Spotkań Ekspedycyjnych jest pusta,<br></br> <strong>badacze przegrywają</strong>.</p>:null}
                                        {this.props.deletedDeckReverseExpedition.length>5?<button className='tokenMythosPopUpDefeat' onClick={this.state.defeat}>PRZEGRANA</button>:null} 
                                    </div>                           
                                </div>
                            </div>)}
                        </Popup>
                        {this.state.isTokenMythosDoneActive?<button className="tokenMythosDone" onClick={this.state.mythosEB3Done}></button>:null}
                        <button className="tokenMythosClueFaded" onClick={this.doneButtonOnOff}>{Math.ceil(this.state.characters/2)}</button>
                    </div>
                </div>
        )
    }
}
export default MythosEB3;