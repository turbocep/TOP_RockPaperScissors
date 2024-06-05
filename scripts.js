//functions
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

//Function: Update score.
function updateScore() {
  outScore.textContent = `${playerScore}:${botScore}`;
}

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

//Plays one round. This includes getting bot's choice, comparing it
//to player's and deciding the result. The score is incremented and
//the result is printed out. 
function playRound(playerChoice) {
  const botChoice = getComputerChoice();
  const resultOfRound = getWinner(playerChoice, botChoice);
  outPlays.textContent = `You played ${playerChoice}. The Bot played ${botChoice}.`

  if (resultOfRound == "bot") {
    botScore++;
    outResult.textContent = "You lost this round.";
  } else if (resultOfRound == "player") {
    playerScore++;
    outResult.textContent = "You won this round.";
  } else {
    outResult.textContent = "It's a tie!";
  }
  updateScore();
  if (playerScore == 5 || botScore == 5) {
    alert("over");
  }
}

function endGame() {
  rockRef.removeEventListener("click", () => {
    playRound("rock");
  })
  paperRef.removeEventListener("click", () => {
    playRound("paper");
  })
  scissorsRef.removeEventListener("click", () => {
    playRound("scissors");
  })

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

//Adding event listeners for buttons. 
rockRef.addEventListener("click", () => {
  playRound("rock");
})
paperRef.addEventListener("click", () => {
  playRound("paper");
})
scissorsRef.addEventListener("click", () => {
  playRound("scissors");
})










