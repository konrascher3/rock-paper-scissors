const button = document.querySelectorAll('button');
const playerScoreHTML = document.querySelector('.playerScore');
const computerScoreHTML = document.querySelector('.computerScore');

console.log(playerScoreHTML.textContent)
console.log(computerScoreHTML.textContent)


let round = Number("1");
let playerScore = Number("");
let computerScore = Number("");



for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', (event) => {
    playRound(event.target.value);
    // console.log(playerOption);
    
  })
} 

function computerPlay() {
  // function computerPlay randomly returns the values
  // 'Rock', 'Paper' or 'Scissors', i.e. randomly select
  // a string value from a list of string values
  const options = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * options.length);
  let computerOption = options[random];
  return computerOption;
}

function playRound(playerOption) { 
  let computerOption = computerPlay();

  console.log(computerOption);
  console.log(playerOption);
  console.log(`Current round: ${round}`);

  // Comparison logic
  if (playerOption === computerOption) {
    alert("Tie!");
  } else if (playerOption === "rock" && computerOption === "paper") {
    alert("You Loose! Paper beats Rock!");
    computerScore += 1;
  } else if (playerOption === "rock" && computerOption === "scissors") {
    alert("You Win! Rock beats Scissors!");
    playerScore += 1;
  } else if (playerOption === "scissors" && computerOption === "rock") {
    alert("You Loose! Rock beats Scissors!");
    computerScore += 1;
  } else if (playerOption === "paper" && computerOption === "rock") {
    alert("You Win! Paper beats Rock!");
    playerScore += 1;
  } else if (playerOption === "paper" && computerOption === "scissors") {
    alert("You Loose! Scissors beats Paper!");
    computerScore += 1;
  } else if (playerOption === "scissors" && computerOption === "paper") {
    alert("You Win! Scissors beats Paper!");
    playerScore += 1;
  }

  round += 1;

  computerScoreHTML.textContent = computerScore;
  playerScoreHTML.textContent = playerScore;


}


// if (playerScore === computerScore) {
// alert(
//   `What an exiting match!       Your score: ${playerScore}  Computer Score: ${computerScore}`
// );
// } else if (playerScore >= computerScore) {
// alert(
//   `You Win!         Your score: ${playerScore}  Computer Score: ${computerScore}`
// );
// } else if (playerScore <= computerScore) {
// alert(
//   `You Loose!       Your score: ${playerScore}  Computer Score: ${computerScore}`
// );
// }

