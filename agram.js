//import * as _ from './underscore';

const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J','Q', 'K', 'A'];

const agramCards = [{suit: 'spades', rank: "A"}];
const agramCards2 = ['2', 'J', 'Q', 'K'];

class Player {
  constructor(deck){
    this.hand = deck.splice(0,5);
  }

  playCard(id){
    this.hand.splice(id,id);
  }
}



class Card {
  constructor(suit, rank){
    this.suit = suit;
    this.rank = rank;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    ranks.forEach((rank) => {
      return suits.forEach( suit => {
        return this.cards.push({
          suit: suit,
          rank: rank
        });
      });
    });
    this.playDeck = this.cards.filter( card => {
     return !((card.suit == agramCards[0].suit) && (card.rank == agramCards[0].rank));
   });
    agramCards2.forEach( rnk => {
      this.playDeck = this.playDeck.filter( card => card.rank != rnk);
    });
    this.playDeck = _.shuffle(this.playDeck);
  }
}

class Game{
  constructor(){
    this.deck = new Deck();
    this.player = new Player(this.deck.playDeck );
    console.log(this.player.hand);
    this.roundCard = "";
    this.playField = [];
  }
}



let game = new Game();
