import React, { Component } from 'react';
import './Components.css'


class CthulhuBoard extends Component {
    constructor(props) {
        super(props); 
        // this.addActiveClass = this.addActiveClass.bind(this)
        this.state = {
            ancientCard: false,
        }
    }

    toggleCard = () => {
        this.setState ({ancientCard: true})
    }

    toogleCardBack = () => {
        this.setState ({ancientCard: false})
    }

    render() {
        return (
            <div className='ancientBoard'>
                <div className='cthulhuSheetCard'>
                    <button className='cthulhuSheet' id={this.state.ancientCard ? 'CthulhuSheetBack' : 'CthulhuSheetFront'}></button>
                    <div className='flipButtons'>
                        <button className='flipButtonFront' id='FlipButton' onClick={this.toogleCardBack}>Front</button>
                        <button className='flipButtonBack' id='FlipButton' onClick={this.toggleCard}>Back</button>
                    </div> 
                </div>
                <div className='ancientMysteryMythos'>
                    <div className='ancientMystery'>
                        <button className='cthulhuMystery'></button>
                        {/* <button className='cthulhuMystery' id='CthulhuMysteryFront'></button> */}
                    </div>
                    <div className='ancientMythos'>
                        <button className='mythos'></button>
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