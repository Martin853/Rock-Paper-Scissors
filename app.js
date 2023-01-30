//Initialized The Main Variables
let gameOver = false;
let playerScore = 0;
let computerScore = 0;
const resultText = document.querySelector(".result-displayer");

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

//Rock Function
function rock() {
  // Check Who Won
  if (gameOver === false) {
    let computerSelection = generateComputerChoice();
    switch (computerSelection) {
      case "rock":
        resultText.textContent =
          "Player " + playerScore + " | " + "Computer " + computerScore;
        break;
      case "paper":
        computerScore++;
        resultText.textContent =
          "Player " + playerScore + " | " + "Computer " + computerScore;
        break;
      case "scissors":
        playerScore++;
        resultText.textContent =
          "Player " + playerScore + " | " + "Computer " + computerScore;
    }
  }

  //Check If One Has Reached 5 Points
  if (playerScore === 5) {
    console.log("Player Won");
    restart();
  } else if (computerScore === 5) {
    console.log("Computer Won");
    restart();
  }
}

// Rock Clicked Function
const rockDiv = document.querySelector(".rock");
rockDiv.addEventListener("click", rock);
