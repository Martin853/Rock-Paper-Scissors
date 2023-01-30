//Initialized The Main Variables
let gameOver = false;
let playerScore = 0;
let computerScore = 0;
const resultText = document.querySelector(".result-displayer");
const resultTextMain = document.querySelector(".result-text");
const restartDiv = document.querySelector(".restart");
const restartButton = document.querySelector(".restart-button");

//Computer Selection
const items = ["rock", "paper", "scissors"];

function generateComputerChoice() {
  return items[Math.floor(Math.random() * items.length)];
}

//Restart
function restart() {
  restartDiv.style.display = "block";
  gameOver = true;
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
    resultTextMain.textContent = "Player Won!";
    restart();
  } else if (computerScore === 5) {
    resultTextMain.textContent = "Computer Won!";
    restart();
  }
}

// Rock Clicked Function
const rockDiv = document.querySelector(".rock");
rockDiv.addEventListener("click", rock);
