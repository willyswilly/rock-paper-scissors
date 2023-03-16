const moves = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0

// Function that returns a random move
function computerPlay() {
  return moves[Math.floor(Math.random() * moves.length)]
}

// Function that plays a round of the game
function playRound(playerSelection) {
  const computerSelection = computerPlay()

  if (playerSelection === computerSelection) {
    return "It's a tie!"
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++
    return `You win! ${playerSelection} beats ${computerSelection}.`
  } else {
    computerScore++
    return `You lose! ${computerSelection} beats ${playerSelection}.`
  }
}

// Function that displays the game results
function displayResults(result) {
  const resultsDiv = document.querySelector("#results")
  resultsDiv.textContent = result
  resultsDiv.insertAdjacentHTML(
    "afterend",
    `<p>Score: Player ${playerScore} - Computer ${computerScore}</p>`
  )
}

// Function that resets the game
function resetGame() {
  playerScore = 0
  computerScore = 0
  const resultsDiv = document.querySelector("#results")
  resultsDiv.innerHTML = ""
}

// Add event listeners to the buttons
const buttons = document.querySelectorAll(".btn")
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id
    const result = playRound(playerSelection)
    displayResults(result)

    if (playerScore === 5 || computerScore === 5) {
      if (playerScore > computerScore) {
        alert(`You win! Final score: ${playerScore}-${computerScore}`)
      } else if (computerScore > playerScore) {
        alert(`You lose! Final score: ${computerScore}-${playerScore}`)
      } else {
        alert(`It's a tie! Final score: ${playerScore}-${computerScore}`)
      }
      resetGame()
    }
  })
})
