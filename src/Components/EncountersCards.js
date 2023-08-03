import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './Components.css'
import random from 'random'


class EncountersCards extends Component {
    constructor(props) {
        super(props); 
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

    handleClick = () => {
        this.setState({americaShuffle: random.int(1,8)});
    }

    render() {
        return (
        <div className='encounters'>
            <Popup onOpen={this.handleClick} contentStyle={{width: "15.9vw", height: "25vw", background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='America'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`AmericaFront${this.state.americaShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='Europe'></button>
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