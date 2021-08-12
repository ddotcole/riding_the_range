/*
Deck of Cards

This module defines a deck of cards and the methods
to use it.
*/

class Deck {
    constructor() {
        this.shuffle();
    }
    shuffle() {
        // Initalize pointer with -1 to deal with pre-increment before drawing card in draw()
        this.pointer = -1;

        // Define a standard deck
        let deck = ["2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC","AC",
                    "2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD","AD",
                    "2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH","AH",
                    "2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS","AS"
        ];

        // Fisher-Yates array shuffle algorithm            
        let currentIndex = deck.length,  randomIndex;
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
        }      
        
        // Replace cards with new shuffled deck 
        this.cards =  deck;
    }
    draw() {
        if(this.pointer >= this.cards.length - 1){
            this.shuffle();
        }
        this.pointer++
        return this.cards[this.pointer]
    }
}

module.exports = {
    Deck: Deck
}