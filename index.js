// Create player object with name and chips
let player = {
  name: "Imraan",
  chips: 300,
};

// Get references to HTML elements
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

// Initialize game state
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

/**
 * Returns a random card value between 1 and 13.
 */
function getRandomCard() {
  // Generate random number between 1 and 13
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  // Replace card values 11, 12, and 13 with 10
  if (randomNumber > 10) {
    return 10;
  }
  // Replace Ace (1) with 11
  else if (randomNumber === 1) {
    return 11;
  }
  // Return random number as card value
  else {
    return randomNumber;
  }
}

/**
 * Starts the game.
 */
function startGame() {
  // Set game state to alive
  isAlive = true;

  // Generate two random cards to start the game
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  // Set initial game state
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  // Render initial game state
  renderGame();
}

/**
 * Renders the game based on the current game state.
 */
function renderGame() {
  // Render sum of cards
  sumEl.textContent = "Sum : " + sum;

  // Render cards
  cardsEl.textContent = "Cards : ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  // Determine game outcome based on sum of cards
  if (sum < 21) {
    // Offer player to draw a new card
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    // Player hits Blackjack
    message = "You've got Blackjack!";
    hasBlackJack = true;
    player.chips += 50; // Award chips for Blackjack
  } else {
    // Player goes bust
    message = "You're out of the game!";
    isAlive = false;
    player.chips -= 50; // Deduct chips for bust
  }

  // Check if player has run out of chips
  if (player.chips <= 0) {
    // Update player's display to show zero chips
    playerEl.textContent = player.name + ": $" + 0;
    // Set the game message to inform player they are out of chips
    message = "You're out of chips! Game Over";
    // Set game state to not alive, indicating game over
    isAlive = false;
  }

  messageEl.textContent = message;
  // Render player's name and chips
  playerEl.textContent = player.name + ": $" + player.chips;
}

/**
 * Handles the logic for drawing a new card.
 */
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    // Generate a new card value
    let card = getRandomCard();

    // Add new card value to sum
    sum += card;

    // Add new card to array of cards
    cards.push(card);

    // Re-render the game based on the updated game state
    renderGame();
  }
}
