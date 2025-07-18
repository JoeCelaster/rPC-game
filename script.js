// Copilot Prompt: Define the possible game options
const options = ['Rock', 'Paper', 'Scissors'];

// Copilot Prompt: Set initial game state
let round = 1;
let playerScore = 0;
let computerScore = 0;

// Copilot Prompt: Get references to all necessary DOM elements
const roundDisplay = document.getElementById('roundNumber');
const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const outcomeDisplay = document.getElementById('outcome');
const playBtn = document.getElementById('playBtn');
const resetBtn = document.getElementById('resetBtn');

// Copilot Prompt: Add click event listener to the "Play" button
playBtn.addEventListener('click', () => {
    // Copilot Prompt: Prevent playing more than 5 rounds
    if (round > 5) return;

    // Copilot Prompt: Get the player's selected move from radio buttons
    const selected = document.querySelector('input[name="move"]:checked');
    if (!selected) {
        alert('Please choose Rock, Paper, or Scissors!');
        return;
    }
    const playerMove = selected.value;
    const computerMove = getComputerMove();

    // Copilot Prompt: Determine winner for this round
    const result = getResult(playerMove, computerMove);

    // Copilot Prompt: Update display values for current round
    playerChoiceDisplay.textContent = playerMove;
    computerChoiceDisplay.textContent = computerMove;
    outcomeDisplay.textContent = result;

    round++;
    roundDisplay.textContent = round <= 5 ? round : 5;

    // Copilot Prompt: After 5 rounds, show the final outcome and disable play button
    if (round > 5) {
        const finalMessage = getFinalResult();
        outcomeDisplay.textContent += ' | ' + finalMessage;
        playBtn.disabled = true;
    }
});

// Copilot Prompt: Add click event listener to reset the game
resetBtn.addEventListener('click', () => {
    // Copilot Prompt: Reset round and scores
    round = 1;
    playerScore = 0;
    computerScore = 0;

    // Copilot Prompt: Reset UI elements
    roundDisplay.textContent = '1';
    playerChoiceDisplay.textContent = '-';
    computerChoiceDisplay.textContent = '-';
    outcomeDisplay.textContent = '-';
    playBtn.disabled = false;

    // Copilot Prompt: Clear selected radio buttons
    document.querySelectorAll('input[name="move"]').forEach(input => input.checked = false);
});

// Copilot Prompt: Generate computer's random move
function getComputerMove() {
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}

// Copilot Prompt: Compare player and computer move to return result message
function getResult(player, computer) {
    if (player === computer) {
        return `It's a tie! You both chose ${player}`;
    }

    if (
        (player === 'Rock' && computer === 'Scissors') ||
        (player === 'Paper' && computer === 'Rock') ||
        (player === 'Scissors' && computer === 'Paper')
    ) {
        playerScore++;
        return `You win! ${player} beats ${computer}`;
    } else {
        computerScore++;
        return `Computer wins! ${computer} beats ${player}`;
    }
}

// Copilot Prompt: Determine the final result message based on score
function getFinalResult() {
    if (playerScore > computerScore) {
        return '🎉 Congratulations! You won the game!';
    } else if (computerScore > playerScore) {
        return '💻 Game Over! Computer won the game.';
    } else {
        return '⚖️ It\'s a tie! Try again.';
    }
}
// Copilot Prompt: Initialize the game state on page load
document.addEventListener('DOMContentLoaded', () => {
    roundDisplay.textContent = '1';
    playerChoiceDisplay.textContent = '-';
    computerChoiceDisplay.textContent = '-';
    outcomeDisplay.textContent = '-';
});
// Copilot Prompt: Ensure the play button is enabled on page load
playBtn.disabled = false;
// Copilot Prompt: Ensure the reset button is enabled on page load
resetBtn.disabled = false;