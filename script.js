const ROCK_CHOICE = "rock";
const PAPER_CHOICE = "paper";
const SCISSORS_CHOICE = "scissors";

const PLAYER = "player";
const COMPUTER = "computer";
const TIE = "tie";

const POINTS_NEEDED_TO_WIN = 5;

let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
  let choices = [ROCK_CHOICE, PAPER_CHOICE, SCISSORS_CHOICE];
  let choice = Math.floor((Math.random() * 100) % 3);

  return choices[choice];
}

function determineWinner(playerSelection, computerSelection) {
  let roundWinner = COMPUTER
  if (playerSelection === computerSelection) {
    roundWinner = TIE;
  } else if (
    (playerSelection === PAPER_CHOICE && computerSelection === ROCK_CHOICE) ||
    (playerSelection === ROCK_CHOICE && computerSelection === SCISSORS_CHOICE) ||
    (playerSelection === SCISSORS_CHOICE && computerSelection === PAPER_CHOICE)
  ) {
    roundWinner = PLAYER;
  }

  return roundWinner;
}

function updateGameScore() {
  const playerScoreDiv = document.querySelector(`.player[data-player="user"] .total-game-points`);
  const computerScoreDiv = document.querySelector(`.player[data-player="computer"] .total-game-points`);

  playerScoreDiv.innerText = `Player: ${playerPoints}`;
  computerScoreDiv.innerText = `Computer: ${computerPoints}`;
}

function updateRoundChoices(playerSelection, computerSelection) {
  const choices = new Map();
  choices.set(ROCK_CHOICE, "✊");
  choices.set(PAPER_CHOICE, "✋");
  choices.set(SCISSORS_CHOICE, "✌");
 
  const playerChoiceDiv = document.querySelector(`.player[data-player="user"] .choice`);
  const computerChoiceDiv = document.querySelector(`.player[data-player="computer"] .choice`);

  playerChoiceDiv.innerText = choices.get(playerSelection);
  computerChoiceDiv.innerText = choices.get(computerSelection);
}

function updateRunningRoundMessage(roundWinner, playerSelection, computerSelection) {
  const h2 = document.querySelector(`.title h2`);
  const p = document.querySelector(`.title p`);
  if (roundWinner === TIE) {
    h2.innerText = `It's a tie!`;
    p.innerText = `${playerSelection} ties with ${computerSelection}`;
  } else if (roundWinner === PLAYER) {
    h2.innerText = `You won!`;
    p.innerText = `${playerSelection} beats ${computerSelection}`;
  } else {
    h2.innerText = `You lost!`;
    p.innerText = `${playerSelection} is beaten by ${computerSelection}`;
  }
}

function endGame(roundWinner) {
  const h2 = document.querySelector(`.title h2`);
  const p = document.querySelector(`.title p`);

  if (roundWinner === PLAYER) {
    h2.innerText = `You Won the Game!`;
  } else {
    h2.innerText = `You Lost the Game!`;
  }

  p.remove();
  playAgainButton.classList.add('display-button');
}

function playRound(e) {
  if (playerPoints >= POINTS_NEEDED_TO_WIN ||
    computerPoints >= POINTS_NEEDED_TO_WIN) {
      return;
  }

  const computerSelection = getComputerChoice();
  const playerSelection = e.target.getAttribute('data-weapon');  
  const roundWinner = determineWinner(playerSelection, computerSelection);

  updateRoundChoices(playerSelection, computerSelection);

  if (roundWinner === PLAYER) {
    playerPoints++;
    updateGameScore();

    if (playerPoints >= POINTS_NEEDED_TO_WIN) {
        endGame(roundWinner);
        return;
    }
  } else if (roundWinner === COMPUTER) {
    computerPoints++;
    updateGameScore();

    if (computerPoints >= POINTS_NEEDED_TO_WIN) {
      endGame();
      return;
    }
  }

  updateRunningRoundMessage(roundWinner, playerSelection, computerSelection);
}

const buttons = document.querySelectorAll(`.weapon`);
buttons.forEach(button => button.addEventListener('click', playRound));

const playAgainButton = document.querySelector(`.title button`);
playAgainButton.addEventListener('click', () => window.location.reload());