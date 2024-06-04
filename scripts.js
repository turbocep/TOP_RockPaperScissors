//functions
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

//Creating button references
const buttons = document.querySelectorAll("button");

const rockRef = buttons[0];
const paperRef = buttons[1];
const scissorsRef = buttons[2];

const outScore = document.querySelector(".score");
const outPlays = document.querySelector(".plays");
const outResult = document.querySelector(".result");



