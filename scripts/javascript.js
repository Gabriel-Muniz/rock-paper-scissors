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
function convertPlayerChoice(playerSelection) {
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
        default:
            return alert("Something went wrong on the conversion");
    }
}

function test() {
    computerSelection = getComputerChoice();
    do {
        playerSelection = getPlayerChoice();
    } while (checkPlayerChoice(playerSelection));
    console.log(convertPlayerChoice(playerSelection));

}

test()