//functions
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

//Function: Update score.
function updateScore() {
  outScore.textContent = `${playerScore}:${botScore}`;
}

//Creating button references
const buttons = document.querySelectorAll("button");

const rockRef = buttons[0];
const paperRef = buttons[1];
const scissorsRef = buttons[2];

const outScore = document.querySelector(".score");
const outPlays = document.querySelector(".plays");
const outResult = document.querySelector(".result");

let playerScore = 0;
let botScore = 0;

rockRef.addEventListener("click", () => {
  return "rock";
})

paperRef.addEventListener("click", () => {
  return "paper";
})

scissorsRef.addEventListener("click", () => {
  return "scissors";
})



//Function: Who played what message.

//Function: Who won the round. 



