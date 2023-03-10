//Initialized The Main Variables
let gameOver = false;
let playerScore = 0;
let computerScore = 0;
const resultText = document.querySelector(".result-displayer");
const resultTextMain = document.querySelector(".result-text");
const restartDiv = document.querySelector(".restart");
const restartButton = document.querySelector(".restart-button");
const selectedDisplayer = document.querySelector("#selected-display");

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
  selectedDisplayer.textContent = "Choose Rock Paper or Scissors";
  restartDiv.style.display = "none";
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
        selectedDisplayer.textContent = "Player: Rock | Computer: Rock , Draw";
        break;
      case "paper":
        computerScore++;
        resultText.textContent =
          "Player " + playerScore + " | " + "Computer " + computerScore;
        selectedDisplayer.textContent =
          "Player: Rock | Computer: Paper , Computer Wins";
        break;
      case "scissors":
        playerScore++;
        resultText.textContent =
          "Player " + playerScore + " | " + "Computer " + computerScore;
        selectedDisplayer.textContent =
          "Player: Rock | Computer: Scissors , Player Wins";
    }
  }

  //Check If One Has Reached 5 Points
  if (playerScore == 5) {
    resultTextMain.textContent = "Player Won!";
    restart();
  }

  if (computerScore == 5) {
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
        selectedDisplayer.textContent =
          "Player: Paper | Computer: Rock , Player Wins";
        break;
      case "paper":
        resultText.textContent =
          "Player " + playerScore + " | " + "Computer " + computerScore;
        selectedDisplayer.textContent =
          "Player: Paper | Computer: Paper , Draw";
        break;
      case "scissors":
        computerScore++;
        resultText.textContent =
          "Player " + playerScore + " | " + "Computer " + computerScore;
        selectedDisplayer.textContent =
          "Player: Paper | Computer: Scissors , Computer Wins";
    }
  }

  //Check If One Has Reached 5 Points
  if (playerScore == 5) {
    resultTextMain.textContent = "Player Won!";
    restart();
  }

  if (computerScore == 5) {
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
        selectedDisplayer.textContent =
          "Player: Scissors | Computer: Rock , Computer Wins";
        break;
      case "paper":
        playerScore++;
        resultText.textContent =
          "Player " + playerScore + " | " + "Computer " + computerScore;
        selectedDisplayer.textContent =
          "Player: Scissors | Computer: Paper , Player Wins";
        break;
      case "scissors":
        resultText.textContent =
          "Player " + playerScore + " | " + "Computer " + computerScore;
        selectedDisplayer.textContent =
          "Player: Scissors | Computer: Scissors , Draw";
    }
  }

  //Check If One Has Reached 5 Points
  if (playerScore == 5) {
    resultTextMain.textContent = "Player Won!";
    restart();
  }

  if (computerScore == 5) {
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

// Responsive
document.addEventListener("DOMContentLoaded", changeIconsSize);

function changeIconsSize() {
  let query = window.matchMedia("(max-width: 450px)");

  if (query.matches) {
    let rock = document.querySelector(".fa-hand-back-fist");
    rock.classList.remove("fa-10x");
    rock.classList.add("fa-6x");

    let paper = document.querySelector(".fa-hand");
    paper.classList.remove("fa-10x");
    paper.classList.add("fa-6x");

    let scissors = document.querySelector(".fa-hand-scissors");
    scissors.classList.remove("fa-10x");
    scissors.classList.add("fa-6x");
  }
}
