import React, { Component } from 'react';
import "./InteractiveCards.css"



class CthulhuMysteryCard4 extends Component {
    constructor({ mysteryDone, victory }) {
        super(); 
        this.state = {
            mysteryDone: mysteryDone,
            victory: victory,
            monsterSlayed: false,
        } 
    }

    slayMonster = () => {
            this.setState ({monsterSlayed: true})
    }

    undoSlayMonster = () => {
        this.setState ({monsterSlayed: false})
    }

    render() {
        return (
                <div className="cthulhuMysteryFrontDiv">
                    <div>
                        <button className="cthulhuMysteryFront" id="CthulhuMysteryFront4"></button>
                    </div>
                    <div className="tokensMonsterDiv">
                        <button className="monster" id={this.state.monsterSlayed?"TokenCthyllaSlayed":"TokenCthylla"} onClick={this.state.monsterSlayed?this.undoSlayMonster:null}></button>
                        <div className="tokensMonster">
                            {this.state.monsterSlayed?null:<button className="tokenKilling" onClick={this.slayMonster}></button>}
                            {this.state.monsterSlayed?<button className="tokenMonsterDone" onClick={this.state.mysteryDone}></button>:null}
                        </div>
                    </div>
                </div>

        )
    }
}
export default CthulhuMysteryCard4;