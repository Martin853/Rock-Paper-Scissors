//Initialized the main variables
let gameOver = false;
let playerScore = 0;
let computerScore = 0;

//Computer Selection
const items = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return items[Math.floor(Math.random() * items.length)];
}

console.log(getComputerChoice());
