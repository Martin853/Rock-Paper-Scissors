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

//Restart The Game
function restartTheGame() {
  gameOver = false;
  playerScore = 0;
  computerScore = 0;
  resultTextMain.textContent = "Result";
  resultText.textContent =
    "Player " + playerScore + " | " + "Computer " + computerScore;
  restartButton.style.display = "none";
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

//Paper Function
function paper() {
  // Check Who Won
  if (gameOver === false) {
    let computerSelection = generateComputerChoice();
    switch (computerSelection) {
      case "rock":
        playerScore++;
        resultText.textContent =
          "Player " + playerScore + " | " + "Computer " + computerScore;
        break;
      case "paper":
        resultText.textContent =
          "Player " + playerScore + " | " + "Computer " + computerScore;
        break;
      case "scissors":
        computerScore++;
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

//Scissors Function
function scissors() {
  // Check Who Won
  if (gameOver === false) {
    let computerSelection = generateComputerChoice();
    switch (computerSelection) {
      case "rock":
        computerScore++;
        resultText.textContent =
          "Player " + playerScore + " | " + "Computer " + computerScore;
        break;
      case "paper":
        playerScore++;
        resultText.textContent =
          "Player " + playerScore + " | " + "Computer " + computerScore;
        break;
      case "scissors":
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

// Rock Clicked Function
const paperDiv = document.querySelector(".paper");
paperDiv.addEventListener("click", paper);

// Rock Clicked Function
const scissorsDiv = document.querySelector(".scissors");
scissorsDiv.addEventListener("click", scissors);

//Restart Button
restartButton.addEventListener("click", restartTheGame);
