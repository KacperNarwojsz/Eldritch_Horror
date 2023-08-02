import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './Components.css'


class EncountersCards extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            isLoadDone: false,
            americaDraw: 0,
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

    setAmericaDraw = (event) => {
        this.setState({ americaDraw: 2})
      }

    //   className={`encounterAmericaFront${americaDraw}`}



    render(americaDraw, setAmericaDraw, togglePopup, isOpen) {
        return (
        <div className='encounters'>
            <Popup contentStyle={{width: "15.9vw", height: "25vw", padding: 0, borderRadius: "0.4vw"}} trigger=
                {<button onClick={true} className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='America'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id='AmericaFront1'><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
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