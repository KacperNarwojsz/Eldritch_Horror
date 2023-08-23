import React, { Component } from 'react';
import GifLoader from 'react-gif-loader';

class Loading extends Component {
    render() {
        return (
            <div>
            <GifLoader
                imageStyle={{marginTop: "10vw"}}
                loading={true}
                imageSrc="https://i.imgur.com/giHQnBp.gif"
                overlayBackground="rgba(0,0,0,0.5)"
            />
            <h1 className='loadingText'>Ładowanie...</h1>
            </div>
        );   
    }
}

export default Loading;