//Initialized The Main Variables
let gameOver = false;
let playerScore = 0;
let computerScore = 0;

//Computer Selection
const items = ["rock", "paper", "scissors"];

function generateComputerChoice() {
  return items[Math.floor(Math.random() * items.length)];
}

//Restart
function restart() {
  gameOver = false;
  playerScore = 0;
  computerScore = 0;
}

function rock() {
  if (gameOver === false) {
    let computerSelection = generateComputerChoice();
    switch (computerSelection) {
      case "rock":
        console.log("Draw");
        break;
      case "paper":
        console.log("Lost");
        break;
      case "scissors":
        console.log("Won");
    }
  }
}

// Rock Clicked Function
const rockDiv = document.querySelector(".rock");
rockDiv.addEventListener("click", rock);
