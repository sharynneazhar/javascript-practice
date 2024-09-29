// =============================================================================
// The Guessing Game: Step-by-Step Activity
// =============================================================================

// 1. Create a few colored buttons (red, green, blue).
// 2. JavaScript will randomly choose a target color.
// 3. The user clicks a button to guess the color.
// 4. Use a function to check whether the guess is correct.
// 5. Show the result on the screen.

// Step 1: Define the target color (randomly pick from three colors)
// Hardcoded for now, but you can change manually
const targetColor = 'blue';

// Step 2: Get the result display element
const resultDisplay = document.getElementById('result');

// Step 3: Create function to check whether the guess is correct
function checkGuess(color) {
  if (color === targetColor) {
    resultDisplay.textContent = `Correct! The color was ${targetColor}.`;
    resultDisplay.style.color = targetColor;
  } else {
    resultDisplay.textContent = `Wrong! Try again.`;
    resultDisplay.style.color = 'black';
  }
}

// Step 4: Add event listeners to each button and call the checkGuess function
const redButton = document.getElementById('red');
redButton.addEventListener('click', function () {
  checkGuess('red');
});

const greenButton = document.getElementById('green');
greenButton.addEventListener('click', function () {
  checkGuess('green');
});

const blueButton = document.getElementById('blue');
blueButton.addEventListener('click', function () {
  checkGuess('blue');
});
