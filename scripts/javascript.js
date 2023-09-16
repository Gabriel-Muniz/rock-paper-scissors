const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function getComputerChoice(){
    let computerChoice = Math.random() * 3;
    computerChoice = Math.ceil(computerChoice);
    return computerChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("Rock, paper or scissors? :");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}
console.log(playerSelection)