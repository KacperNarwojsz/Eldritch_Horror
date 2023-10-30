import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import AzathothMysteryCard1 from '../InteractiveCards/AzathothMysteryCard1';
import AzathothMysteryCard2 from '../InteractiveCards/AzathothMysteryCard2';
import AzathothMysteryCard3 from '../InteractiveCards/AzathothMysteryCard3';
import AzathothMysteryCard4 from '../InteractiveCards/AzathothMysteryCard4';
import 'reactjs-popup/dist/index.css';
import './Components.css'

class CthulhuMystery extends Component {
    constructor({props, chooseMystery, canPop, discardMysteryDeck, mysteryDecrementHalfFull, mysteryIncrementFull, mysteryIncrementHalf, mysteryDeck, mysteryDone}) {
        super(props);
        this.chooseMystery = chooseMystery
        this.canPop = canPop
        this.discardMysteryDeck = discardMysteryDeck
        this.mysteryDecrementHalfFull = mysteryDecrementHalfFull
        this.mysteryIncrementFull = mysteryIncrementFull
        this.mysteryIncrementHalf = mysteryIncrementHalf
        this.mysteryDeck = mysteryDeck
        this.mysteryDone = mysteryDone
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
                            {this.props.isMystery1Active?<AzathothMysteryCard1 characters={this.props.characters} mysteryDecrementHalfFull={this.mysteryDecrementHalfFull} mysteryCounter={this.props.mysteryCounter} mysteryIncrementHalf={this.mysteryIncrementHalf} key={this.props.ancientCardFlipped} mysteryDone={this.mysteryDeck.length === 0 ? this.props.victory : this.mysteryDone}/>:null}
                            {this.props.isMystery2Active?<AzathothMysteryCard2 characters={this.props.characters} mysteryDecrementHalfFull={this.mysteryDecrementHalfFull} mysteryCounter={this.props.mysteryCounter} mysteryIncrementHalf={this.mysteryIncrementHalf} key={this.props.ancientCardFlipped} mysteryDone={this.mysteryDeck.length === 0 ? this.props.victory : this.mysteryDone}/>:null}
                            {this.props.isMystery3Active?<AzathothMysteryCard3 characters={this.props.characters} mysteryDecrementHalfFull={this.mysteryDecrementHalfFull} mysteryCounter={this.props.mysteryCounter} mysteryIncrementHalf={this.mysteryIncrementHalf} key={this.props.ancientCardFlipped} mysteryDone={this.mysteryDeck.length === 0 ? this.props.victory : this.mysteryDone}/>:null}
                            {this.props.isMystery4Active?<AzathothMysteryCard4 characters={this.props.characters} mysteryDecrementHalfFull={this.mysteryDecrementHalfFull} mysteryCounter={this.props.mysteryCounter} mysteryIncrementFull={this.mysteryIncrementFull} key={this.props.ancientCardFlipped} mysteryDone={this.mysteryDeck.length === 0 ? this.props.victory : this.mysteryDone}/>:null}
                        </div>
        )
    }
}

export default CthulhuMystery;