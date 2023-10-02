const CthulhuMythosDeck = function(deck) {
        const random = Math.floor(Math.random() * deck.length);
        const card = deck.splice(random, 1)[0];
        return card 
    };

export default CthulhuMythosDeck;



