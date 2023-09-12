import React from 'react';
import "./InteractiveCards.css"

const CthulhuMysteryCard3 = ({ characters, mystery123Decrement, mysteryCounter, mystery13Increment, mysteryDone, }) => {

    return (
        <div className="cthulhuMysteryFrontDiv">
            <div>
                <figure className="cthulhuMysteryFront" id="CthulhuMysteryFront3"tabIndex="0"></figure>
            </div>
            <div className="mysteryTokensDiv">
                <div className="mysteryCounter">
                    <button className="tokenMysteryMinus" onClick={mystery123Decrement}></button>
                    <button className="tokenMysteryClue"></button>
                    <button className="tokenMysteryPlus" onClick={mystery13Increment}></button>
                </div>
                {mysteryCounter!==characters?<button className="tokenMysteryCounter">{`${mysteryCounter}/${characters}`}</button>:null}
                {mysteryCounter===characters?<button className="tokenMysteryDone" onClick={mysteryDone}></button>:null}
            </div>
        </div>
    )
}
export default CthulhuMysteryCard3;

// import React, { Component } from 'react';
// import "./InteractiveCards.css"

// class CthulhuMysteryCard3 extends Component {
//     constructor({ characters, mysteryDone }) {
//         super(); 
//         this.state = {
//             counter: 0,
//             characters: characters,
//             mysteryDone: mysteryDone,
//         } 
//     }

//     counterIncrement = () => {
//         if (this.state.counter !== this.state.characters) {
//             this.setState ({counter: this.state.counter +1})
//         }
//     }

//     counterDecrement = () => {
//         if (this.state.counter !== 0) {
//             this.setState ({counter: this.state.counter -1})
//         }
//     }

//     render() {
//         return (
//                 <div className="cthulhuMysteryFrontDiv">
//                     <div>
//                         <button className="cthulhuMysteryFront" id="CthulhuMysteryFront3"></button>
//                     </div>
//                     <div className="mysteryTokensDiv">
//                         <div className="mysteryCounter">
//                             <button className="tokenMysteryMinus" onClick={this.counterDecrement}></button>
//                             <button className="tokenMysteryClue"></button>
//                             <button className="tokenMysteryPlus" onClick={this.counterIncrement}></button>
//                         </div>
//                         {this.state.counter!==this.state.characters?<button className="tokenMysteryCounter">{`${this.state.counter}/${this.state.characters}`}</button>:null}
//                         {this.state.counter===this.state.characters?<button className="tokenMysteryDone" onClick={this.state.mysteryDone}></button>:null}
//                     </div>
//                 </div>

//         )
//     }
// }
// export default CthulhuMysteryCard3;