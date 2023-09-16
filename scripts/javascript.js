let computerSelection, playerSelection;

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
function checkPlayerChoice(playerSelection) {
    if(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
        alert("Select a valid option!");
        return true;
    }else{
        return false;
    }
}

function test() {
    computerSelection = getComputerChoice();
    do {
        playerSelection = getPlayerChoice();
    } while (checkPlayerChoice(playerSelection));
    console.log(playerSelection);
}
for (let i = 0; i < 5; i++) {
    test()
}