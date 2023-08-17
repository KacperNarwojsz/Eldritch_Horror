import React, { Component } from 'react';
import "./InteractiveCards.css"

class CthulhuMysteryCard1 extends Component {
    constructor({ characters, mysteryDone, victory }) {
        super(); 
        this.state = {
            counter: 0,
            characters: characters,
            mysteryDone: mysteryDone,
            victory: victory,
        } 
    }

    counterIncrement = () => {
        if (this.state.counter !== this.state.characters) {
            this.setState ({counter: this.state.counter +1})
        }
    }

    counterDecrement = () => {
        if (this.state.counter !== 0) {
            this.setState ({counter: this.state.counter -1})
        }
    }

    render() {
        return (
                <div className="cthulhuMysteryFrontDiv">
                    <div>
                        <button className="cthulhuMysteryFront" id="CthulhuMysteryFront1"></button>
                    </div>
                    <div className="mysteryTokensDiv">
                        <div className="mysteryCounter">
                            <button className="tokenMysteryMinus" onClick={this.counterDecrement}></button>
                            <button className="tokenMysteryEldritch"></button>
                            <button className="tokenMysteryPlus" onClick={this.counterIncrement}></button>
                        </div>
                        {this.state.counter!==this.state.characters?<button className="tokenMysteryCounter">{`${this.state.counter}/${this.state.characters}`}</button>:null}
                        {this.state.counter===this.state.characters?<button className="tokenMysteryDone" onClick={this.state.mysteryDone}></button>:null}
        
                    </div>
                </div>

        )
    }
}
export default CthulhuMysteryCard1;