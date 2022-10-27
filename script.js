const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getComputerChoice() {
  let choice = Math.floor((Math.random() * 100) % 3);
  let choices = [ROCK, PAPER, SCISSORS];

  return choices[choice];
}

function getPlayerChoice() {
  let choice = prompt("choose between Rock, Paper, or Scissors");
  choice = choice.toLowerCase();

  while (choice !== ROCK && choice !== PAPER && choice !== SCISSORS) {
    choice = prompt("Wrong Choice!! choose between Rock, Paper, or Scissors");
    choice = choice.toLowerCase();
  }

  return choice;
}