import React, { Component } from 'react';
import 'reactjs-popup/dist/index.css';
import LvlChar from './LvlChar';
import CthulhuMysteryCard1 from '../InteractiveCards/CthulhuMysteryCard1';
import CthulhuMysteryCard2 from '../InteractiveCards/CthulhuMysteryCard2';
import CthulhuMysteryCard3 from '../InteractiveCards/CthulhuMysteryCard3';
import CthulhuMysteryCard4 from '../InteractiveCards/CthulhuMysteryCard4';
import chooseRandom from './Shuffler';
import './Components.css'


class CthulhuBoard extends Component {
    constructor({ level, characters, victory}) {
        super(); 
        this.mysteryDeck = [1,2,3,4]
        this.state = {
            ancientCard: false,
            isLoadDone: false,
            level: level,
            characters: characters,
            mysteryNo: chooseRandom(this.mysteryDeck),
            isMystery1Active: false,
            isMystery2Active: false,
            isMystery3Active: false,
            isMystery4Active: false,
            victory: victory,
            counter: 0,
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

    mysteryDone = () => {
         if (this.state.isMystery1Active === true) {
            this.setState ({isMystery1Active: false})
        } else if (this.state.isMystery2Active === true) {
            this.setState ({isMystery2Active: false})
        } else if (this.state.isMystery3Active === true) {
            this.setState ({isMystery3Active: false})
        } else if (this.state.isMystery4Active === true) {
            this.setState ({isMystery4Active: false})
        }
    }

    counterIncrement = () => {
            this.setState ({counter: this.state.counter +1})

    }

    counterDecrement = () => {
        if (this.state.counter !== 0) {
            this.setState ({counter: this.state.counter -1})
        }
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
                            <button className={this.state.isLoadDone ? 'cthulhuMystery' : 'cthulhuMysteryStamp'} onClick={this.chooseMystery}></button>
                            {this.state.isMystery1Active?<CthulhuMysteryCard1 characters={this.state.characters} mysteryDone={this.mysteryDeck.length === 0 ? this.state.victory : this.mysteryDone}/>:null}
                            {this.state.isMystery2Active?<CthulhuMysteryCard2 characters={this.state.characters} mysteryDone={this.mysteryDeck.length === 0 ? this.state.victory : this.mysteryDone}/>:null}
                            {this.state.isMystery3Active?<CthulhuMysteryCard3 characters={this.state.characters} mysteryDone={this.mysteryDeck.length === 0 ? this.state.victory : this.mysteryDone}/>:null}
                            {this.state.isMystery4Active?<CthulhuMysteryCard4 characters={this.state.characters} mysteryDone={this.mysteryDeck.length === 0 ? this.state.victory : this.mysteryDone}/>:null}
                        </div>
                    <LvlChar level={this.state.level} characters={this.state.characters}/> 
                    </div>
                    <div className='ancientMythos'>
                        <button className={this.state.isLoadDone ? 'mythos' : 'mythosStamp'}></button>
                        <button className='mythosFront' id={this.state.victory ? 'Mythos2' : 'Mythos1'}></button>
                        <button className='mythosFront' id='Mythos2'></button>
                        <button className='mythosFront' id='Mythos3'></button>
                        <button className='mythosFront' id='Mythos4'></button>
                        <button className='mythosFront' id='Mythos5'></button>
                    </div>
                </div>
            </div>
        )
    } 
}

export default CthulhuBoard;