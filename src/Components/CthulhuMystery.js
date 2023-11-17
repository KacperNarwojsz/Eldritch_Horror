import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import CthulhuMysteryCard1 from '../InteractiveCards/CthulhuMysteryCard1';
import CthulhuMysteryCard2 from '../InteractiveCards/CthulhuMysteryCard2';
import CthulhuMysteryCard3 from '../InteractiveCards/CthulhuMysteryCard3';
import CthulhuMysteryCard4 from '../InteractiveCards/CthulhuMysteryCard4';
import CthulhuMysteryRise from '../InteractiveCards/CthulhuMysteryRise';
import 'reactjs-popup/dist/index.css';
import './Components.css'

class CthulhuMystery extends Component {
    constructor({props, chooseMystery, canPop, discardMysteryDeck, mysteryDecrement, mysteryIncrementFull, mysteryIncrementHalf, mysteryDeck, cthulhuAwakening, mysteryDone, mysteryDecrementMonster, mysteryIncrementMonster}) {
        super(props);
        this.chooseMystery = chooseMystery
        this.canPop = canPop
        this.discardMysteryDeck = discardMysteryDeck
        this.mysteryDecrement = mysteryDecrement
        this.mysteryIncrementFull = mysteryIncrementFull
        this.mysteryIncrementHalf = mysteryIncrementHalf
        this.mysteryDeck = mysteryDeck
        this.cthulhuAwakening = cthulhuAwakening
        this.mysteryDone = mysteryDone
        this.mysteryDecrementMonster = mysteryDecrementMonster
        this.mysteryIncrementMonster = mysteryIncrementMonster
    }

    render(){
        return (
            <div className='ancientMystery'>
                <div className='ancientMysteryDiscard'>
                    {this.props.popping?
                    <Popup onOpen={this.chooseMystery} onClose={this.canPop} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                    {<button className={this.props.isLoadDone ? 'ancientMysteryReverse' : 'ancientMysteryReverseStamp'} id={`${this.props.ancient}MysteryReverse`}><p className='mysteryCounterText'>Rozwiązano: {this.discardMysteryDeck.length}<span>/3</span></p></button>}modal nested>
                    {close => (<div className='outerPopup'><div className='ancientMysteryFrontPopup' id={`${this.props.ancient}MysteryFront${this.props.prevMysteryNo}`}><button className='mysteryCloseButton' onClick={() => close()}>X</button></div></div>)}
                    </Popup>:<button className='ancientMysteryReverse' id={`${this.props.ancient}MysteryReverse`}><p className='mysteryCounterText'>Rozwiązano: {this.discardMysteryDeck.length}<span>/3</span></p></button>}
                    <div className='ancientMysteryDiscardButtonDiv'>
                        <Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                            {this.discardMysteryDeck.length!==0?<button className='discardButton' id='discardMystery'>ODRZUCONE</button>:null}modal nested>
                            {close => (<div className='outerPopupDiscard'>
                            <button className='mysteryDiscardCloseButton' onClick={() => close()}>X</button>
                            <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper" id="swiperMystery">
                                {this.discardMysteryDeck.length>=1?<SwiperSlide><div className='mysteryCardDiscard' id={`${this.props.ancient}MysteryFront${this.discardMysteryDeck[this.discardMysteryDeck.length-1]}`}></div></SwiperSlide>:null}
                                {this.discardMysteryDeck.length>=2?<SwiperSlide><div className='mysteryCardDiscard' id={`${this.props.ancient}MysteryFront${this.discardMysteryDeck[this.discardMysteryDeck.length-2]}`}></div></SwiperSlide>:null}
                                {this.discardMysteryDeck.length>=3?<SwiperSlide><div className='mysteryCardDiscard' id={`${this.props.ancient}MysteryFront${this.discardMysteryDeck[this.discardMysteryDeck.length-3]}`}></div></SwiperSlide>:null}
                                {this.discardMysteryDeck.length>=4?<SwiperSlide><div className='mysteryCardDiscard' id={`${this.props.ancient}MysteryFront${this.discardMysteryDeck[this.discardMysteryDeck.length-4]}`}></div></SwiperSlide>:null}
                            </Swiper>
                            </div>)}
                        </Popup>
                    </div>
                </div>
                {this.props.isMystery1Active?<CthulhuMysteryCard1 characters={this.props.characters} mysteryDecrement={this.mysteryDecrement} mysteryCounter={this.props.mysteryCounter} mysteryIncrementFull={this.mysteryIncrementFull} key={this.props.ancientCardFlipped} mysteryDeck={this.mysteryDeck} victory={this.props.victory} ancientCardFlipped={this.props.ancientCardFlipped} mysteryDone={this.props.ancientCardFlipped && this.mysteryDeck.length === 0 ? this.cthulhuAwakening : this.mysteryDone}/>:null} 
                {this.props.isMystery2Active?<CthulhuMysteryCard2 characters={this.props.characters} mysteryDecrement={this.mysteryDecrement} mysteryCounter={this.props.mysteryCounter} mysteryIncrementHalf={this.mysteryIncrementHalf} key={this.props.ancientCardFlipped} mysteryDeck={this.mysteryDeck} victory={this.props.victory} ancientCardFlipped={this.props.ancientCardFlipped} mysteryDone={this.props.ancientCardFlipped && this.mysteryDeck.length === 0 ? this.cthulhuAwakening : this.mysteryDone}/>:null}
                {this.props.isMystery3Active?<CthulhuMysteryCard3 characters={this.props.characters} mysteryDecrement={this.mysteryDecrement} mysteryCounter={this.props.mysteryCounter} mysteryIncrementFull={this.mysteryIncrementFull} key={this.props.ancientCardFlipped} mysteryDeck={this.mysteryDeck} victory={this.props.victory} ancientCardFlipped={this.props.ancientCardFlipped} mysteryDone={this.props.ancientCardFlipped && this.mysteryDeck.length === 0 ? this.cthulhuAwakening : this.mysteryDone}/>:null}
                {this.props.isMystery4Active?<CthulhuMysteryCard4 characters={this.props.characters} mysteryDecrementMonster={this.mysteryDecrementMonster} mysteryCounter={this.props.mysteryCounter} mysteryIncrementMonster={this.mysteryIncrementMonster} key={this.props.ancientCardFlipped} monsterSlayed={this.props.monsterSlayed} mysteryDeck={this.mysteryDeck} victory={this.props.victory} ancientCardFlipped={this.props.ancientCardFlipped} mysteryDone={this.props.ancientCardFlipped && this.mysteryDeck.length === 0 ? this.cthulhuAwakening : this.mysteryDone}/>:null}
                {this.props.isCthulhuAwake?<CthulhuMysteryRise characters={this.props.characters} cthulhuSlayed={this.props.victory}/>:null}
            </div>
        )
    }
}

export default CthulhuMystery;