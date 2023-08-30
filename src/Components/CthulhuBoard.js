import React, { Component } from 'react';
import 'reactjs-popup/dist/index.css';
import LvlChar from './LvlChar';
import CthulhuMysteryCard1 from '../InteractiveCards/CthulhuMysteryCard1';
import CthulhuMysteryCard2 from '../InteractiveCards/CthulhuMysteryCard2';
import CthulhuMysteryCard3 from '../InteractiveCards/CthulhuMysteryCard3';
import CthulhuMysteryCard4 from '../InteractiveCards/CthulhuMysteryCard4';
import CthulhuMysteryRise from '../InteractiveCards/CthulhuMysteryRise';
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
            ancientCardFlipped: false,
            isLoadDone: false,
            level: level,
            characters: characters,
            mysteryNo: chooseRandom(this.mysteryDeck),
            prevMysteryNo: 0,
            isMystery1Active: false,
            isMystery2Active: false,
            isMystery3Active: false,
            isMystery4Active: false,
            monsterSlayed: false,
            mysteryCounter:0,
            isCthulhuAwake: false,
            popping: true,
            victory: victory,
            sheetCardCounter: 0,
            mythosNo: chooseRandom(this.mythosDeck),
            prevMythosNo: true,
            choosenMythos: [],
            mythos1: false,
            mythos2: false,
            mythos3: false,
            mythos4: false,
            mythos5: false,
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

    flipCardSheet = () => {
        this.setState ({ancientCardFlipped: !this.state.ancientCardFlipped})
    }

    toggleCard = () => {
        this.setState ({ancientCardFlipped: true})
    }

    toogleCardBack = () => {
        this.setState ({ancientCardFlipped: false})
    }

    sheetCardCounterIncrement = () => {
        this.setState ({sheetCardCounter: this.state.sheetCardCounter +1})
    }

    sheetCardCounterDecrement = () => {
        if (this.state.sheetCardCounter !== 0) {
            this.setState ({sheetCardCounter: this.state.sheetCardCounter -1})
        }
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

    mystery13Increment = () => {
        if (this.state.mysteryCounter !== this.state.characters) {
            this.setState ({mysteryCounter: this.state.mysteryCounter +1})
        }
    }

    mystery2Increment = () => {
        if (this.state.mysteryCounter !== Math.ceil(this.state.characters/2)) {
            this.setState ({mysteryCounter: this.state.mysteryCounter +1})
        }
    }

    mystery123Decrement = () => {
        if (this.state.mysteryCounter !== 0) {
            this.setState ({mysteryCounter: this.state.mysteryCounter -1})
        }
    }

    mystery4Increment = () => {
        if (this.state.mysteryCounter < this.state.characters+1) {
            this.setState ({mysteryCounter: this.state.mysteryCounter +1})
        } else if (this.state.mysteryCounter === this.state.characters+1){
            this.setState ({mysteryCounter: this.state.mysteryCounter +1})
            this.setState ({monsterSlayed: true})
        }
    }

    mystery4Decrement = () => {
        if (this.state.mysteryCounter !== 0) {
            this.setState ({mysteryCounter: this.state.mysteryCounter -1})
            this.setState ({monsterSlayed: false})
        }
    }

    mysteryDone = () => {
        if (this.state.isMystery1Active === true) {
           this.setState ({isMystery1Active: false })
           this.setState ({mysteryCounter: 0})
       } else if (this.state.isMystery2Active === true) {
           this.setState ({isMystery2Active: false})
           this.setState ({mysteryCounter: 0})
       } else if (this.state.isMystery3Active === true) {
           this.setState ({isMystery3Active: false})
           this.setState ({mysteryCounter: 0})
       } else if (this.state.isMystery4Active === true) {
           this.setState ({isMystery4Active: false})
           this.setState ({mysteryCounter: 0})
       }
       this.setState(({popping: true}))
   }

    canPop = () => {
        this.setState ({popping: false})
    }

    cthulhuAwakening = () => {
        this.setState ({isCthulhuAwake: true})
        this.setState ({isMystery1Active: false })
        this.setState ({isMystery2Active: false })
        this.setState ({isMystery3Active: false })
        this.setState ({isMystery4Active: false })
        this.setState(({popping: false}))
    }   

    chooseMythos = () => {
        this.setState(prevState => ({prevMythosNo: prevState.mythosNo}))
        this.setState({mythosNo: chooseRandom(this.mythosDeck)});
        if (this.state.mythosNo === 'NG1') {
            this.setState ({choosenMythos: [...this.state.choosenMythos, this.state.mythosNo]})
            if  (this.state.mythos1 === false) { this.setState({mythos1: true}) } 
            else { if (this.state.mythos2 === false) { this.setState({mythos2: true}) } 
            else { if (this.state.mythos3 === false) { this.setState({mythos3: true}) } 
            else { if (this.state.mythos4 === false) { this.setState({mythos4: true}) } 
            else { if (this.state.mythos5 === false) { this.setState({mythos5: true}) }}}}}
        } else if (this.state.mythosNo === 'NG6') {
            this.setState ({choosenMythos: [...this.state.choosenMythos, this.state.mythosNo]})
            if (this.state.mythos1 === false) { this.setState({mythos1: true}) } 
            else { if (this.state.mythos2 === false) { this.setState({mythos2: true}) } 
            else { if (this.state.mythos3 === false) { this.setState({mythos3: true}) } 
            else { if (this.state.mythos4 === false) { this.setState({mythos4: true}) } 
            else { if (this.state.mythos5 === false) { this.setState({mythos5: true}) }}}}}
        } else if (this.state.mythosNo === 'HG1') {
            this.setState ({choosenMythos: [...this.state.choosenMythos, this.state.mythosNo]})
            if (this.state.mythos1 === false) { this.setState({mythos1: true}) } 
            else { if (this.state.mythos2 === false) { this.setState({mythos2: true}) } 
            else { if (this.state.mythos3 === false) { this.setState({mythos3: true}) } 
            else { if (this.state.mythos4 === false) { this.setState({mythos4: true}) } 
            else { if (this.state.mythos5 === false) { this.setState({mythos5: true}) }}}}}
        } 
    }

    mythosNG1Done = () => {
        if      (this.state.choosenMythos[0] === 'NG1') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'NG1') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'NG1') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'NG1') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'NG1') { this.setState ({mythos5: 'done' }) }
    }

    mythosNG6Done = () => {
        if      (this.state.choosenMythos[0] === 'NG6') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'NG6') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'NG6') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'NG6') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'NG6') { this.setState ({mythos5: 'done' }) }
    }  

    mythosHG1Done = () => {
        if      (this.state.choosenMythos[0] === 'HG1') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'HG1') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'HG1') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'HG1') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'HG1') { this.setState ({mythos5: 'done' }) }
    }
      
    render() {
        const { choosenMythos } = this.state;
        const InteractiveCard1 = (choosenMythos) => {
            switch(choosenMythos[0]) {
              case "NG1":      return <MythosNG1 mythosNG1Done={this.mythosNG1Done}/>;
              case "NG6":      return <MythosNG6 mythosNG6Done={this.mythosNG6Done}/>;
              case "HG1":      return <MythosHG1 mythosHG1Done={this.mythosHG1Done}/>;
              default:         return null;
            }
        } 

        const InteractiveCard2 = (choosenMythos) => {
            switch(choosenMythos[1]) {
              case "NG1":      return <MythosNG1 mythosNG1Done={this.mythosNG1Done}/>;
              case "NG6":      return <MythosNG6 mythosNG6Done={this.mythosNG6Done}/>;
              case "HG1":      return <MythosHG1 mythosHG1Done={this.mythosHG1Done}/>;
              default:         return null;
            }
        }

        const InteractiveCard3 = (choosenMythos) => {
            switch(choosenMythos[2]) {
              case "NG1":      return <MythosNG1 mythosNG1Done={this.mythosNG1Done}/>;
              case "NG6":      return <MythosNG6 mythosNG6Done={this.mythosNG6Done}/>;
              case "HG1":      return <MythosHG1 mythosHG1Done={this.mythosHG1Done}/>;
              default:         return null;
            }
        }

        const InteractiveCard4 = (choosenMythos) => {
            switch(choosenMythos[3]) {
              case "NG1":      return <MythosNG1 mythosNG1Done={this.mythosNG1Done}/>;
              case "NG6":      return <MythosNG6 mythosNG6Done={this.mythosNG6Done}/>;
              case "HG1":      return <MythosHG1 mythosHG1Done={this.mythosHG1Done}/>;
              default:         return null;
            }
        }

        const InteractiveCard5 = (choosenMythos) => {
            switch(choosenMythos[4]) {
              case "NG1":      return <MythosNG1 mythosNG1Done={this.mythosNG1Done}/>;
              case "NG6":      return <MythosNG6 mythosNG6Done={this.mythosNG6Done}/>;
              case "HG1":      return <MythosHG1 mythosHG1Done={this.mythosHG1Done}/>;
              default:         return null;
            }
        }

        return (
            <div className='ancientBoard'>
                    <button className={this.state.isLoadDone ? 'cthulhuSheet' : 'cthulhuSheetStamp'} id={this.state.ancientCardFlipped ? 'CthulhuSheetBack' : 'CthulhuSheetFront'}>
                        {!this.state.ancientCardFlipped?<button className='flipButton' id='flipButtonFront' onClick={this.flipCardSheet}></button>:null}
                        {this.state.ancientCardFlipped?<button className='flipButton' id='flipButtonBack' onClick={this.flipCardSheet}></button>:null}
                        {this.state.ancientCardFlipped?<div className='sheetCardAddons'>
                            <button className='sheetCardTokenMinus' onClick={this.sheetCardCounterDecrement}></button>
                            <button className='sheetCardSanity'></button>
                            <button className='sheetCardCounter'>{this.state.sheetCardCounter}</button>
                            <button className='sheetCardTokenPlus' onClick={this.sheetCardCounterIncrement}></button>
                        </div>:null}
                    </button>

                <div className='ancientMysteryMythosLvlChar'>
                    <div className='ancientMysteryLvlChar'>
                        <div className='ancientMystery'>
                            {this.state.popping?
                            <Popup onOpen={this.chooseMystery} onClose={this.canPop} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                            {<button className={this.state.isLoadDone ? 'cthulhuMystery' : 'cthulhuMysteryStamp'}></button>}modal nested>
                            {close => (<div className='outerPopup'><div className='cthulhuMysteryFrontPopup' id={`CthulhuMysteryFront${this.state.prevMysteryNo}`}><button className='mysteryCloseButton' onClick={() => close()}>X</button></div></div>)}
                            </Popup>:<button className='cthulhuMystery'></button>}
                            {this.state.isMystery1Active?<CthulhuMysteryCard1 characters={this.state.characters} mystery123Decrement={this.mystery123Decrement} mysteryCounter={this.state.mysteryCounter} mystery13Increment={this.mystery13Increment} key={this.state.ancientCardFlipped} mysteryDone={this.mysteryDeck.length === 0 ? (!this.state.ancientCardFlipped ? this.state.victory : this.cthulhuAwakening) : this.mysteryDone}/>:null}
                            {this.state.isMystery2Active?<CthulhuMysteryCard2 characters={this.state.characters} mystery123Decrement={this.mystery123Decrement} mysteryCounter={this.state.mysteryCounter} mystery2Increment={this.mystery2Increment} key={this.state.ancientCardFlipped} mysteryDone={this.mysteryDeck.length === 0 ? (!this.state.ancientCardFlipped ? this.state.victory : this.cthulhuAwakening) : this.mysteryDone}/>:null}
                            {this.state.isMystery3Active?<CthulhuMysteryCard3 characters={this.state.characters} mystery123Decrement={this.mystery123Decrement} mysteryCounter={this.state.mysteryCounter} mystery13Increment={this.mystery13Increment} key={this.state.ancientCardFlipped} mysteryDone={this.mysteryDeck.length === 0 ? (!this.state.ancientCardFlipped ? this.state.victory : this.cthulhuAwakening) : this.mysteryDone}/>:null}
                            {this.state.isMystery4Active?<CthulhuMysteryCard4 characters={this.state.characters} mystery4Decrement={this.mystery4Decrement} mysteryCounter={this.state.mysteryCounter} mystery4Increment={this.mystery4Increment} key={this.state.ancientCardFlipped} monsterSlayed={this.state.monsterSlayed} mysteryDone={this.mysteryDeck.length === 0 ? (!this.state.ancientCardFlipped ? this.state.victory : this.cthulhuAwakening) : this.mysteryDone}/>:null}
                            {this.state.isCthulhuAwake?<CthulhuMysteryRise characters={this.state.characters} cthulhuSlayed={this.state.victory}/>:null}
                        </div>
                        <LvlChar level={this.state.level} characters={this.state.characters}/> 
                    </div>
                    <div className='ancientMythos'>
                        {this.state.prevMythosNo?
                        <Popup onOpen={this.chooseMythos} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                        {<button className={this.state.isLoadDone ? 'mythos' : 'mythosStamp'}></button>}modal nested>
                        {close => (<div className='outerPopup'><div className='mythosFrontPopup' id={`Mythos${this.state.prevMythosNo}`}><button className='mythosCloseButton' onClick={() => close()}>X</button></div></div>)}
                        </Popup>:<button className='mythos'></button>}
                        {this.state.mythos1 === true ?<div>{ InteractiveCard1(choosenMythos) }</div>:null}
                        {this.state.mythos2 === true ?<div>{ InteractiveCard2(choosenMythos) }</div>:null}
                        {this.state.mythos3 === true ?<div>{ InteractiveCard3(choosenMythos) }</div>:null}
                        {this.state.mythos4 === true ?<div>{ InteractiveCard4(choosenMythos) }</div>:null}
                        {this.state.mythos5 === true ?<div>{ InteractiveCard5(choosenMythos) }</div>:null}
                    </div>
                </div>
            </div>
        )
    } 
}

export default CthulhuBoard;