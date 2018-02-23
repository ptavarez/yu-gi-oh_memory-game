'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'https://i.imgur.com/lGUjGtW.jpg'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'https://i.imgur.com/lGUjGtW.jpg'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'https://i.imgur.com/fxKYsDp.jpg'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'https://i.imgur.com/fxKYsDp.jpg'
  }
]
const cardsInPlay = []

const checkForMatch = function () {
  // this.setAttribute('src', cards[cardId].cardImage)
  console.log(this)
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('You found a match!')
    } else {
      alert('Sorry, try again')
    }
  }
}

const flipCard = function () {
  const cardId = this.getAttribute('data-id')
  console.log('User flipped ' + cards[cardId].rank)
  console.log(cards[cardId].suit)
  console.log(cards[cardId].cardImage)
  cardsInPlay.push(cards[cardId].rank)
  this.setAttribute('src', cards[cardId].cardImage)
  checkForMatch()
}

const createBoard = function () {
  for (let i = 0; i < cards.length; i++) {
    const cardElement = document.createElement('img')
    cardElement.setAttribute('src', 'https://i.imgur.com/5jUk3hV.png')
    cardElement.setAttribute('data-id', i)
    cardElement.addEventListener('click', flipCard)
    document.getElementById('game-board').appendChild(cardElement)
  }
}
createBoard()

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
