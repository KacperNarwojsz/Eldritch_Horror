import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import YogSothothMysteryCard1 from '../InteractiveCards/YogSothothMysteryCard1';
import YogSothothMysteryCard2 from '../InteractiveCards/YogSothothMysteryCard2';
import YogSothothMysteryCard3 from '../InteractiveCards/YogSothothMysteryCard3';
import YogSothothMysteryCard4 from '../InteractiveCards/YogSothothMysteryCard4';
import 'reactjs-popup/dist/index.css';
import './Components.css'

class YogSothothMystery extends Component {
    constructor({props, chooseMystery, canPop, discardMysteryDeck, mysteryDecrementHalfFull, mysteryIncrementFull, mysteryIncrementHalf, mysteryDeck, cthulhuAwakening, mysteryDone, mysteryDoneFinal, mysteryDecrementMonster, mysteryIncrementMonster}) {
        super(props);
        this.chooseMystery = chooseMystery
        this.canPop = canPop
        this.discardMysteryDeck = discardMysteryDeck
        this.mysteryDecrementHalfFull = mysteryDecrementHalfFull
        this.mysteryIncrementFull = mysteryIncrementFull
        this.mysteryIncrementHalf = mysteryIncrementHalf
        this.mysteryDeck = mysteryDeck
        this.cthulhuAwakening = cthulhuAwakening
        this.mysteryDone = mysteryDone
        this.mysteryDoneFinal = mysteryDoneFinal
        this.mysteryDecrementMonster = mysteryDecrementMonster
        this.mysteryIncrementMonster = mysteryIncrementMonster
    }

    render(){
        return (
            <div className='ancientMystery'>
                <div className='ancientMysteryDiscard'>
                    {this.props.popping?
                    <Popup onOpen={this.chooseMystery} onClose={this.canPop} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                    {<button className={this.props.isLoadDone ? 'ancientMysteryReverse' : 'ancientMysteryReverseStamp'} id={`${this.props.ancient}MysteryReverse`}></button>}modal nested>
                    {close => (<div className='outerPopup'><div className='ancientMysteryFrontPopup' id={`${this.props.ancient}MysteryFront${this.props.prevMysteryNo}`}><button className='mysteryCloseButton' onClick={() => close()}>X</button></div></div>)}
                    </Popup>:<button className='ancientMysteryReverse' id={`${this.props.ancient}MysteryReverse`}></button>}
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
                {this.props.isMystery1Active?<YogSothothMysteryCard1 characters={this.props.characters} mysteryDecrementHalfFull={this.mysteryDecrementHalfFull} mysteryCounter={this.props.mysteryCounter} mysteryIncrementFull={this.mysteryIncrementFull} key={this.props.ancientCardFlipped} mysteryDone={this.mysteryDeck.length === 0 ? (!this.props.ancientCardFlipped ? this.props.victory : this.mysteryDoneFinal) : this.mysteryDone}/>:null}
                {this.props.isMystery2Active?<YogSothothMysteryCard2 characters={this.props.characters} mysteryDecrementHalfFull={this.mysteryDecrementHalfFull} mysteryCounter={this.props.mysteryCounter} mysteryIncrementFull={this.mysteryIncrementFull} key={this.props.ancientCardFlipped} mysteryDone={this.mysteryDeck.length === 0 ? (!this.props.ancientCardFlipped ? this.props.victory : this.mysteryDoneFinal) : this.mysteryDone}/>:null}
                {this.props.isMystery3Active?<YogSothothMysteryCard3 characters={this.props.characters} mysteryDecrementHalfFull={this.mysteryDecrementHalfFull} mysteryCounter={this.props.mysteryCounter} mysteryIncrementHalf={this.mysteryIncrementHalf} key={this.props.ancientCardFlipped} mysteryDone={this.mysteryDeck.length === 0 ? (!this.props.ancientCardFlipped ? this.props.victory : this.mysteryDoneFinal) : this.mysteryDone}/>:null}
                {this.props.isMystery4Active?<YogSothothMysteryCard4 characters={this.props.characters} mysteryDecrementMonster={this.mysteryDecrementMonster} mysteryCounter={this.props.mysteryCounter} mysteryIncrementMonster={this.mysteryIncrementMonster} key={this.props.ancientCardFlipped} monsterSlayed={this.props.monsterSlayed} mysteryDone={this.mysteryDeck.length === 0 ? (!this.props.ancientCardFlipped ? this.props.victory : this.mysteryDoneFinal) : this.mysteryDone}/>:null}
            </div>
        )
    }
}

export default YogSothothMystery;