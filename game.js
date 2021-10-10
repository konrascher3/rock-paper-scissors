function game() {
  let round = Number("1");
  let playerScore = Number("");
  let computerScore = Number("");

  while (round <= 1) {
    function computerPlay() {
      // function computerPlay randomly returns the values
      // 'Rock', 'Paper' or 'Scissors', i.e. randomly select
      // a string value from a list of string values
      const options = ["rock", "paper", "scissors"];
      let random = Math.floor(Math.random() * options.length);
      let computerOption = options[random];
      return computerOption;
    }

    playRound();

    function playRound() {
      let playerOption = prompt(
        'Please type in: "Paper", "Rock", or "Scissors"'
      ).toLowerCase();
      let computerOption = computerPlay();

    //   console.log(computerOption);
    //   console.log(playerOption);
    //   console.log(`Current round: ${round}`);

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

    //   console.log(playerScore);
    //   console.log(computerScore);
    }
  }

  if (playerScore === computerScore) {
    alert(
      `What an exiting match!       Your score: ${playerScore}  Computer Score: ${computerScore}`
    );
  } else if (playerScore >= computerScore) {
    alert(
      `You Win!         Your score: ${playerScore}  Computer Score: ${computerScore}`
    );
  } else if (playerScore <= computerScore) {
    alert(
      `You Loose!       Your score: ${playerScore}  Computer Score: ${computerScore}`
    );
  }
}

game();
