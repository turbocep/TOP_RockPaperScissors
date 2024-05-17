function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  return prompt(`Enter 'rock', 'paper' or 'scissors':`);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if ((humanChoice == "rock" || humanChoice == "ROCK") && (computerChoice == "paper" || computerChoice == "PAPER")) {
    console.log("You lose! Paper beats Rock.");
    computerScore++;
  }
}

