let computerSelection, playerSelection, winner;
const roundsNumber = 5;

game()

function game() {
    let winCounts = loseCounts = tieCounts = 0;
    let roundsLeft = roundsNumber;
    for(let i = 0; i < roundsNumber; i++){
        switch(round()){
            case "win":
                winCounts += 1;
            break;
            case "lose":
                loseCounts += 1;
            break;
            case "ties":
                tieCounts += 1;
            break;
        }
        roundsLeft -= 1;
        if(winCounts > roundsLeft && winCounts > loseCounts){
            console.log(` \nYou won the game with ${winCounts} wins against ${loseCounts} loses and ${tieCounts} ties!.`);
            break;
        }
    }
    if(loseCounts >= tieCounts && loseCounts > winCounts) {
        console.log(` \nYou lose the game with ${loseCounts} loses against ${winCounts} wins and ${tieCounts} ties!.`);
    }else if(winCounts == loseCounts && winCounts < tieCounts){
        console.log(`\nWell... that's embarassing, you guys tied...`)
    }
    console.log(winCounts, loseCounts, tieCounts)
}

function round() {
    computerSelection = getComputerChoice();

    do {
        playerSelection = getPlayerChoice();
    } while (checkPlayerChoice(playerSelection));

    playerSelection = convertPlayerChoice(playerSelection);
    winner = getWinner(calcResult(playerSelection, computerSelection));

    switch(winner){
        case "win":
            console.log(`You won this round! ${convertChoice(playerSelection)} beats ${convertChoice(computerSelection)}!`);
        break;
        case "lose":
            console.log(`You lose this round! ${convertChoice(playerSelection)} lose to ${convertChoice(computerSelection)}!`);
        break;
        case "ties":
            console.log(`That's a tie! Both  choosed ${convertChoice(playerSelection)}!`);
        break;
    }
    return winner;
}

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
        return "win";
    }else if(result == 2 || result == -1){
        return "lose";
    }else{
        return "ties";
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