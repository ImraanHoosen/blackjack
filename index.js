// Get references to the HTML elements that will display the game state
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Initialize an array to store the cards
let cards = []

// Initialize the sum of the cards to 0
let sum = 0

// Initialize variables to track the game state
// hasBlackJack is true if the player has a blackjack
// isAlive is true if the player is still in the game
// message is the text that will be displayed in the message element
let hasBlackJack = false
let isAlive = false
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
 *
 * This function is called when the game starts, and is responsible for
 * initializing the game state and rendering the initial game state.
 */
function startGame() {
    // Set the game state to alive
    isAlive = true

    // Generate two random cards to start the game
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    // Set the initial game state
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    // Render the initial game state
    renderGame()
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
 * 
 * If the game is still alive and the player hasn't got a blackjack, a new card is drawn and added to the game state.
 * The game state is then re-rendered.
 */
function newCard() {

    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()        // Generate a new card value
        sum += card                        // Add the new card value to the current sum
        cards.push(card)                    // Add the new card to the array of cards
        renderGame()                        // Re-render the game based on the updated game state
    }
}
   


