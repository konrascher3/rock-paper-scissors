const button = document.querySelectorAll('button');
const playerScoreHTML = document.querySelector('.playerScore');
const computerScoreHTML = document.querySelector('.computerScore');
const roundHTML = document.querySelector('.round');
const commentHTML = document.querySelector('.comment');


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
      commentHTML.textContent = "Tie!";
    } else if (playerOption === "rock" && computerOption === "paper") {
      commentHTML.textContent = "You Loose! Paper beats Rock!";
      computerScore += 1;
    } else if (playerOption === "rock" && computerOption === "scissors") {
      commentHTML.textContent = "You Win! Rock beats Scissors!";
      playerScore += 1;
    } else if (playerOption === "scissors" && computerOption === "rock") {
      commentHTML.textContent = "You Loose! Rock beats Scissors!";
      computerScore += 1;
    } else if (playerOption === "paper" && computerOption === "rock") {
      commentHTML.textContent = "You Win! Paper beats Rock!";
      playerScore += 1;
    } else if (playerOption === "paper" && computerOption === "scissors") {
      commentHTML.textContent = "You Loose! Scissors beats Paper!";
      computerScore += 1;
    } else if (playerOption === "scissors" && computerOption === "paper") {
      commentHTML.textContent = "You Win! Scissors beats Paper!";
      playerScore += 1;
    }

    function winnerText(playerScore, computerScore) {
      if (playerScore === computerScore) {
      commentHTML.textContent = (
        `What an exiting match!       Your score: ${playerScore}  Computer Score: ${computerScore}`
      );
      } else if (playerScore >= computerScore) {
      commentHTML.textContent = (
        `You Win!         Your score: ${playerScore}  Computer Score: ${computerScore}`
      );
      } else if (playerScore <= computerScore) {
      commentHTML.textContent = (
        `You Loose!       Your score: ${playerScore}  Computer Score: ${computerScore}`
      )};
    }

    round += 1;

    computerScoreHTML.textContent = computerScore;
    playerScoreHTML.textContent = playerScore;
    roundHTML.textContent = round;

    if (round === 5) {
      const currentRound = document.querySelector('.currentRound')
      currentRound.textContent = 'Last round!';
    }

    if (round === 6) {
      winnerText(playerScore, computerScore);
    }
  }



