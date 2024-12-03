// Select the HTML elements for the message, sum, and cards
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// Generate two random cards and store them in an array
let firstCard = getRandomCard()
let secondCard =getRandomCard()
let cards =[firstCard, secondCard]  //array created to display the cards
// Calculate the total sum of the cards
let sum = firstCard + secondCard
// Initialize the game state variables
let hasBlackJack = false
let isAlive = true
let message = ""


/**
 * Returns a random card value between 1 and 13, simulating the drawing of a card from a deck.
 *
 * The function generates a random number between 1 and 13 (inclusive) and returns the result as a card value.
 * Card values 11, 12, and 13 are replaced with a value of 10, and the Ace (1) is replaced with a value of 11.
 *
 * @returns {number} A random card value between 1 and 13.
 */
function getRandomCard() {
    // Generate a random number between 1 and 13 (inclusive)
    let randomNumber = Math.floor(Math.random() * 13) + 1

    // Replace card values 11, 12, and 13 with a value of 10
    if (randomNumber > 10) {
        return 10
    } 
    // Replace the Ace (1) with a value of 11
    else if (randomNumber === 1) {
        return 11
    } 
    // Return the random number as the card value
    else {
        return randomNumber
    }
}


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
    let card = getRandomCard()
    sum += card
    cards.push(card)       // Push feathure used to push new (third card) card to the "cardsEl.textContent" to display in the game. 
    renderGame()
}


