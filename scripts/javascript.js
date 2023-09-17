let computerSelection, playerSelection, winner;

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
function calcResult(playerSelection, computerSelection) {
    return playerSelection - computerSelection;
}

function getWinner(result){
    if(result == -2 || result == 1){
        return "victory";
    }else if(result == 2 || result == -1){
        return "lose";
    }else{
        return "draw";
    }
}

function convertChoice(respectiveChoice){
    switch(respectiveChoice){
        case 1:
            return "rock";
        break;
        case 2:
            return "paper";
        break;
        case 3:
            return "scissors";
        break;
    }
}

function test() {
    computerSelection = getComputerChoice();
    do {
        playerSelection = getPlayerChoice();
    } while (checkPlayerChoice(playerSelection));
    playerSelection = convertPlayerChoice(playerSelection);
    winner = getWinner(calcResult(playerSelection, computerSelection));
    console.log(`Rock = 1, Paper = 2, Scissors = 3\nComputer: ${computerSelection}\nPlayer: ${playerSelection}`)
    console.log(winner)
    console.log(`You choose ${convertChoice(playerSelection)}\nThe computer choose ${convertChoice(computerSelection)}`
    )
}

test()