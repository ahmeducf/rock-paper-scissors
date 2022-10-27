const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const WIN = "win";
const LOSE = "lose";
const TIE = "tie";

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
  let playerRoundResult = LOSE;

  if (playerSelection === computerSelection) {
    playerRoundResult = TIE;
  } else if (
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === ROCK && computerSelection === SCISSORS) ||
    (playerSelection === SCISSORS && computerSelection === PAPER)
  ) {
    playerRoundResult = WIN;
  }

  return playerRoundResult;
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();

        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === WIN) {
            playerPoints++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        } else if (roundResult === LOSE) {
            computerPoints++;
            console.log(`You Lose! ${playerSelection} can't beat ${computerSelection}`);
        } else {
            console.log(`This Round is Tie!`);
        }
    }

    if (playerPoints > computerPoints) {
        console.log(`%c Congratulations, You Won the Game!!`, 'font-size: 24px; background: gold');
    } else if (playerPoints < computerPoints) {
        console.log(`%c Unfortunately, You Lost the Game!! :(`, 'font-size: 24px; background: red');
    } else {
        console.log(`%c The Game Ended up in Tie!!`, 'font-size: 24px; background: gray');
    }
}