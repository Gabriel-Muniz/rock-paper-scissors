let computerSelection, playerSelection, winner;
const roundsNumber = 5;

game()
function game() {
    let winCounts = loseCounts = tieCounts = 0;
    let roundsLeft = roundsNumber;
    for (let i = 0; i < roundsNumber; i++) {

        //Checks if the computer still have chances of winning. If not gives the win to the player instantly.
        if ((winCounts > roundsNumber / 2) || (winCounts > loseCounts + roundsLeft) && (loseCounts + roundsLeft < roundsNumber)) {
            console.log(`You won the game already! With ${winCounts} wins against ${loseCounts} loses and ${tieCounts} ties! \nThere's no way he can revert that! :)`);
            break;
        } else if (loseCounts > (roundsNumber / 2) || loseCounts > (winCounts + roundsLeft)) {
            console.log(`You already lose the game... With ${loseCounts} loses against ${winCounts} wins and ${tieCounts} ties! \nThere's no way you can revert that! :(`);
            break;
        }

        switch (round()) {
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
    }
    if (roundsLeft == 0) {
        if (winCounts > loseCounts) {
            console.log(` \nYou won the game with ${winCounts} wins against ${loseCounts} loses and ${tieCounts} ties!.`);
        } else if (loseCounts > winCounts) {
            console.log(` \nYou lose the game with ${loseCounts} loses against ${winCounts} wins and ${tieCounts} ties!.`);
        } else if (winCounts == loseCounts) {
            console.log(`\nWell... that's embarassing, you guys tied...`)
        }
    }
}

function round() {
    computerSelection = getComputerChoice();

    do { //Do while to assure that the player input was a valid option
        playerSelection = getPlayerChoice();
    } while (checkPlayerChoice(playerSelection));

    playerSelection = convertPlayerChoice(playerSelection);
    winner = getWinner(calcResult(playerSelection, computerSelection));

    //Use to log winners of each round.
    switch (winner) {
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

function getComputerChoice() {
    let computerChoice = Math.random() * 3; //Multiplied by three and ceil the number so the intervals between 0.01 to 1 will be considered as 1 and so on
    computerChoice = Math.ceil(computerChoice);
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper or scissors? :");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}
function checkPlayerChoice(playerSelection) {
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        alert("Select a valid option!");
        return true;
    } else {
        return false;
    }
}
function convertPlayerChoice(playerSelection) {
    switch (playerSelection) {
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

function getWinner(result) {
    if (result == -2 || result == 1) {
        return "win";
    } else if (result == 2 || result == -1) {
        return "lose";
    } else {
        return "ties";
    }
}

function convertChoice(respectiveChoice) {
    switch (respectiveChoice) {
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