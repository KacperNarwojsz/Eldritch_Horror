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
                        <button className="cthulhuMysteryFront"></button>
                    </div>
                    <div className="tokensDiv">
                        {this.state.counter!==this.state.characters?<button className="tokenCounter">{`${this.state.counter}/${this.state.characters}`}</button>:null}
                        {this.state.counter===this.state.characters?<button className="tokenDone" onClick={this.state.mysteryDone}></button>:null}
                        {this.state.counter===this.state.characters?<button className="tokenDone" onClick={this.state.victory}></button>:null}
                        <div className="tokens">
                            <button onClick={this.counterDecrement} className="tokenBack"></button>
                            <button onClick={this.counterIncrement} className="tokenEldritch"></button>
                            <button onClick={this.counterDecrement} className="tokenBack"></button>
                        </div>
                        
                    </div>
                </div>

        )
    }
}
export default CthulhuMysteryCard1;