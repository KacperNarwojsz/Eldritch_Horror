import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './Components.css'
import chooseRandom from './Shuffler';

class EncountersCards extends Component {
    constructor(props) {
        super(props); 
        this.shuffleDeckAmerica = [1,2,3,4,5,6,7,8]
        this.shuffleDeckEuropa = [1,2,3,4,5,6,7,8]
        this.shuffleDeckAsiaAustralia = [1,2,3,4,5,6,7,8]
        this.shuffleDeckGeneral = [1,2,3,4,5,6,7,8,9,10,11,12]
        this.shuffleDeckOtherWorld = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
        // this.shuffleDeckExpedition
        this.shuffleDeckCthulhuResearch = [1,2,3,4,5,6,7,8]
        this.shuffleDeckCthulhuSpecial = [1,2,3,4,5,6]

        this.state = {
            isLoadDone: false,
            americaShuffle: 0,
        }
    }

    componentDidMount() {
        this.timer()
    }

    timer() {
        setInterval(() => {
          this.setState({isLoadDone: true})
        }, 6000)
    }

    handleAmericaShuffle = () => {
        this.setState({americaShuffle: chooseRandom(this.shuffleDeckAmerica)});
        if (this.shuffleDeckAmerica.length < 1) {
            this.shuffleDeckAmerica = [1,2,3,4,5,6,7,8]
        }
    }

    handleEuropaShuffle = () => {
        this.setState({americaShuffle: chooseRandom(this.shuffleDeckEuropa)});
        if (this.shuffleDeckEuropa.length < 1) {
            this.shuffleDeckEuropa = [1,2,3,4,5,6,7,8]
        }
    }

    handleAsiaAustraliaShuffle = () => {
        this.setState({americaShuffle: chooseRandom(this.shuffleDeckAsiaAustralia)});
        if (this.shuffleDeckAsiaAustralia.length < 1) {
            this.shuffleDeckAsiaAustralia = [1,2,3,4,5,6,7,8]
        }
    }

    handleGeneralShuffle = () => {
        this.setState({americaShuffle: chooseRandom(this.shuffleDeckGeneral)});
        if (this.shuffleDeckGeneral.length < 1) {
            this.shuffleDeckGeneral = [1,2,3,4,5,6,7,8,9,10,11,12]
        }
    }

    handleOtherWorldShuffle = () => {
        this.setState({americaShuffle: chooseRandom(this.shuffleDeckOtherWorld)});
        if (this.shuffleDeckOtherWorld.length < 1) {
            this.shuffleDeckOtherWorld = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
        }
    }

    // handleExpeditionShuffle = () => {
    //     this.setState({americaShuffle: chooseRandom(this.shuffleDeckExpedition)});
    //     if (this.shuffleDeckExpedition.length < 1) {
    //         this.shuffleDeckExpedition = [...]
    //     }
    // }

    handleCthulhuResearchShuffle = () => {
        this.setState({americaShuffle: chooseRandom(this.shuffleDeckCthulhuResearch)});
        if (this.shuffleDeckCthulhuResearch.length < 1) {
            this.shuffleDeckCthulhuResearch = [1,2,3,4,5,6,7,8]
        }
    }

    handleCthulhuSpecialShuffle = () => {
        this.setState({americaShuffle: chooseRandom(this.shuffleDeckCthulhuSpecial)});
        if (this.shuffleDeckCthulhuSpecial.length < 1) {
            this.shuffleDeckCthulhuSpecial = [1,2,3,4,5,6]
        }
    }

    render() {
        return (
        <div className='encounters'>
            <Popup onOpen={this.handleAmericaShuffle} contentStyle={{width: "15.9vw", height: "25vw", background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='America'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`AmericaFront${this.state.americaShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <button onClick={this.handleAmericaShuffle} className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='Europe'></button>
            <button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='AsiaAustralia'></button>
            <button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='General'></button>
            <button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='OtherWorld'></button>
            <button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='Expedition'></button>
            <button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='Ancient_research'></button>
            <button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='Ancient_special'></button>
        </div>
        )
    }
}

export default EncountersCards;