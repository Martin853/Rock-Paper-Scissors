// let answer;
// const items = ["rock", "paper", "scissors"];

// function getComputerChoice() {
//   return items[Math.floor(Math.random() * items.length)];
// }

// function playerSelection() {
//   ans = prompt("Rock Paper Scissors...");
//   ans = ans.toLowerCase();

//   if (ans === "rock") {
//     return ans;
//   } else {
//     playerSelection();
//   }

//   if (ans === "paper") {
//     return ans;
//   } else {
//     playerSelection();
//   }

//   if (ans === "scissors") {
//     return ans;
//   } else {
//     playerSelection();
//   }
// }

// function playRound() {
//   let computerChoice = getComputerChoice();
//   let playerChoice = playerSelection();

//   if (playerChoice == computerChoice) {
//     return "Draw";
//   }

//   if (playerChoice == "rock" && computerChoice == "scissors") {
//     return "Won";
//   }

//   if (playerChoice == "rock" && computerChoice == "paper") {
//     return "Lost";
//   }

//   if (playerChoice == "paper" && computerChoice == "rock") {
//     return "Won";
//   }

//   if (playerChoice == "paper" && computerChoice == "scissors") {
//     return "Lost";
//   }

//   if (playerChoice == "scissors" && computerChoice == "paper") {
//     return "Won";
//   }

//   if (playerChoice == "scissors" && computerChoice == "rock") {
//     return "Lost";
//   }
// }

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     let gameResult = playRound();

//     if (gameResult == "Won") {
//       alert("You Won!");
//       playerScore++;
//     } else if (gameResult == "Lost") {
//       alert("You Lost!");
//       computerScore++;
//     } else if (gameResult == "Draw") {
//       alert("You drew!");
//     }
//   }

//   if (playerScore > computerScore) {
//     alert("You won the game!");
//     alert("Player " + playerScore + " | Computer" + computerScore);
//   } else if (playerScore < computerScore) {
//     alert("You lost the game!");
//     alert("Player " + playerScore + " | Computer" + computerScore);
//   } else if (playerScore == computerScore) {
//     alert("You drew the game!");
//     alert("Player " + playerScore + " | Computer" + computerScore);
//   }
// }

// while (true == true) {
//   game();
// }
