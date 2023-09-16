const computerSelection = getComputerChoice();

function getComputerChoice(){
    let computerChoice = Math.random() * 3;
    computerChoice = Math.ceil(computerChoice);
    return computerChoice;
}
