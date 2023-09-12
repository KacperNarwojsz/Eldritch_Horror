import React from 'react';
import "./InteractiveCards.css"

const CthulhuMysteryCard4 = ({ characters, mystery4Decrement, mysteryCounter, mystery4Increment, monsterSlayed, mysteryDone, }) => {

    return (
        <div className="cthulhuMysteryFrontDiv">
            <div>
                <figure className="cthulhuMysteryFront" id="CthulhuMysteryFront4" tabIndex="0"></figure>
            </div>
            <div>
                <div className="mysteryTokensMonsterDiv">
                    <button className="mysteryMonster" id={monsterSlayed?"TokenCthyllaSlayed":"TokenCthylla"}></button>
                    <div className="mysteryTokensMonster">
                        {mysteryCounter===characters+2?null:<button className="tokenMysteryKilling"></button>}
                        {mysteryCounter===characters+2?<button className="tokenMysteryMonsterDone" onClick={mysteryDone}></button>:null}
                    </div>
                </div>
                <div className='mysteryMonsterAddons'>
                <button className='mysteryMonsterTokenMinus' onClick={mystery4Decrement}></button>
                <button className='mysteryMonsterTokenHealth'></button>
                <button className='mysteryMonsterCounter'>{`${mysteryCounter}/${characters+2}`}</button>
                <button className='mysteryMonsterTokenPlus' onClick={mystery4Increment}></button>
                </div>
            </div>
        </div>
    )
}
export default CthulhuMysteryCard4;


// import React, { Component } from 'react';
// import "./InteractiveCards.css"

// class CthulhuMysteryCard4 extends Component {
//     constructor({ mysteryDone, characters }) {
//         super(); 
//         this.state = {
//             mysteryDone: mysteryDone,
//             monsterSlayed: false,
//             characters: characters,
//             counter: 0,
//         } 
//     }

//     counterIncrement = () => {
//         if (this.state.counter < this.state.characters+1) {
//             this.setState ({counter: this.state.counter +1})
//         } else if (this.state.counter === this.state.characters+1){
//             this.setState ({counter: this.state.counter +1})
//             this.setState ({monsterSlayed: true})
//         }
//     }

//     counterDecrement = () => {
//         if (this.state.counter !== 0) {
//             this.setState ({counter: this.state.counter -1})
//             this.setState ({monsterSlayed: false})
//         }
//     }

//     render() {
//         return (
//                 <div className="cthulhuMysteryFrontDiv">
//                     <div>
//                         <button className="cthulhuMysteryFront" id="CthulhuMysteryFront4"></button>
//                     </div>
//                     <div>
//                         <div className="mysteryTokensMonsterDiv">
//                             <button className="mysteryMonster" id={this.state.monsterSlayed?"TokenCthyllaSlayed":"TokenCthylla"}></button>
//                             <div className="mysteryTokensMonster">
//                                 {this.state.counter===this.state.characters+2?null:<button className="tokenMysteryKilling"></button>}
//                                 {this.state.counter===this.state.characters+2?<button className="tokenMysteryMonsterDone" onClick={this.state.mysteryDone}></button>:null}
//                             </div>
//                         </div>
//                         <div className='mysteryMonsterAddons'>
//                         <button className='mysteryMonsterTokenMinus' onClick={this.counterDecrement}></button>
//                         <button className='mysteryMonsterTokenHealth'></button>
//                         <button className='mysteryMonsterCounter'>{`${this.state.counter}/${this.state.characters+2}`}</button>
//                         <button className='mysteryMonsterTokenPlus' onClick={this.counterIncrement}></button>
//                         </div>
//                     </div>
//                 </div>
//         )
//     }
// }
// export default CthulhuMysteryCard4;