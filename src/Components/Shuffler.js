const chooseRandom = function(deck) {
        const random = Math.floor(Math.random() * deck.length);
        const card = deck.splice(random, 1)[0];
        return card 
    };

export default chooseRandom;

// const chooseRandom = function(deck) {
//     if(deck.length !==1) {
//         const random = Math.floor(Math.random() * deck.length);
//         const card = deck.splice(random, 1)[0];
//         return card
//      } else {
//         // let shuffleDeck = [70,71,72];
//         const random = Math.floor(Math.random() * deck.length);
//         const card = deck.splice(random, 1)[0];
//         return card
//      } 
// };
// export default chooseRandom;


