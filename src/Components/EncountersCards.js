import React, { Component } from 'react';
import './Components.css'


class EncountersCards extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            isLoadDone: false,
        }
        this.timer()
    }

    timer() {
        setInterval(() => {
          this.setState({isLoadDone: true})
        }, 8000)
    }

    render() {
        return (
        <div className='encounters'>
            <button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='America'></button>
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