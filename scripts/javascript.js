let computerSelection, playerSelection, winner;
// let roundsNumber = 0;
// let roundsLeft = 5;
// let winCounts = loseCounts = tieCounts = 0;

function game() {

    //Checks if the computer still have chances of winning. If not gives the win to the player instantly.
    if ((winCounts > roundsNumber / 2) || (winCounts > loseCounts + roundsLeft) && (loseCounts + roundsLeft < roundsNumber)) {
        console.log(`You've already won the game ! With ${winCounts} wins against ${loseCounts} losses and ${tieCounts} ties! \nThere's no way he can revert that! :)`);
    } else if (loseCounts > (roundsNumber / 2) || loseCounts > (winCounts + roundsLeft)) {
        console.log(`You've already lost the game... With ${loseCounts} losses against ${winCounts} wins and ${tieCounts} ties! \nThere's no way you can revert that! :(`);
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

    if (roundsLeft == 0) {
        if (winCounts > loseCounts) {
            console.log(` \nYou won the game with ${winCounts} wins against ${loseCounts} losses and ${tieCounts} ties!.`);
        } else if (loseCounts > winCounts) {
            console.log(` \nYou lost the game with ${loseCounts} losses against ${winCounts} wins and ${tieCounts} ties!.`);
        } else if (winCounts == loseCounts) {
            console.log(`\nWell... that's embarassing, you guys tied...`)
        }
    }
}

function round(playerSelection) {

    computerSelection = getComputerChoice();
    winner = getWinner(calcResult(playerSelection, computerSelection));

    //Use to log winners of each round.
    switch (winner) {
        case "win":
            console.log(`You won this round! ${convertChoice(playerSelection)} beats ${convertChoice(computerSelection)}!`);
            break;
        case "lose":
            console.log(`You lost this round! ${convertChoice(playerSelection)} lose to ${convertChoice(computerSelection)}!`);
            break;
        case "ties":
            console.log(`That's a tie! Both  chosed ${convertChoice(playerSelection)}!`);
            break;
    }
    return winner;
}

function getComputerChoice() {
    let computerChoice = Math.random() * 3; //Multiplied by three and ceil the number so the intervals between 0.01 to 1 will be considered as 1 and so on
    computerChoice = Math.ceil(computerChoice);
    return computerChoice;
}

// function getPlayerChoice() {
//     let playerChoice = prompt("Rock, paper or scissors? :");
//     playerChoice = playerChoice.toLowerCase();
//     return playerChoice;
// }
// function checkPlayerChoice(playerSelection) {
//     if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
//         alert("Select a valid option!");
//         return true;
//     } else {
//         return false;
//     }
// }
// function convertPlayerChoice(playerSelection) {
//     switch (playerSelection) {
//         case "rock":
//             return 1;
//             break;
//         case "paper":
//             return 2;
//             break;
//         case "scissors":
//             return 3;
//             break;
//         default:
//             return alert("Something went wrong on the conversion");
//     }
// }
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
const buttons = document.querySelectorAll('button');
const container = document.querySelector('.results-container')
let spn = document.querySelectorAll('span');

function resetScore(){
    spn.forEach(span => {
        span.textContent = 0;
    });
}

function checkChampion(spans) {
    if (+spans.textContent === 5) {
        const div = document.createElement('div');
        div.classList.add('winner-container');
        div.textContent = 'AND THE WINNER IS...';

        const span = document.createElement('p');
        span.classList.add('winner-name')

        container.appendChild(div);
        if (spans.className === "win") {
            span.textContent = "YOU!!! CONGRATULATIONS!"
        }else{
            span.textContent = "THE COMPUTER!!! THIS GAME SUCKS!"
        }
        div.appendChild(span);
        resetScore();

    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = round(+button.id)
        let spans = document.querySelector(`.${result}`)
        spans.textContent++;
        if (spans.className !== "ties") {
            checkChampion(spans)
        }
    })
});