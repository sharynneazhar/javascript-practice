// =============================================================================
// 1. Introduction: What is a Function?
// =============================================================================
// An Analogy: Think of a function like a recipe for cooking. If you want to
// bake a cake, you don't write the entire recipe over and over—you just refer
// to it each time you bake. Similarly, a function lets you write a task once,
// and you can use it again anytime you need it.
// =============================================================================


// =============================================================================
// 2. Defining a Function
// =============================================================================
function sayHello() {
  console.log('Hello, world!');
}

// This is an example of a simple function called `sayHello`.
// When we call this function, it will print 'Hello, world!' to the console.
// - The keyword `function` tells JavaScript we're creating a function.
// - The function's name is `sayHello`.
// - The parentheses `()` hold any parameters (we’ll get to that shortly).
// - The curly braces `{}` contain the block of code that runs when we call
//   the function.


// =============================================================================
// 3. Calling a Function
// =============================================================================
// Now, let's run the function to see what happens.
sayHello(); // Output: "Hello, world!"

// When we call `sayHello()` with the parentheses, it triggers the code inside
// the function to run, printing 'Hello, world!' to the console. Without the
// parentheses, the function just exists but doesn’t run.


// =============================================================================
// 4. Functions with Parameters
// =============================================================================
function greet(name) {
  console.log('Hello, ' + name + '!');
}

// This is a more dynamic function. It accepts a parameter, `name`, which
// allows us to greet someone by name.
greet('Alice'); // Output: "Hello, Alice!"
greet('Bob');   // Output: "Hello, Bob!"

// When we pass in arguments like 'Alice' or 'Bob', the function customizes the
// greeting based on the name provided.

// =============================================================================
// 5. Returning Values from Functions
// =============================================================================
// Sometimes, we want a function to give a result. This is a return value.
function add(a, b) {
  return a + b;
}

let sum = add(3, 4); // sum will be 7
console.log(sum);    // Output: 7

// In this example, `add(3, 4)` calculates the sum and returns the value 7.
// That value is stored in the `sum` variable and printed to the console.


// =============================================================================
// 6. Introduction to Event Listeners
// =============================================================================
// Now that we understand functions, let's move on to event listeners. These
// are what allow us to make our web pages interactive by responding to user
// actions—like clicks or key presses.


// =============================================================================
// 7. Event Listener Syntax
// =============================================================================
document.getElementById('red').addEventListener('click', function () {
  alert('You clicked the red button!');
});

// Here’s an example of an event listener. When the button with the ID 'red' is
// clicked, it will run the function to display an alert. Let’s break it down:
// - document.getElementById('red'):
//     - This gets the element with the ID 'red' (the button).
// - .addEventListener('click', ...):
//     - This attaches an event listener to listen for the 'click' event.
// - function() {...}:
//     - When the button is clicked, this function will run.

// =============================================================================
// 8. The Guessing Game: Step-by-Step Activity
// =============================================================================
// Now let’s put everything we’ve learned together! We’re going to create a
// color guessing game.

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

// Step 3: Add event listeners to each button
const redButton = document.getElementById('red');
redButton.addEventListener('click', function () {
  // Step 4: Check whether the guess is correct
  if (targetColor === 'red') {
    // Step 5: Return results based on condition
    resultDisplay.textContent = 'Correct! The color was red.';
    resultDisplay.style.color = 'red';
  } else {
    resultDisplay.textContent = `Wrong! Try again.`;
    resultDisplay.style.color = 'black';
  }
});

const greenButton = document.getElementById('green');
greenButton.addEventListener('click', function () {
  if (targetColor === 'green') {
    resultDisplay.textContent = 'Correct! The color was green.';
    resultDisplay.style.color = 'green';
  } else {
    resultDisplay.textContent = `Wrong! Try again.`;
    resultDisplay.style.color = 'black';
  }
});

const blueButton = document.getElementById('blue');
blueButton.addEventListener('click', function () {
  if (targetColor === 'blue') {
    resultDisplay.textContent = 'Correct! The color was blue.';
    resultDisplay.style.color = 'blue';
  } else {
    resultDisplay.textContent = `Wrong! Try again.`;
    resultDisplay.style.color = 'black';
  }
});

// =============================================================================
// 9. Transitioning to Reusable Functions
// =============================================================================
// Instead of writing the entire function inside the event listener every time,
// we can make our code more reusable by separating the function and calling it.

// Original Code
redButton.addEventListener('click', function () {
  if (targetColor === 'red') {
    resultDisplay.textContent = 'Correct! The color was red.';
    resultDisplay.style.color = 'red';
  } else {
    resultDisplay.textContent = `Wrong! Try again.`;
    resultDisplay.style.color = 'black';
  }
});

// This code works, but it's not very efficient. Instead of repeating this
// whole function for every button, let's refactor it by creating a reusable
// function.

// Refactored Code:
function checkGuess(color) {
  if (color === targetColor) {
    resultDisplay.textContent = `Correct! The color was ${targetColor}.`;
    resultDisplay.style.color = targetColor;
  } else {
    resultDisplay.textContent = `Wrong! Try again.`;
    resultDisplay.style.color = 'black';
  }
}

redButton.addEventListener('click', function () {
  checkGuess('red');
});

greenButton.addEventListener('click', function () {
  checkGuess('green');
});

blueButton.addEventListener('click', function () {
  checkGuess('blue');
});


// =============================================================================
// 10. Important Note on Event Listeners and Functions
// =============================================================================
// You might be tempted to write this:
document.getElementById('red').addEventListener('click', checkGuess('red'));

// But this won’t work as expected! Why? Because `checkGuess('red')` is being
// called immediately instead of waiting for the click event. We only want to
// pass the reference to the function so that it runs when the event happens.
// So, we need to wrap it inside an anonymous function like this:
document.getElementById('red').addEventListener('click', function () {
  checkGuess('red');
});
