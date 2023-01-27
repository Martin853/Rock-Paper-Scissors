let answer;
const items = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return items[Math.floor(Math.random() * items.length)];
}

function playerSelection() {
  ans = prompt("Rock Paper Scissors...");
  ans = ans.toLowerCase();
  return ans;
}

function playRound() {
  let computerChoice = getComputerChoice();
  let playerChoice = playerSelection();

  if (playerChoice == computerChoice) {
    return console.log(
      "You drew!" +
        " | " +
        "Player Choice: " +
        playerChoice +
        " , " +
        "Computer Choice: " +
        computerChoice
    );
  }

  if (playerChoice == "rock" && computerChoice == "scissors") {
    return console.log(
      "You Won!" +
        " | " +
        "Player Choice: " +
        playerChoice +
        " , " +
        "Computer Choice: " +
        computerChoice
    );
  }

  if (playerChoice == "rock" && computerChoice == "paper") {
    return console.log(
      "You lost!" +
        " | " +
        "Player Choice: " +
        playerChoice +
        " , " +
        "Computer Choice: " +
        computerChoice
    );
  }

  if (playerChoice == "paper" && computerChoice == "scissors") {
    return console.log(
      "You lost!" +
        " | " +
        "Player Choice: " +
        playerChoice +
        " , " +
        "Computer Choice: " +
        computerChoice
    );
  }

  if (playerChoice == "paper" && computerChoice == "rock") {
    return console.log(
      "You Won!" +
        " | " +
        "Player Choice: " +
        playerChoice +
        " , " +
        "Computer Choice: " +
        computerChoice
    );
  }

  if (playerChoice == "scissors" && computerChoice == "paper") {
    return console.log(
      "You Won!" +
        " | " +
        "Player Choice: " +
        playerChoice +
        " , " +
        "Computer Choice: " +
        computerChoice
    );
  }

  if (playerChoice == "scissors" && computerChoice == "rock") {
    return console.log(
      "You Lost!" +
        " | " +
        "Player Choice: " +
        playerChoice +
        " , " +
        "Computer Choice: " +
        computerChoice
    );
  }
}

playRound();
