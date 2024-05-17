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
  //playerChoice > OR < OR == computerChoice
  //rock < paper
  if ((humanChoice == "rock" || humanChoice == "ROCK") && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock.");
    computerScore++;
  }
  // rock > scissors
  else if ((humanChoice == "rock" || humanChoice == "ROCK") && computerChoice == "scissors") {
    console.log("You win! Paper beats Scissors.");
    humanScore++;
  }
  // rock == rock
  else if ((humanChoice == "rock" || humanChoice == "ROCK") && computerChoice == "rock") {
    console.log("Tie! You both picked rock.");
  }
}

playRound("rock", "rock");

console.log(humanScore);
console.log(computerScore);

