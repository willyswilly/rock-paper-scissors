function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) // 0, 1, 2
  if (choice === 0) {
    return "rock"
  } else if (choice === 1) {
    return "paper"
  } else {
    return "scissors"
  }
}

const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase()

function playRound(playerSelection, computerSelection) {
  console.log("Player chooses " + playerSelection)
  console.log("Computer chooses " + computerSelection)

  if (playerSelection === "rock" && computerSelection === "paper") {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "You Tied! Rock = Rock"
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "You Tied! Paper = Paper"
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "You Tied! Scissors = Scissons"
  }
}
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))
