import React, { Component } from 'react';
import "./InteractiveCards.css"

class CthulhuMysteryRise extends Component {
    constructor({ cthulhuSlayed, characters }) {
        super(); 
        this.state = {
            cthulhuSlayed: cthulhuSlayed,
            monsterSlayed: false,
            characters: characters,
            counter: 0,
        } 
    }

    counterIncrement = () => {
        if (this.state.counter < this.state.characters+2) {
            this.setState ({counter: this.state.counter +1})
        } else if (this.state.counter === this.state.characters+2){
            this.setState ({counter: this.state.counter +1})
            this.setState ({monsterSlayed: true})
        }
    }

    counterDecrement = () => {
        if (this.state.counter !== 0) {
            this.setState ({counter: this.state.counter -1})
            this.setState ({monsterSlayed: false})
        }
    }

    render() {
        return (
                <div className="cthulhuMysteryFrontDiv">
                    <div>
                        <div className="mysteryTokensMonsterDiv">
                            <button className="mysteryMonster" id={this.state.monsterSlayed?"TokenCthulhuSlayed":"TokenCthulhu"}></button>
                            <div className="mysteryTokensMonster">
                                {this.state.counter===this.state.characters+3?null:<button className="tokenMysteryKilling"></button>}
                                {this.state.counter===this.state.characters+3?<button className="tokenMysteryMonsterDone" onClick={this.state.cthulhuSlayed}></button>:null}
                            </div>
                        </div>
                        <div className='mysteryMonsterAddons'>
                        <button className='mysteryMonsterTokenMinus' onClick={this.counterDecrement}></button>
                        <button className='mysteryMonsterTokenHealth'></button>
                        <button className='mysteryMonsterCounter'>{`${this.state.counter}/${this.state.characters+3}`}</button>
                        <button className='mysteryMonsterTokenPlus' onClick={this.counterIncrement}></button>
                        </div>
                    </div>
                </div>
        )
    }
}
export default CthulhuMysteryRise;