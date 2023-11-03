import React, { Component } from 'react';
import 'reactjs-popup/dist/index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import LvlChar from './LvlChar';
import AzathothSheet from './AzathothSheet'
import YogSothothSheet from './YogSothothSheet'
import ShubNiggurathSheet from './ShubNiggurathSheet';    
import CthulhuSheet from './CthulhuSheet';
import AzathothMystery from './AzathothMystery';
import YogSothothMystery from './YogSothothMystery';
import ShubNiggurathMystery from './ShubNiggurathMystery';
import CthulhuMystery from './CthulhuMystery';
import MythosNG1 from '../InteractiveCards/MythosNG1';
import MythosNG6 from '../InteractiveCards/MythosNG6';
import MythosHG1 from '../InteractiveCards/MythosHG1';
import MythosEB1 from '../InteractiveCards/MythosEB1';
import MythosEB2 from '../InteractiveCards/MythosEB2';
import MythosEB3 from '../InteractiveCards/MythosEB3';
import MythosEB4 from '../InteractiveCards/MythosEB4';
import MythosNB1 from '../InteractiveCards/MythosNB1';
import MythosNB2 from '../InteractiveCards/MythosNB2';
import MythosNB3 from '../InteractiveCards/MythosNB3';
import MythosNB4 from '../InteractiveCards/MythosNB4';
import MythosHB1 from '../InteractiveCards/MythosHB1';
import MythosHB2 from '../InteractiveCards/MythosHB2';
import MythosHB3 from '../InteractiveCards/MythosHB3';
import MythosHB4 from '../InteractiveCards/MythosHB4';
import chooseRandom from './Shuffler';
import Popup from 'reactjs-popup';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Components.css';
import '../InteractiveCards/InteractiveCards.css';

class AncientBoard extends Component {
    constructor({ props, level, characters, mythosDeck, mythosDeckStage2, mythosDeckStage3, rumorDeck, deletedDeckReverseExpedition, removeExpedition, victory, defeat}) {
        super(props); 
        this.mysteryDeck = [1,2,3,4]
        this.discardMysteryDeck = []
        this.mythosDeck = mythosDeck
        this.mythosDeckStage2 = mythosDeckStage2
        this.mythosDeckStage3 = mythosDeckStage3
        this.rumorDeck = rumorDeck
        this.deletedDeckReverseExpedition = deletedDeckReverseExpedition
        this.removeExpedition = removeExpedition
        this.discardMythosDeck = []
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
            mysteryCounter: 0,
            isCthulhuAwake: false,
            isShubNiggurathAwake: false,
            popping: true,
            victory: victory,
            defeat: defeat,
            sheetCardCthulhuCounter: 0,
            sheetCardYogSothothEldritchCounter: 0,
            sheetCardYogSothothGateCounter: 0,
            mythosNo: chooseRandom(this.mythosDeck),
            prevMythosNo: true,
            rumorNo: chooseRandom(this.rumorDeck),
            choosenMythos: [],
            mythos1: false,
            mythos2: false,
            mythos3: false,
            mythos4: false,
            mythos5: false,
            mythos6: false,
        }  
    }

    componentDidMount() {
        this.timer()
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.mythosDeck.length < 1) {
            this.mythosDeck = this.mythosDeckStage2
            if (this.mythosDeckStage2.length < 1) {
            this.mythosDeck = this.mythosDeckStage3
            }
        }
        if(prevState.prevMythosNo !== this.state.prevMythosNo && 
            this.state.prevMythosNo !== 'NG1' && this.state.prevMythosNo !== 'NG6' && this.state.prevMythosNo !== 'HG1' && 
            this.state.prevMythosNo !== 'EB1' && this.state.prevMythosNo !== 'EB2' && this.state.prevMythosNo !== 'EB3' &&
            this.state.prevMythosNo !== 'EB4' && this.state.prevMythosNo !== 'NB1' && this.state.prevMythosNo !== 'NB2' && 
            this.state.prevMythosNo !== 'NB3' && this.state.prevMythosNo !== 'NB4' && this.state.prevMythosNo !== 'HB1' && 
            this.state.prevMythosNo !== 'HB2' && this.state.prevMythosNo !== 'HB3' && this.state.prevMythosNo !== 'HB4') {
            this.discardMythosDeck.push(this.state.prevMythosNo);
        }
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

    sheetCardYogSothothEldritchCounterIncrement = () => {
        if (this.state.sheetCardYogSothothEldritchCounter !== Math.ceil(this.state.characters/2)) {
            this.setState ({sheetCardYogSothothEldritchCounter: this.state.sheetCardYogSothothEldritchCounter +1})
        }
    }

    sheetCardYogSothothEldritchCounterDecrement = () => {
        if (this.state.sheetCardYogSothothEldritchCounter !== 0) {
            this.setState ({sheetCardYogSothothEldritchCounter: this.state.sheetCardYogSothothEldritchCounter -1})
        }
    }
    
    sheetCardYogSothothGateCounterIncrement = () => {
            this.setState ({sheetCardYogSothothGateCounter: this.state.sheetCardYogSothothGateCounter +1})
    }

    sheetCardYogSothothGateCounterDecrement = () => {
        if (this.state.sheetCardYogSothothGateCounter !== 0) {
            this.setState ({sheetCardYogSothothGateCounter: this.state.sheetCardYogSothothGateCounter -1})
        }
    }

    sheetCardCthulhuCounterIncrement = () => {
        this.setState ({sheetCardCthulhuCounter: this.state.sheetCardCthulhuCounter +1})
    }

    sheetCardCthulhuCounterDecrement = () => {
        if (this.state.sheetCardCthulhuCounter !== 0) {
            this.setState ({sheetCardCthulhuCounter: this.state.sheetCardCthulhuCounter -1})
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

    mysteryIncrementFull = () => {
        if (this.state.mysteryCounter !== this.state.characters) {
            this.setState ({mysteryCounter: this.state.mysteryCounter +1})
        }
    }

    mysteryIncrementDouble = () => {
        if (this.state.mysteryCounter !== this.state.characters*2) {
            this.setState ({mysteryCounter: this.state.mysteryCounter +1})
        }
    }
    
    mysteryIncrementHalf = () => {
        if (this.state.mysteryCounter !== Math.ceil(this.state.characters/2)) {
            this.setState ({mysteryCounter: this.state.mysteryCounter +1})
        }
    }
    
    mysteryDecrement = () => {
        if (this.state.mysteryCounter !== 0) {
            this.setState ({mysteryCounter: this.state.mysteryCounter -1})
        }
    }
    
    mysteryIncrementMonster = () => {
        if (this.state.mysteryCounter < this.state.characters+1) {
            this.setState ({mysteryCounter: this.state.mysteryCounter +1})
        } else if (this.state.mysteryCounter === this.state.characters+1){
            this.setState ({mysteryCounter: this.state.mysteryCounter +1})
            this.setState ({monsterSlayed: true})
        }
    }
    
    mysteryDecrementMonster = () => {
        if (this.state.mysteryCounter !== 0) {
            this.setState ({mysteryCounter: this.state.mysteryCounter -1})
            this.setState ({monsterSlayed: false})
        }
    }

    mysteryDone = () => {
        if (this.state.isMystery1Active === true) {
           this.setState ({isMystery1Active: false })
           this.setState ({mysteryCounter: 0})
           this.discardMysteryDeck.push(1);
        } else if (this.state.isMystery2Active === true) {
           this.setState ({isMystery2Active: false})
           this.setState ({mysteryCounter: 0})
           this.discardMysteryDeck.push(2);
        } else if (this.state.isMystery3Active === true) {
           this.setState ({isMystery3Active: false})
           this.setState ({mysteryCounter: 0})
           this.discardMysteryDeck.push(3);
        } else if (this.state.isMystery4Active === true) {
           this.setState ({isMystery4Active: false})
           this.setState ({mysteryCounter: 0})
           this.discardMysteryDeck.push(4);
        }
        this.setState(({popping: true}))
    }

    mysteryDoneFinal = () => {
        if (this.state.isMystery1Active === true) {
           this.setState ({isMystery1Active: false })
           this.setState ({mysteryCounter: 0})
           this.discardMysteryDeck.push(1);
        } else if (this.state.isMystery2Active === true) {
           this.setState ({isMystery2Active: false})
           this.setState ({mysteryCounter: 0})
           this.discardMysteryDeck.push(2);
        } else if (this.state.isMystery3Active === true) {
           this.setState ({isMystery3Active: false})
           this.setState ({mysteryCounter: 0})
           this.discardMysteryDeck.push(3);
        } else if (this.state.isMystery4Active === true) {
           this.setState ({isMystery4Active: false})
           this.setState ({mysteryCounter: 0})
           this.discardMysteryDeck.push(4);
        }
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
        this.discardMysteryDeck.push(this.state.prevMysteryNo);
    }
    
    shubNiggurathAwakening = () => {
        this.setState ({isShubNiggurathAwake: true})
    }

    chooseMythos = () => {
        this.setState(prevState => ({prevMythosNo: prevState.mythosNo}))
        this.setState({mythosNo: chooseRandom(this.mythosDeck)});
        if (this.state.mythosNo === 'NG1' || this.state.mythosNo === 'NG6' || this.state.mythosNo === 'HG1') {
            this.setState ({choosenMythos: [...this.state.choosenMythos, this.state.mythosNo]})
            if  (this.state.mythos1 === false) { this.setState({mythos1: 'green'}) } 
            else { if (this.state.mythos2 === false) { this.setState({mythos2: 'green'}) } 
            else { if (this.state.mythos3 === false) { this.setState({mythos3: 'green'}) } 
            else { if (this.state.mythos4 === false) { this.setState({mythos4: 'green'}) } 
            else { if (this.state.mythos5 === false) { this.setState({mythos5: 'green'}) }
            else { if (this.state.mythos6 === false) { this.setState({mythos6: 'green'}) }}}}}}
        } else if (this.state.mythosNo === 'EB1' || this.state.mythosNo === 'EB2' || this.state.mythosNo === 'EB3' || 
        this.state.mythosNo === 'EB4' || this.state.mythosNo === 'NB1' || this.state.mythosNo === 'NB2' || 
        this.state.mythosNo === 'NB3' || this.state.mythosNo === 'NB4' || this.state.mythosNo === 'HB1' || 
        this.state.mythosNo === 'HB2' || this.state.mythosNo === 'HB3' || this.state.mythosNo === 'HB4') {
            this.setState ({choosenMythos: [...this.state.choosenMythos, this.state.mythosNo]})
            if  (this.state.mythos1 === false) { this.setState({mythos1: 'blue'}) } 
            else { if (this.state.mythos2 === false) { this.setState({mythos2: 'blue'}) } 
            else { if (this.state.mythos3 === false) { this.setState({mythos3: 'blue'}) } 
            else { if (this.state.mythos4 === false) { this.setState({mythos4: 'blue'}) } 
            else { if (this.state.mythos5 === false) { this.setState({mythos5: 'blue'}) }
            else { if (this.state.mythos6 === false) { this.setState({mythos6: 'blue'}) }}}}}}
        }
    }

    chooseRumor = () => {
        this.setState(prevState => ({prevMythosNo: prevState.rumorNo}))
        this.setState({choosenMythos: [...this.state.choosenMythos, this.state.rumorNo]})
        if  (this.state.mythos1 === false) { this.setState({mythos1: 'blue'}) } 
        else { if (this.state.mythos2 === false) { this.setState({mythos2: 'blue'}) } 
        else { if (this.state.mythos3 === false) { this.setState({mythos3: 'blue'}) } 
        else { if (this.state.mythos4 === false) { this.setState({mythos4: 'blue'}) } 
        else { if (this.state.mythos5 === false) { this.setState({mythos5: 'blue'}) } 
        else { if (this.state.mythos6 === false) { this.setState({mythos6: 'blue'}) }}}}}}
    }

    mythosNG1Done = () => {
        if      (this.state.choosenMythos[0] === 'NG1') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'NG1') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'NG1') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'NG1') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'NG1') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'NG1') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('NG1');
    }

    mythosNG6Done = () => {
        if      (this.state.choosenMythos[0] === 'NG6') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'NG6') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'NG6') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'NG6') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'NG6') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'NG6') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('NG6');
    }  

    mythosHG1Done = () => {
        if      (this.state.choosenMythos[0] === 'HG1') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'HG1') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'HG1') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'HG1') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'HG1') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'HG1') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('HG1');
    }

    mythosEB1Done = () => {
        if      (this.state.choosenMythos[0] === 'EB1') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'EB1') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'EB1') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'EB1') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'EB1') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'EB1') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('EB1');
    }

    mythosEB2Done = () => {
        if      (this.state.choosenMythos[0] === 'EB2') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'EB2') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'EB2') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'EB2') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'EB2') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'EB2') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('EB2');
    }

    mythosEB3Done = () => {
        if      (this.state.choosenMythos[0] === 'EB3') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'EB3') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'EB3') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'EB3') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'EB3') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'EB3') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('EB3');
    }

    mythosEB4Done = () => {
        if      (this.state.choosenMythos[0] === 'EB4') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'EB4') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'EB4') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'EB4') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'EB4') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'EB4') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('EB4');
    }

    mythosNB1Done = () => {
        if      (this.state.choosenMythos[0] === 'NB1') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'NB1') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'NB1') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'NB1') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'NB1') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'NB1') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('NB1');
    }

    mythosNB2Done = () => {
        if      (this.state.choosenMythos[0] === 'NB2') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'NB2') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'NB2') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'NB2') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'NB2') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'NB2') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('NB2');
    }

    mythosNB3Done = () => {
        if      (this.state.choosenMythos[0] === 'NB3') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'NB3') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'NB3') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'NB3') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'NB3') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'NB3') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('NB3');
    }

    mythosNB4Done = () => {
        if      (this.state.choosenMythos[0] === 'NB4') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'NB4') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'NB4') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'NB4') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'NB4') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'NB4') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('NB4');
    } 

    mythosHB1Done = () => {
        if      (this.state.choosenMythos[0] === 'HB1') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'HB1') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'HB1') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'HB1') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'HB1') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'HB1') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('HB1');
    }

    mythosHB2Done = () => {
        if      (this.state.choosenMythos[0] === 'HB2') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'HB2') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'HB2') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'HB2') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'HB2') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'HB2') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('HB2');
    }

    mythosHB3Done = () => {
        if      (this.state.choosenMythos[0] === 'HB3') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'HB3') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'HB3') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'HB3') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'HB3') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'HB3') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('HB3');
    }

    mythosHB4Done = () => {
        if      (this.state.choosenMythos[0] === 'HB4') { this.setState ({mythos1: 'done' }) } 
        else if (this.state.choosenMythos[1] === 'HB4') { this.setState ({mythos2: 'done' }) } 
        else if (this.state.choosenMythos[2] === 'HB4') { this.setState ({mythos3: 'done' }) } 
        else if (this.state.choosenMythos[3] === 'HB4') { this.setState ({mythos4: 'done' }) } 
        else if (this.state.choosenMythos[4] === 'HB4') { this.setState ({mythos5: 'done' }) }
        else if (this.state.choosenMythos[5] === 'HB4') { this.setState ({mythos6: 'done' }) }
        this.discardMythosDeck.push('HB4');
    }
   
    render() {
        const reverseMystery = () => {
            this.mysteryDeck.push(chooseRandom(this.discardMysteryDeck));
            if (!this.state.isMystery1Active && !this.state.isMystery2Active && 
                !this.state.isMystery3Active && !this.state.isMystery4Active && 
                !this.state.popping) {
                this.setState({popping: true})
            }
        }
        const { choosenMythos } = this.state;
        const InteractiveCard1 = (choosenMythos) => {
            switch(choosenMythos[0]) {
              case "NG1":      return <MythosNG1 mythosNG1Done={this.mythosNG1Done}/>;
              case "NG6":      return <MythosNG6 mythosNG6Done={this.mythosNG6Done}/>;
              case "HG1":      return <MythosHG1 mythosHG1Done={this.mythosHG1Done}/>;
              case "EB1":      return <MythosEB1 mythosEB1Done={this.mythosEB1Done} characters={this.state.characters}/>;
              case "EB2":      return <MythosEB2 mythosEB2Done={this.mythosEB2Done}/>;
              case "EB3":      return <MythosEB3 mythosEB3Done={this.mythosEB3Done} characters={this.state.characters} deletedDeckReverseExpedition={this.props.deletedDeckReverseExpedition} removeExpedition={this.removeExpedition}
                                                 deletedAntarctica={this.props.deletedAntarctica} deletedTheAmazon={this.props.deletedTheAmazon} deletedTheHeartofAfrica={this.props.deletedTheHeartofAfrica} 
                                                 deletedTheHimalayas={this.props.deletedTheHimalayas} deletedThePyramids={this.props.deletedThePyramids} deletedTunguska={this.props.deletedTunguska} defeat={this.state.defeat}/>;
              case "EB4":      return <MythosEB4 mythosEB4Done={this.mythosEB4Done}/>;
              case "NB1":      return <MythosNB1 mythosNB1Done={this.mythosNB1Done} characters={this.state.characters}/>;
              case "NB2":      return <MythosNB2 mythosNB2Done={this.mythosNB2Done} characters={this.state.characters}/>;
              case "NB3":      return <MythosNB3 mythosNB3Done={this.mythosNB3Done}/>;
              case "NB4":      return <MythosNB4 mythosNB4Done={this.mythosNB4Done} characters={this.state.characters}/>;
              case "HB1":      return <MythosHB1 mythosHB1Done={this.mythosHB1Done} characters={this.state.characters}/>;
              case "HB2":      return <MythosHB2 mythosHB2Done={this.mythosHB2Done} defeat={this.state.defeat}/>;
              case "HB3":      return <MythosHB3 mythosHB3Done={this.mythosHB3Done} characters={this.state.characters}/>;
              case "HB4":      return <MythosHB4 mythosHB4Done={this.mythosHB4Done} characters={this.state.characters} defeat={this.state.defeat}/>;
              default:         return null;
            }
        } 

        const InteractiveCard2 = (choosenMythos) => {
            switch(choosenMythos[1]) {
              case "NG1":      return <MythosNG1 mythosNG1Done={this.mythosNG1Done}/>;
              case "NG6":      return <MythosNG6 mythosNG6Done={this.mythosNG6Done}/>;
              case "HG1":      return <MythosHG1 mythosHG1Done={this.mythosHG1Done}/>;
              case "EB1":      return <MythosEB1 mythosEB1Done={this.mythosEB1Done} characters={this.state.characters}/>;
              case "EB2":      return <MythosEB2 mythosEB2Done={this.mythosEB2Done}/>;
              case "EB3":      return <MythosEB3 mythosEB3Done={this.mythosEB3Done} characters={this.state.characters} deletedDeckReverseExpedition={this.props.deletedDeckReverseExpedition} removeExpedition={this.removeExpedition}
                                                 deletedAntarctica={this.props.deletedAntarctica} deletedTheAmazon={this.props.deletedTheAmazon} deletedTheHeartofAfrica={this.props.deletedTheHeartofAfrica} 
                                                 deletedTheHimalayas={this.props.deletedTheHimalayas} deletedThePyramids={this.props.deletedThePyramids} deletedTunguska={this.props.deletedTunguska} defeat={this.state.defeat}/>;
              case "EB4":      return <MythosEB4 mythosEB4Done={this.mythosEB4Done}/>;
              case "NB1":      return <MythosNB1 mythosNB1Done={this.mythosNB1Done} characters={this.state.characters}/>;
              case "NB2":      return <MythosNB2 mythosNB2Done={this.mythosNB2Done} characters={this.state.characters}/>;
              case "NB3":      return <MythosNB3 mythosNB3Done={this.mythosNB3Done}/>;
              case "NB4":      return <MythosNB4 mythosNB4Done={this.mythosNB4Done} characters={this.state.characters}/>;
              case "HB1":      return <MythosHB1 mythosHB1Done={this.mythosHB1Done} characters={this.state.characters}/>;
              case "HB2":      return <MythosHB2 mythosHB2Done={this.mythosHB2Done} defeat={this.state.defeat}/>;
              case "HB3":      return <MythosHB3 mythosHB3Done={this.mythosHB3Done} characters={this.state.characters}/>;
              case "HB4":      return <MythosHB4 mythosHB4Done={this.mythosHB4Done} characters={this.state.characters} defeat={this.state.defeat}/>;
              default:         return null;
            }
        }

        const InteractiveCard3 = (choosenMythos) => {
            switch(choosenMythos[2]) {
              case "NG1":      return <MythosNG1 mythosNG1Done={this.mythosNG1Done}/>;
              case "NG6":      return <MythosNG6 mythosNG6Done={this.mythosNG6Done}/>;
              case "HG1":      return <MythosHG1 mythosHG1Done={this.mythosHG1Done}/>;
              case "EB1":      return <MythosEB1 mythosEB1Done={this.mythosEB1Done} characters={this.state.characters}/>;
              case "EB2":      return <MythosEB2 mythosEB2Done={this.mythosEB2Done}/>;
              case "EB3":      return <MythosEB3 mythosEB3Done={this.mythosEB3Done} characters={this.state.characters} deletedDeckReverseExpedition={this.props.deletedDeckReverseExpedition} removeExpedition={this.removeExpedition}
                                                 deletedAntarctica={this.props.deletedAntarctica} deletedTheAmazon={this.props.deletedTheAmazon} deletedTheHeartofAfrica={this.props.deletedTheHeartofAfrica} 
                                                 deletedTheHimalayas={this.props.deletedTheHimalayas} deletedThePyramids={this.props.deletedThePyramids} deletedTunguska={this.props.deletedTunguska} defeat={this.state.defeat}/>;
              case "EB4":      return <MythosEB4 mythosEB4Done={this.mythosEB4Done}/>;
              case "NB1":      return <MythosNB1 mythosNB1Done={this.mythosNB1Done} characters={this.state.characters}/>;
              case "NB2":      return <MythosNB2 mythosNB2Done={this.mythosNB2Done} characters={this.state.characters}/>;
              case "NB3":      return <MythosNB3 mythosNB3Done={this.mythosNB3Done}/>;
              case "NB4":      return <MythosNB4 mythosNB4Done={this.mythosNB4Done} characters={this.state.characters}/>;
              case "HB1":      return <MythosHB1 mythosHB1Done={this.mythosHB1Done} characters={this.state.characters}/>;
              case "HB2":      return <MythosHB2 mythosHB2Done={this.mythosHB2Done} defeat={this.state.defeat}/>;
              case "HB3":      return <MythosHB3 mythosHB3Done={this.mythosHB3Done} characters={this.state.characters}/>;
              case "HB4":      return <MythosHB4 mythosHB4Done={this.mythosHB4Done} characters={this.state.characters} defeat={this.state.defeat}/>;
              default:         return null;
            }
        }

        const InteractiveCard4 = (choosenMythos) => {
            switch(choosenMythos[3]) {
              case "NG1":      return <MythosNG1 mythosNG1Done={this.mythosNG1Done}/>;
              case "NG6":      return <MythosNG6 mythosNG6Done={this.mythosNG6Done}/>;
              case "HG1":      return <MythosHG1 mythosHG1Done={this.mythosHG1Done}/>;
              case "EB1":      return <MythosEB1 mythosEB1Done={this.mythosEB1Done} characters={this.state.characters}/>;
              case "EB2":      return <MythosEB2 mythosEB2Done={this.mythosEB2Done}/>;
              case "EB3":      return <MythosEB3 mythosEB3Done={this.mythosEB3Done} characters={this.state.characters} deletedDeckReverseExpedition={this.props.deletedDeckReverseExpedition} removeExpedition={this.removeExpedition}
                                                 deletedAntarctica={this.props.deletedAntarctica} deletedTheAmazon={this.props.deletedTheAmazon} deletedTheHeartofAfrica={this.props.deletedTheHeartofAfrica} 
                                                 deletedTheHimalayas={this.props.deletedTheHimalayas} deletedThePyramids={this.props.deletedThePyramids} deletedTunguska={this.props.deletedTunguska} defeat={this.state.defeat}/>;
              case "EB4":      return <MythosEB4 mythosEB4Done={this.mythosEB4Done}/>;
              case "NB1":      return <MythosNB1 mythosNB1Done={this.mythosNB1Done} characters={this.state.characters}/>;
              case "NB2":      return <MythosNB2 mythosNB2Done={this.mythosNB2Done} characters={this.state.characters}/>;
              case "NB3":      return <MythosNB3 mythosNB3Done={this.mythosNB3Done}/>;
              case "NB4":      return <MythosNB4 mythosNB4Done={this.mythosNB4Done} characters={this.state.characters}/>;
              case "HB1":      return <MythosHB1 mythosHB1Done={this.mythosHB1Done} characters={this.state.characters}/>;
              case "HB2":      return <MythosHB2 mythosHB2Done={this.mythosHB2Done} defeat={this.state.defeat}/>;
              case "HB3":      return <MythosHB3 mythosHB3Done={this.mythosHB3Done} characters={this.state.characters}/>;
              case "HB4":      return <MythosHB4 mythosHB4Done={this.mythosHB4Done} characters={this.state.characters} defeat={this.state.defeat}/>;
              default:         return null;
            }
        }

        const InteractiveCard5 = (choosenMythos) => {
            switch(choosenMythos[4]) {
              case "NG1":      return <MythosNG1 mythosNG1Done={this.mythosNG1Done}/>;
              case "NG6":      return <MythosNG6 mythosNG6Done={this.mythosNG6Done}/>;
              case "HG1":      return <MythosHG1 mythosHG1Done={this.mythosHG1Done}/>;
              case "EB1":      return <MythosEB1 mythosEB1Done={this.mythosEB1Done} characters={this.state.characters}/>;
              case "EB2":      return <MythosEB2 mythosEB2Done={this.mythosEB2Done}/>;
              case "EB3":      return <MythosEB3 mythosEB3Done={this.mythosEB3Done} characters={this.state.characters} deletedDeckReverseExpedition={this.props.deletedDeckReverseExpedition} removeExpedition={this.removeExpedition}
                                                 deletedAntarctica={this.props.deletedAntarctica} deletedTheAmazon={this.props.deletedTheAmazon} deletedTheHeartofAfrica={this.props.deletedTheHeartofAfrica} 
                                                 deletedTheHimalayas={this.props.deletedTheHimalayas} deletedThePyramids={this.props.deletedThePyramids} deletedTunguska={this.props.deletedTunguska} defeat={this.state.defeat}/>;
              case "EB4":      return <MythosEB4 mythosEB4Done={this.mythosEB4Done}/>;
              case "NB1":      return <MythosNB1 mythosNB1Done={this.mythosNB1Done} characters={this.state.characters}/>;
              case "NB2":      return <MythosNB2 mythosNB2Done={this.mythosNB2Done} characters={this.state.characters}/>;
              case "NB3":      return <MythosNB3 mythosNB3Done={this.mythosNB3Done}/>;
              case "NB4":      return <MythosNB4 mythosNB4Done={this.mythosNB4Done} characters={this.state.characters}/>;
              case "HB1":      return <MythosHB1 mythosHB1Done={this.mythosHB1Done} characters={this.state.characters}/>;
              case "HB2":      return <MythosHB2 mythosHB2Done={this.mythosHB2Done} defeat={this.state.defeat}/>;
              case "HB3":      return <MythosHB3 mythosHB3Done={this.mythosHB3Done} characters={this.state.characters}/>;
              case "HB4":      return <MythosHB4 mythosHB4Done={this.mythosHB4Done} characters={this.state.characters} defeat={this.state.defeat}/>;
              default:         return null;
            }
        }

        const InteractiveCard6 = (choosenMythos) => {
            switch(choosenMythos[5]) {
              case "NG1":      return <MythosNG1 mythosNG1Done={this.mythosNG1Done}/>;
              case "NG6":      return <MythosNG6 mythosNG6Done={this.mythosNG6Done}/>;
              case "HG1":      return <MythosHG1 mythosHG1Done={this.mythosHG1Done}/>;
              case "EB1":      return <MythosEB1 mythosEB1Done={this.mythosEB1Done} characters={this.state.characters}/>;
              case "EB2":      return <MythosEB2 mythosEB2Done={this.mythosEB2Done}/>;
              case "EB3":      return <MythosEB3 mythosEB3Done={this.mythosEB3Done} characters={this.state.characters} deletedDeckReverseExpedition={this.props.deletedDeckReverseExpedition} removeExpedition={this.removeExpedition}
                                                 deletedAntarctica={this.props.deletedAntarctica} deletedTheAmazon={this.props.deletedTheAmazon} deletedTheHeartofAfrica={this.props.deletedTheHeartofAfrica} 
                                                 deletedTheHimalayas={this.props.deletedTheHimalayas} deletedThePyramids={this.props.deletedThePyramids} deletedTunguska={this.props.deletedTunguska} defeat={this.state.defeat}/>;
              case "EB4":      return <MythosEB4 mythosEB4Done={this.mythosEB4Done}/>;
              case "NB1":      return <MythosNB1 mythosNB1Done={this.mythosNB1Done} characters={this.state.characters}/>;
              case "NB2":      return <MythosNB2 mythosNB2Done={this.mythosNB2Done} characters={this.state.characters}/>;
              case "NB3":      return <MythosNB3 mythosNB3Done={this.mythosNB3Done}/>;
              case "NB4":      return <MythosNB4 mythosNB4Done={this.mythosNB4Done} characters={this.state.characters}/>;
              case "HB1":      return <MythosHB1 mythosHB1Done={this.mythosHB1Done} characters={this.state.characters}/>;
              case "HB2":      return <MythosHB2 mythosHB2Done={this.mythosHB2Done} defeat={this.state.defeat}/>;
              case "HB3":      return <MythosHB3 mythosHB3Done={this.mythosHB3Done} characters={this.state.characters}/>;
              case "HB4":      return <MythosHB4 mythosHB4Done={this.mythosHB4Done} characters={this.state.characters} defeat={this.state.defeat}/>;
              default:         return null;
            }
        }

        return (
            <div className='ancientBoard'>
                {this.props.ancient === 'Azathoth'?
                <AzathothSheet      ancient={this.props.ancient}
                                    isLoadDone={this.state.isLoadDone} 
                                    ancientCardFlipped={this.state.ancientCardFlipped} 
                                    defeat={this.state.defeat}
                                    flipCardSheet={this.flipCardSheet} 
                                />
                :this.props.ancient === 'YogSothoth'?
                <YogSothothSheet    ancient={this.props.ancient}
                                    characters={this.state.characters}
                                    isLoadDone={this.state.isLoadDone} 
                                    victory={this.state.victory}
                                    defeat={this.state.defeat}
                                    ancientCardFlipped={this.state.ancientCardFlipped} 
                                    flipCardSheet={this.flipCardSheet} 
                                    sheetCardYogSothothEldritchCounter={this.state.sheetCardYogSothothEldritchCounter}
                                    sheetCardYogSothothEldritchCounterDecrement={this.sheetCardYogSothothEldritchCounterDecrement} 
                                    sheetCardYogSothothEldritchCounterIncrement={this.sheetCardYogSothothEldritchCounterIncrement}
                                    sheetCardYogSothothGateCounter={this.state.sheetCardYogSothothGateCounter}
                                    sheetCardYogSothothGateCounterDecrement={this.sheetCardYogSothothGateCounterDecrement} 
                                    sheetCardYogSothothGateCounterIncrement={this.sheetCardYogSothothGateCounterIncrement}
                                />
                :this.props.ancient === 'ShubNiggurath'?
                <ShubNiggurathSheet ancient={this.props.ancient}
                                    isLoadDone={this.state.isLoadDone} 
                                    ancientCardFlipped={this.state.ancientCardFlipped} 
                                    flipCardSheet={this.flipCardSheet} 
                                    shubNiggurathAwakening={this.shubNiggurathAwakening}
                                />  
                :
                <CthulhuSheet       ancient={this.props.ancient}
                                    isLoadDone={this.state.isLoadDone} 
                                    ancientCardFlipped={this.state.ancientCardFlipped} 
                                    flipCardSheet={this.flipCardSheet}
                                    sheetCardCthulhuCounter={this.state.sheetCardCthulhuCounter} 
                                    sheetCardCthulhuCounterDecrement={this.sheetCardCthulhuCounterDecrement} 
                                    sheetCardCthulhuCounterIncrement={this.sheetCardCthulhuCounterIncrement}
                                />}
                <div className='ancientMysteryMythosLvlChar'>
                    <div className='ancientMysteryLvlChar'>
                        {this.props.ancient === 'Azathoth'?
                        <AzathothMystery        ancient={this.props.ancient}
                                                characters={this.state.characters}
                                                popping={this.state.popping} 
                                                isLoadDone={this.state.isLoadDone} 
                                                prevMysteryNo={this.state.prevMysteryNo}
                                                isMystery1Active={this.state.isMystery1Active}
                                                isMystery2Active={this.state.isMystery2Active}
                                                isMystery3Active={this.state.isMystery3Active}
                                                isMystery4Active={this.state.isMystery4Active}
                                                mysteryCounter={this.state.mysteryCounter}
                                                ancientCardFlipped={this.state.ancientCardFlipped}
                                                victory={this.state.victory}
                                                chooseMystery={this.chooseMystery}
                                                canPop={this.canPop}
                                                discardMysteryDeck={this.discardMysteryDeck}
                                                mysteryDecrement={this.mysteryDecrement}
                                                mysteryIncrementFull={this.mysteryIncrementFull}
                                                mysteryIncrementHalf={this.mysteryIncrementHalf}
                                                mysteryDeck={this.mysteryDeck}
                                                mysteryDone={this.mysteryDone}
                                                mysteryDoneFinal={this.mysteryDoneFinal}
                                            />
                        :this.props.ancient === 'YogSothoth'?
                        <YogSothothMystery      ancient={this.props.ancient}
                                                characters={this.state.characters}
                                                popping={this.state.popping} 
                                                isLoadDone={this.state.isLoadDone} 
                                                prevMysteryNo={this.state.prevMysteryNo}
                                                isMystery1Active={this.state.isMystery1Active}
                                                isMystery2Active={this.state.isMystery2Active}
                                                isMystery3Active={this.state.isMystery3Active}
                                                isMystery4Active={this.state.isMystery4Active}
                                                mysteryCounter={this.state.mysteryCounter}
                                                ancientCardFlipped={this.state.ancientCardFlipped}
                                                victory={this.state.victory}
                                                monsterSlayed={this.state.monsterSlayed}
                                                chooseMystery={this.chooseMystery}
                                                canPop={this.canPop}
                                                discardMysteryDeck={this.discardMysteryDeck}
                                                mysteryDecrement={this.mysteryDecrement}
                                                mysteryIncrementFull={this.mysteryIncrementFull}
                                                mysteryIncrementHalf={this.mysteryIncrementHalf}
                                                mysteryDeck={this.mysteryDeck}
                                                mysteryDone={this.mysteryDone}
                                                mysteryDoneFinal={this.mysteryDoneFinal}
                                                mysteryDecrementMonster={this.mysteryDecrementMonster}
                                                mysteryIncrementMonster={this.mysteryIncrementMonster}
                                            />
                        :this.props.ancient === 'ShubNiggurath'?
                        <ShubNiggurathMystery   ancient={this.props.ancient}
                                                characters={this.state.characters}
                                                popping={this.state.popping} 
                                                isLoadDone={this.state.isLoadDone} 
                                                prevMysteryNo={this.state.prevMysteryNo}
                                                isMystery1Active={this.state.isMystery1Active}
                                                isMystery2Active={this.state.isMystery2Active}
                                                isMystery3Active={this.state.isMystery3Active}
                                                isMystery4Active={this.state.isMystery4Active}
                                                mysteryCounter={this.state.mysteryCounter}
                                                ancientCardFlipped={this.state.ancientCardFlipped}
                                                victory={this.state.victory}
                                                monsterSlayed={this.state.monsterSlayed}
                                                isShubNiggurathAwake={this.state.isShubNiggurathAwake}
                                                chooseMystery={this.chooseMystery}
                                                canPop={this.canPop}
                                                discardMysteryDeck={this.discardMysteryDeck}
                                                mysteryDecrement={this.mysteryDecrement}
                                                mysteryIncrementFull={this.mysteryIncrementFull}
                                                mysteryIncrementHalf={this.mysteryIncrementHalf}
                                                mysteryIncrementDouble={this.mysteryIncrementDouble}
                                                mysteryDeck={this.mysteryDeck}
                                                shubNiggurathAwakening={this.shubNiggurathAwakening}
                                                mysteryDone={this.mysteryDone}
                                                mysteryDoneFinal={this.mysteryDoneFinal}
                                                mysteryDecrementMonster={this.mysteryDecrementMonster}
                                                mysteryIncrementMonster={this.mysteryIncrementMonster}
                                            />
                        :
                        <CthulhuMystery         ancient={this.props.ancient}
                                                characters={this.state.characters}
                                                popping={this.state.popping} 
                                                isLoadDone={this.state.isLoadDone} 
                                                prevMysteryNo={this.state.prevMysteryNo}
                                                isMystery1Active={this.state.isMystery1Active}
                                                isMystery2Active={this.state.isMystery2Active}
                                                isMystery3Active={this.state.isMystery3Active}
                                                isMystery4Active={this.state.isMystery4Active}
                                                mysteryCounter={this.state.mysteryCounter}
                                                ancientCardFlipped={this.state.ancientCardFlipped}
                                                victory={this.state.victory}
                                                monsterSlayed={this.state.monsterSlayed}
                                                isCthulhuAwake={this.state.isCthulhuAwake}
                                                chooseMystery={this.chooseMystery}
                                                canPop={this.canPop}
                                                discardMysteryDeck={this.discardMysteryDeck}
                                                mysteryDecrement={this.mysteryDecrement}
                                                mysteryIncrementFull={this.mysteryIncrementFull}
                                                mysteryIncrementHalf={this.mysteryIncrementHalf}
                                                mysteryDeck={this.mysteryDeck}
                                                cthulhuAwakening={this.cthulhuAwakening}
                                                mysteryDone={this.mysteryDone}
                                                mysteryDecrementMonster={this.mysteryDecrementMonster}
                                                mysteryIncrementMonster={this.mysteryIncrementMonster}
                                            />}
                        <LvlChar level={this.state.level} characters={this.state.characters}/> 
                    </div>
                    <div className='ancientMythos'>
                        <div className='ancientMythosDiscard'>
                            {/* <p>{`prevMysteryNo:${this.state.prevMythosNo} mysteryNo:${this.state.mythosNo} mythosDeck:${this.mythosDeck} chosenMythos:${this.state.choosenMythos} discardMythosDeck:${this.discardMythosDeck}`}</p> */}
                            {this.state.prevMythosNo?
                            <Popup onOpen={this.state.mythosNo === undefined ? this.state.defeat : this.chooseMythos} contentStyle={{background:'none', border: 'transparent'}} trigger=
                            {<button className={this.state.mythosNo === undefined ? 'mythosDefeat' : this.state.isLoadDone ? 'mythos' : 'mythosStamp'}></button>}modal nested>
                            {close => (<div className='outerPopup'><div className='mythosFrontPopup' id={`Mythos${this.state.prevMythosNo}`}>
                            {
                            this.state.prevMythosNo === 'NY8'
                                ?<Popup onClose={() => close()} contentStyle={{background:'none', border: 'transparent'}} trigger=
                                {<button className='mythosCloseButton' onClick={() => close()}>X</button>}modal nested>
                                {close => (<div className='outerPopupMythos'>
                                    <div className='mythosPopUpMattYellow'>
                                        <div className='mythosPopUpYellowDivExpedition'>
                                            <div className='mythosPopUpTextDivExpedition'>
                                                <p className='mythosPopUpTextExpedition'>Aktywna Ekspedycja:</p>
                                            </div>
                                            <div className='mythosPopUpYellowExpedition'>
                                                <button className="tokenMythosPopUpExpedition" id={`tokenMythosPopUpExpedition${this.props.expeditionReverseShuffle}`}></button>
                                            </div>
                                            <button className='mythosPopUpYellowButton' onClick={() => {this.removeExpedition(); close()}}>Usunięcie Aktywnej Ekspedycji</button>
                                        </div>                    
                                    </div>
                                </div>)}
                                </Popup>:
                            this.state.prevMythosNo === 'HY1' && this.state.mythos1 !== 'blue' && this.state.mythos2 !== 'blue' && this.state.mythos3 !== 'blue' && this.state.mythos4 !== 'blue' && this.state.mythos5 !== 'blue' && this.state.mythos6 !== 'blue' 
                                ?<Popup onOpen={this.chooseRumor} contentStyle={{background:'none', border: 'transparent'}} trigger=
                                {<button className='mythosCloseButton'>X</button>} modal nested>
                                {close => (<div className='outerPopup'>
                                    <div className='mythosFrontPopup' id={`Mythos${this.state.rumorNo}`}>
                                        <button className='mythosCloseButton' onClick={() => close()}>X</button></div></div>)}
                                </Popup>:
                            this.state.prevMythosNo === 'HY5'
                                ?<Popup onClose={() => close()} contentStyle={{background:'none', border: 'transparent'}} trigger=
                                {<button className='mythosCloseButton'>X</button>}modal nested>
                                {close => (<div className='outerPopupMythos'>
                                    <div className='mythosPopUpMattYellow'>
                                        {this.discardMysteryDeck.length===0?<div className='mythosPopUpYellowDiv'>
                                            <div className='mythosPopUpTextDiv'>
                                                <p className='mythosPopUpText'>Żadna tajemnica nie została rozwiązana. <br></br>Zagłada postępuje o <span className='mythosPopUpTextNumber'>1</span>.</p>
                                            </div>
                                            <div className='mythosPopUpYellowCaseDiv'>
                                                <button className="tokenMythosPopUpDoom"></button>
                                                <h1 className='tokenMythosPopUpNumbersFont'> - 1</h1>
                                            </div>
                                            <button className='tokenMythosPopUpDone' onClick={() => close()}></button>
                                        </div>:null}  
                                        {this.discardMysteryDeck.length>0?<div className='mythosPopUpYellowDiv'>
                                            <button className='mythosPopUpYellowButton' onClick={() => {reverseMystery(); close()}}>Cofnięcie rozwiązanej tajemnicy</button>
                                            <button className='mythosPopUpYellowButton' onClick={() => close()}>Poświęcenie <span className='mythosPopUpTextNumberYellow'>{Math.ceil(this.state.characters/2)}</span> wskazówek</button>
                                        </div>:null}                      
                                    </div>
                                </div>)}
                                </Popup>
                                :<button className='mythosCloseButton' onClick={() => close()}>X</button>}
                            </div></div>)}
                            </Popup>:<button className='mythos'></button>}
                            <div className='ancientMythosDiscardButtonDiv'>
                                <Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                                    {this.discardMythosDeck.length!==0?<button className='discardButton' id='discardMythos'>ODRZUCONE</button>:null}modal nested>
                                    {close => (<div className='outerPopupDiscard'>
                                    <button className='encounterDiscardCloseButton' onClick={() => close()}>X</button>
                                    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                                        {this.discardMythosDeck.length>=1?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-1]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=2?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-2]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=3?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-3]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=4?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-4]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=5?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-5]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=6?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-6]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=7?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-7]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=8?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-8]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=9?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-9]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=10?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-10]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=11?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-11]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=12?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-12]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=13?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-13]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=14?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-14]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=15?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-15]}`}></div></SwiperSlide>:null}
                                        {this.discardMythosDeck.length>=16?<SwiperSlide><div className='encounterCardDiscard' id={`Mythos${this.discardMythosDeck[this.discardMythosDeck.length-16]}`}></div></SwiperSlide>:null}
                                    </Swiper>
                                    </div>)}
                                </Popup>
                            </div>
                        </div>
                        {this.state.mythos1 === 'green' || this.state.mythos1 === 'blue' ?<div>{ InteractiveCard1(choosenMythos) }</div>:null}
                        {this.state.mythos2 === 'green' || this.state.mythos2 === 'blue' ?<div>{ InteractiveCard2(choosenMythos) }</div>:null}
                        {this.state.mythos3 === 'green' || this.state.mythos3 === 'blue' ?<div>{ InteractiveCard3(choosenMythos) }</div>:null}
                        {this.state.mythos4 === 'green' || this.state.mythos4 === 'blue' ?<div>{ InteractiveCard4(choosenMythos) }</div>:null}
                        {this.state.mythos5 === 'green' || this.state.mythos5 === 'blue' ?<div>{ InteractiveCard5(choosenMythos) }</div>:null}
                        {this.state.mythos6 === 'green' || this.state.mythos6 === 'blue' ?<div>{ InteractiveCard6(choosenMythos) }</div>:null}
                    </div>
                </div>
            </div>
        )
    } 
}

export default AncientBoard;
