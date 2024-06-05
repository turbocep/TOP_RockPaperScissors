//functions
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

//Function: Update score.
function updateScore() {
  outScore.textContent = `${playerScore}:${botScore}`;
}

//Getting DOM references
const buttons = document.querySelectorAll("button");

const rockRef = buttons[0];
const paperRef = buttons[1];
const scissorsRef = buttons[2];

const outScore = document.querySelector(".score");
const outPlays = document.querySelector(".plays");
const outResult = document.querySelector(".result");

let playerScore = 0;
let botScore = 0;

let playerChoice;


//You input what the player and bot picked and it returns a string
//declaring who won. "bot", "player" and "tie" are the options.
function getWinner(playerChoice, botChoice) {
  if (playerChoice == botChoice) {
    return "tie";
  } else if (playerChoice == "rock") {
    if (botChoice == "paper") {
      return "bot";
    } else if (botChoice == "scissors") {
      return "player";
    }
  } else if (playerChoice == "paper") {
    if (botChoice == "rock") {
      return "player";
    } else if (botChoice == "scissors") {
      return "bot";
    }
  } else if (playerChoice == "scissors") {
    if (botChoice == "rock") {
      return "bot";
    } else if (botChoice == paper) {
      return "player";
    }
  }
}

function playRound(playerChoice) {
  const botChoice = getComputerChoice();
  const resultOfRound = getWinner(playerChoice, botChoice);

  if (resultOfRound == "bot") {
    botScore++;
    outResult.textContent = "You lost this round.";
  } else if (resultOfRound == "player") {
    playerScore++;
    outResult.textContent = "You won this round.";
  } else {
    outResult.textContent = "It's a tie!";
  }
}




//Function: Who played what message.







