import React, { Component } from 'react';
import "./InteractiveCards.css"



class CthulhuMysteryCard2 extends Component {
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
        if (this.state.counter !== Math.ceil(this.state.characters/2)) {
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
                        <button className="cthulhuMysteryFront" id="CthulhuMysteryFront2"></button>
                    </div>
                    <div className="tokensDiv">
                        <div className="counter">
                            <button className="tokenMinus" onClick={this.counterDecrement}></button>
                            <button className="tokenEldritch"></button>
                            <button className="tokenPlus" onClick={this.counterIncrement}></button>
                        </div>
                        {this.state.counter!==Math.ceil(this.state.characters/2)?<button className="tokenCounter">{`${this.state.counter}/${Math.ceil(this.state.characters/2)}`}</button>:null}
                        {this.state.counter===Math.ceil(this.state.characters/2)?<button className="tokenDone" onClick={this.state.mysteryDone}></button>:null}
                    </div>
                </div>

        )
    }
}
export default CthulhuMysteryCard2;