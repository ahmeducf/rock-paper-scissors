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

// playRound function gets player and computer selections and returns
// whether the player win, lose or the game resulted in a tie.
function playRound(playerSelection, computerSelection) {
  let playerRoundResult = "lose";

  if (playerSelection === computerSelection) {
    playerRoundResult = "tie";
  } else if (
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === ROCK && computerSelection === SCISSORS) ||
    (playerSelection === SCISSORS && computerSelection === PAPER)
  ) {
    playerRoundResult = "win";
  }

  return playerRoundResult;
}
