function getComputerChoice(){
    let computerSelection = Math.random() * 3;
    computerSelection = Math.ceil(computerSelection);
    return computerSelection;
}

function getPlayerChoice(){
    let playerSelection = prompt("Rock, paper or scissors? :");
    playerSelection = playerSelection.toLowerCase();
    checkPlayerChoice(playerSelection);
    switch(playerSelection){
        case "rock":
            return 1;
        break;
        case "paper":
            return 2;
        break;
        case "scissors":
            return 3;
        break;
    }
}