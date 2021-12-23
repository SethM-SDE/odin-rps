const rpsArray = ["rock", "paper", "scissors"];

const getRandomIndex = (max) => {
  return Math.floor(Math.random() * max);
}

const computerPlay = () => {
  const randIndex = getRandomIndex(rpsArray.length);
  return rpsArray[randIndex];
}

const getPlayerInput = () => {
  let playerInput;
  while (!rpsArray.includes(playerInput)) {
    playerInput = window.prompt("Rock, paper, or scissors?").toLowerCase();
  }
  return playerInput;
}

const playerSelection = getPlayerInput();
console.log(playerSelection);
const computerSelection = computerPlay();
console.log(computerSelection);

const playRound = (player, computer) => {
  const refresh = "Refresh to play again!"
  const winMessage = `You win! ${player} beats ${computer}! ${refresh}.`;
  const loseMessage = `You lose! ${computer} beats ${player}! ${refresh}.`;

  if (player === computer) {
    return `Its a tie! ${refresh}`
  }
  switch (player) {
    case "rock":
      return computer === "paper" ? loseMessage : winMessage;  
    case "paper":
      return computer === "scissors" ? loseMessage : winMessage;
    case "scissors":
      return computer === "rock" ? loseMessage : winMessage;
  }
}

console.log(playRound(playerSelection, computerSelection));