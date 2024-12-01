let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let firstCard = 10
let secondCard =4
let cards =[firstCard, secondCard]  //array created to display the cards
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


/**
 * Starts the game and initializes the rendering of the game state.
 */
function startGame() {
    renderGame()             // Render the initial game state
}


/**
 * Renders the game based on the current game state.
 */
function renderGame() {
    sumEl.textContent = "Sum : " + sum
    cardsEl.textContent = "Cards : "    
    for (let i = 0; i < cards.length; i++) {        //array used to display the cards 
    cardsEl.textContent += cards[i] + " "
    }

    // Check if the player has blackjack or has gone over
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent=message
}


/**
 * Handles the logic for drawing a new card.
 */
function newCard() {
    let card = 7
    sum += card
    cards.push(card)       // Push feathure used to push new (third card) card to the "cardsEl.textContent" to display in the game. 
    renderGame()
}


