import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

class MythosNB2 extends Component {
    constructor({ mythosNB2Done, characters }) {
        super(); 
        this.state = {
            characters: characters,
            monsterToughnessCounter: 0,
            monsterCounter: 0,
            mythosNB2Done: mythosNB2Done,
            isTokenMythosDoneActive: false,
            reckoning: false,
        } 
    }

    reckoningButton = () => {
        this.setState ({reckoning: !this.state.reckoning})
    }

    monsterCounterIncrement = () => {
        if (this.state.monsterCounter < 4) {
            this.setState ({monsterCounter: this.state.monsterCounter +1})
        }
    }

    monsterCounterDecrement = () => {
        if (this.state.monsterCounter !== 0) {
            this.setState ({monsterCounter: this.state.monsterCounter -1})
        }
    }

    monsterToughnessCounterIncrement = () => {
            this.setState ({monsterToughnessCounter: this.state.monsterToughnessCounter +1})
    }

    monsterToughnessCounterDecrement = () => {
        if (this.state.monsterToughnessCounter !== 0) {
            this.setState ({monsterToughnessCounter: this.state.monsterToughnessCounter -1})
        }
    }

    render() {
        return (
                <div className="mythosFrontDiv">
                    <div>
                    <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                        {<figure className="mythosFront" id="MythosNB2">
                            <button className="tokenMythosMonsterToughnessFaded">{this.state.monsterToughnessCounter}</button>
                        </figure>}modal nested>
                        {<div className="mythosFrontFocus" id="MythosNB2">
                            <button className="tokenMythosMonsterToughnessFaded" id="tokenMythosMonsterToughnessFadedFocusNB2">{this.state.monsterToughnessCounter}</button>
                        </div>}
                    </Popup>
                    </div>
                    <div className="mythosTokensDiv">
                        <Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                            {<button className="tokenMythosReckoning" onClick={this.reckoningButton}></button>}modal nested>
                            {close => (<div className='outerPopupMythos'>
                                <div className='mythosPopUpMattBlue'>
                                    <div className='mythosPopUpCloseButtonDiv'>
                                        {this.state.monsterCounter===4?null:<button className='mythosPopUpCloseButton' onClick={() => close()}>X</button>}
                                    </div>
                                    <div className='mythosPopUpTextDiv'>
                                        <p className='mythosPopUpText'>Rozmnóż <span className='mythosPopUpTextNumber'>1</span> Potwora na polu "<span className='mythosPopUpTextNumber'>19</span>". <br></br> <br></br>Liczba Potworów na polu "<span className='mythosPopUpTextNumber'>19</span>":</p>
                                    </div>
                                    <div className='mythosPopUpCounterDiv'>
                                        <button className='tokenMythosPopUpCounter'>{this.state.monsterCounter}/4</button>
                                        <div className='tokenMythosPopUpCounterDiv'>
                                            <button className="tokenMythosPopUpMinus" onClick={this.monsterCounterDecrement}></button>
                                            <button className="tokenMythosPopUpMonsterSurge"></button>
                                            <button className="tokenMythosPopUpPlus" onClick={this.monsterCounterIncrement}></button>
                                        </div>
                                    </div>
                                    <div className='mythosPopUpDoneDiv'>
                                        {this.state.monsterCounter===4?<p className='mythosPopUpText'>Jeśli na polu "<span className='mythosPopUpTextNumber'>19</span>" znajdują się <span className='mythosPopUpTextNumber'>4</span> lub więcej Potworów, żeton na torze Zagłady przesuwa się na pole <span className='mythosPopUpTextNumber'>0</span>, <br></br>a następnie ta <em>POGŁOSKA</em> zostaje rozwiązana.</p>:null}
                                        <div className='mythosPopUpDoneCaseDiv'>
                                            {this.state.monsterCounter===4?<button className="tokenMythosPopUpDoom"></button>:null}
                                            {this.state.monsterCounter===4?<h1 className='tokenMythosPopUpNumbersFont'> = 0</h1>:null}
                                        </div>
                                        {this.state.monsterCounter===4?<button className='tokenMythosPopUpDone' onClick={this.state.mythosNB2Done}></button>:null} 
                                    </div>                           
                                </div>
                            </div>)}
                        </Popup>
                        <Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                            {<button className="tokenMythosClueFaded" onClick={this.reckoningButton}>1</button>}modal nested>
                            {close => (<div className='outerPopupMythos'>
                                <div className='mythosPopUpMattBlue'>
                                    <div className='mythosPopUpCloseButtonDiv'>
                                        {this.state.monsterToughnessCounter>=this.state.characters?null:<button className='mythosPopUpCloseButton' onClick={() => close()}>X</button>}
                                    </div>
                                    <div className='mythosPopUpTextDiv' id='mythosPopUpTextDivOneliner'>
                                        <p className='mythosPopUpText'>Wytrzymałość potworów:</p>
                                    </div>
                                    <div className='mythosPopUpCounterDiv'>
                                        <button className='tokenMythosPopUpCounter'>{this.state.monsterToughnessCounter}/{this.state.characters}</button>
                                        <div className='tokenMythosPopUpCounterDiv'>
                                            <button className="tokenMythosPopUpMinus" onClick={this.monsterToughnessCounterDecrement}></button>
                                            <button className="tokenMythosPopUpMonsterToughness"></button>
                                            <button className="tokenMythosPopUpPlus" onClick={this.monsterToughnessCounterIncrement}></button>
                                        </div>
                                    </div>
                                    <div className='mythosPopUpDoneDiv'>
                                        {this.state.monsterToughnessCounter>=this.state.characters?<p className='mythosPopUpText'>Jeśli łączna wytrzymałość Potworów <br></br>na tej karcie jest równa lub większa od <span className='mythosPopUpTextIcons'>h</span>, <br></br>ta <em>POGŁOSKA</em> zostaje rozwiązana.</p>:null}
                                        {this.state.monsterToughnessCounter>=this.state.characters?<button className='tokenMythosPopUpDone' onClick={this.state.mythosNB2Done}></button>:null} 
                                    </div>                           
                                </div>
                            </div>)}
                        </Popup>
                    </div>
                </div>
        )
    }
}
export default MythosNB2;