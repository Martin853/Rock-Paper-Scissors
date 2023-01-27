let answer;
const items = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return items[Math.floor(Math.random() * items.length)];
}

function playerSelection() {
  ans = prompt("Rock Paper Scissors...");
  ans = ans.toLowerCase();
  return ans;
}
