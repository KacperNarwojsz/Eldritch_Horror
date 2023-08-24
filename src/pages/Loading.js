import React, { Component } from 'react';
import LoadingGif from '../pictures/Main/CthuluGif.gif'
// import GifLoader from 'react-gif-loader';

class Loading extends Component {
    render() {
        return (
            <div>
            {/* <GifLoader
                imageStyle={{marginTop: "10vw"}}
                loading={true}
                imageSrc="https://i.imgur.com/giHQnBp.gif"
                overlayBackground="rgba(0,0,0,0.5)"
            /> */}
            <h1 className='loadingText'>Ładowanie...</h1>
            <img src={LoadingGif} className="Loading_gif" alt="Loading_gif" />
            </div>
        );   
    }
}

export default Loading;