function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  return prompt(`Enter 'rock', 'paper' or 'scissors':`);
}

let humanScore = 0;
let computerScore = 0;


//Rewrite into nested IF statements. 
function playRound(humanChoice, computerChoice) {
  //playerChoice > OR < OR == computerChoice
  //rock < paper
  if ((humanChoice == "rock" || humanChoice == "ROCK") && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock.");
    computerScore++;
  }
  // rock > scissors
  else if ((humanChoice == "rock" || humanChoice == "ROCK") && computerChoice == "scissors") {
    console.log("You win! Rock beats Scissors.");
    humanScore++;
  }
  // rock == rock
  else if ((humanChoice == "rock" || humanChoice == "ROCK") && computerChoice == "rock") {
    console.log("Tie! You both picked Rock.");
  }
  // paper > rock
  else if ((humanChoice == "paper" || humanChoice == "PAPER") && computerChoice == "rock") {
    console.log("You win! Paper beats Rock.");
    humanScore++;
  }
  // paper == paper
  else if ((humanChoice == "paper" || humanChoice == "PAPER") && computerChoice == "paper") {
    console.log("Tie! You both picked Paper.");
  }
  // paper < scissors
  else if ((humanChoice == "paper" || humanChoice == "PAPER") && computerChoice == "scissors") {
    console.log("You lose! Scissors beat Paper.");
    computerScore++;
  } 
  // scissors < rock
  else if ((humanChoice == "scissors" || humanChoice == "SCISSORS") && computerChoice == "rock") {
    console.log("You lose! Rock beats Scissors.");
    computerScore++;
  }
  // scissors > paper
  else if ((humanChoice == "scissors" || humanChoice == "SCISSORS") && computerChoice == "paper") {
    console.log("You win! Scissors beat paper.");
    humanScore++;
}
// scissors == scissors
else if ((humanChoice == "scissors" || humanChoice == "SCISSORS") && computerChoice == "scissors") {
  console.log("Tie! You both picked scissors.");
}
}

const humanChoices = ["rock", "ROCK", "paper", "PAPER", "scissors", "SCISSORS"];
const computerChoices = ["rock", "paper", "scissors"];

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`___New Round___`);
    console.log(`Player: ${humanChoices[i]}`);
    console.log(`Bot: ${computerChoices[j]}`);
    playRound(humanChoices[i], computerChoices[j]);
    console.log(`Score: ${humanScore}:${computerScore};`);
  }
}



