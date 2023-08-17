import React, { Component } from 'react';
import 'reactjs-popup/dist/index.css';
import LvlChar from './LvlChar';
import CthulhuMysteryCard1 from '../InteractiveCards/CthulhuMysteryCard1';
import CthulhuMysteryCard2 from '../InteractiveCards/CthulhuMysteryCard2';
import CthulhuMysteryCard3 from '../InteractiveCards/CthulhuMysteryCard3';
import CthulhuMysteryCard4 from '../InteractiveCards/CthulhuMysteryCard4';
import MythosNG1 from '../InteractiveCards/MythosNG1';
import MythosNG6 from '../InteractiveCards/MythosNG6';
import MythosHG1 from '../InteractiveCards/MythosHG1';
import chooseRandom from './Shuffler';
import Popup from 'reactjs-popup';
import './Components.css';
import '../InteractiveCards/InteractiveCards.css';



class CthulhuBoard extends Component {
    constructor({ level, characters, victory}) {
        super(); 
        this.mysteryDeck = [1,2,3,4]
        this.mythosDeck = ['NG1','NG2','NG3','NG4','NG5','NG6','NG7','NG8','HG1']
        this.state = {
            ancientCard: false,
            isLoadDone: false,
            level: level,
            characters: characters,
            mysteryNo: chooseRandom(this.mysteryDeck),
            prevMysteryNo: 0,
            isMystery1Active: false,
            isMystery2Active: false,
            isMystery3Active: false,
            isMystery4Active: false,
            popping: true,
            victory: victory,
            counter: 0,
            mythosNo: chooseRandom(this.mythosDeck),
            prevMythosNo: true,
            isMythosNG1Active: false,
            isMythosNG6Active: false,
            isMythosHG1Active: false,
        }  
    }

    componentDidMount() {
        this.timer()
    }

    timer() {
        setInterval(() => {
          this.setState({isLoadDone: true})
        }, 5000)
    }

    toggleCard = () => {
        this.setState ({ancientCard: true})
    }

    toogleCardBack = () => {
        this.setState ({ancientCard: false})
    }

    chooseMystery = () => {
        if (this.state.isMystery1Active === false && this.state.isMystery2Active === false &&
            this.state.isMystery3Active === false && this.state.isMystery4Active === false) {
            this.setState(prevState => ({prevMysteryNo: prevState.mysteryNo}))
            this.setState({mysteryNo: chooseRandom(this.mysteryDeck)});
            if (this.state.mysteryNo === 1) {
                this.setState ({isMystery1Active: true})
            } else if (this.state.mysteryNo === 2) {
                this.setState ({isMystery2Active: true})
            } else if (this.state.mysteryNo === 3) {
                this.setState ({isMystery3Active: true})
            } else if (this.state.mysteryNo === 4) {
                this.setState ({isMystery4Active: true})
            }
        }
    }

    chooseMythos = () => {
        this.setState(prevState => ({prevMythosNo: prevState.mythosNo}))
        this.setState({mythosNo: chooseRandom(this.mythosDeck)});
        if (this.state.mythosNo === 'NG1') {
            this.setState ({isMythosNG1Active: true})
        } else if (this.state.mythosNo === 'NG6') {
            this.setState ({isMythosNG6Active: true})
        } else if (this.state.mythosNo === 'HG1') {
            this.setState ({isMythosHG1Active: true})
        } 
    }

    mysteryDone = () => {
         if (this.state.isMystery1Active === true) {
            this.setState ({isMystery1Active: false })
        } else if (this.state.isMystery2Active === true) {
            this.setState ({isMystery2Active: false})
        } else if (this.state.isMystery3Active === true) {
            this.setState ({isMystery3Active: false})
        } else if (this.state.isMystery4Active === true) {
            this.setState ({isMystery4Active: false})
        }
        this.setState(({popping: true}))
    }

    mythosNG1Done = () => {
        this.setState ({isMythosNG1Active: false })
    }

    mythosNG6Done = () => {
        this.setState ({isMythosNG6Active: false })
    }   

    mythosHG1Done = () => {
        this.setState ({isMythosHG1Active: false })
    }  

    counterIncrement = () => {
            this.setState ({counter: this.state.counter +1})

    }

    counterDecrement = () => {
        if (this.state.counter !== 0) {
            this.setState ({counter: this.state.counter -1})
        }
    }

    canPop = () => {
        this.setState ({popping: false})
    }
      
    render() {
        return (
            <div className='ancientBoard'>
                <div className='cthulhuSheetCard'>
                    <button className={this.state.isLoadDone ? 'cthulhuSheet' : 'cthulhuSheetStamp'} id={this.state.ancientCard ? 'CthulhuSheetBack' : 'CthulhuSheetFront'}></button>
                    <div className='flipButtons'>
                        <button className='flipButton' id='FlipButtonFront' onClick={this.toogleCardBack}>Front</button>
                       {this.state.ancientCard?<div className='sheetCardAddons'>
                            <button className='sheetCardTokenMinus' onClick={this.counterDecrement}></button>
                            <button className='sheetCardSanity'></button>
                            <button className='sheetCardCounter'>{this.state.counter}</button>
                            <button className='sheetCardTokenPlus' onClick={this.counterIncrement}></button>
                        </div>:null}
                        <button className='flipButton' id='FlipButtonBack' onClick={this.toggleCard}>Rewers</button>
                    </div> 
                </div>
                <div className='ancientMysteryMythosLvlChar'>
                    <div className='ancientMysteryLvlChar'>
                        <div className='ancientMystery'>
                            {this.state.popping?
                            <Popup onOpen={this.chooseMystery} onClose={this.canPop} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                            {<button className={this.state.isLoadDone ? 'cthulhuMystery' : 'cthulhuMysteryStamp'}></button>}modal nested>
                            {close => (<div className='outerPopup'><div className='cthulhuMysteryFrontPopup' id={`CthulhuMysteryFront${this.state.prevMysteryNo}`}><button className='mysteryCloseButton' onClick={() => close()}>X</button></div></div>)}
                            </Popup>:<button className='cthulhuMystery'></button>}
                            {this.state.isMystery1Active?<CthulhuMysteryCard1 characters={this.state.characters} mysteryDone={this.mysteryDeck.length === 0 ? this.state.victory : this.mysteryDone}/>:null}
                            {this.state.isMystery2Active?<CthulhuMysteryCard2 characters={this.state.characters} mysteryDone={this.mysteryDeck.length === 0 ? this.state.victory : this.mysteryDone}/>:null}
                            {this.state.isMystery3Active?<CthulhuMysteryCard3 characters={this.state.characters} mysteryDone={this.mysteryDeck.length === 0 ? this.state.victory : this.mysteryDone}/>:null}
                            {this.state.isMystery4Active?<CthulhuMysteryCard4 mysteryDone={this.mysteryDeck.length === 0 ? this.state.victory : this.mysteryDone}/>:null}
                        </div>
                        <LvlChar level={this.state.level} characters={this.state.characters}/> 
                    </div>
                    <div className='ancientMythos'>
                        {this.state.prevMythosNo?
                        <Popup onOpen={this.chooseMythos} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                        {<button className={this.state.isLoadDone ? 'mythos' : 'mythosStamp'}></button>}modal nested>
                        {close => (<div className='outerPopup'><div className='mythosFrontPopup' id={`Mythos${this.state.prevMythosNo}`}><button className='mythosCloseButton' onClick={() => close()}>X</button></div></div>)}
                        </Popup>:<button className='mythos'></button>}
                        {this.state.isMythosNG1Active?<MythosNG1 mythosNG1Done={this.mythosNG1Done}/>:null}
                        {this.state.isMythosNG6Active?<MythosNG6 mythosNG6Done={this.mythosNG6Done}/>:null}
                        {this.state.isMythosHG1Active?<MythosHG1 mythosHG1Done={this.mythosHG1Done}/>:null}

                        {/* <button className='mythosFront' id='Mythos1'></button>
                        <button className='mythosFront' id='Mythos2'></button>
                        <button className='mythosFront' id='Mythos3'></button>
                        <button className='mythosFront' id='Mythos4'></button>
                        <button className='mythosFront' id='Mythos5'></button> */}
                    </div>
                </div>
            </div>
        )
    } 
}

export default CthulhuBoard;