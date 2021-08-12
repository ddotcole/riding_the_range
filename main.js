var blessed = require('blessed');
let Deck = require('./modules/deck.js').Deck;

var screen = blessed.screen({
  smartCSR: true,
  title: 'Blackjack'
});

let deck =  new Deck();

let hand = {}

// Create cardTable
let cardTable = blessed.PokerCard({
  parent: screen,
  top: 18,
  left: 'center',
  width: '50%',
  height: '50%',
  border: {
    type: 'line'
  },
  style: {
    bg: 'green',
    hover: {
      border: {
          fg: 'yellow'
        },
    }
  }
})

const numOfCards = 5;

// Create players hand
for(i = 0; i < numOfCards; i++){
  
  // Create card
  hand[i] = blessed.PokerCard({
    parent: cardTable,
    bottom: 0,
    width: 9,
    height: 7,
    left: Math.floor((cardTable.width - numOfCards * 9) / 2) + i * 8,
    tags: true,
    border: {
      type: 'line',
      bg: 'green',
      fg: 'green'
    },
    style: {
      fg: 'black',
      bg: 'white',
      hover: {
        border: {
            fg: 'green'
          },
      }
    }
  })

  // Set event handlers
  hand[i].on('click', function() {
    this.setCard(deck.draw());
    screen.render();
  });

  // Draw inital cards
  hand[i].setCard(deck.draw());

  // Append new card to screen
  //screen.append(hand[i])
}

screen.render();

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
});