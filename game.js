function computerPlay() {
    // function computerPlay randomly returns the values
    // 'Rock', 'Paper' or 'Scissors', i.e. randomly select
    // a string value from a list of string values
    const options = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * options.length);
    const computerOption = options[random];

    return computerOption
}


function playRound(playerOption, computerOption) {
    /// Comparison logic
    if (playerOption === computerOption) {
        alert('Tie!')
    } else if (playerOption === 'rock' && computerOption === 'paper') {
        alert('You Loose! Paper beats Rock!');
    } else if (playerOption === 'paper' && computerOption === 'rock') {
        alert('You Win! Paper beats Rock!');
    } else if (playerOption === 'paper' && computerOption === 'scissors') {
        alert('You Loose! Scissors beats Paper!');
    } else if (playerOption === 'scissors' && computerOption === 'paper') {
        alert('You Win! Scissors beats Paper!');
    }
}

const playerOption = prompt('Please type in: "Paper", "Rock", or "Scissors"').toLowerCase();
const computerOption = computerPlay();
console.log(computerOption);


console.log(playRound(playerOption, computerOption));