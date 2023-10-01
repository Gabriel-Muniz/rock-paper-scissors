const btnChoice = document.querySelectorAll('.choice-btn');
const containerBtn = document.querySelector('.container-btn');
const containerOutput = document.querySelector('.container-output');
const spanCpu = document.querySelector('.score-count.cpu');
const spanPlayer = document.querySelector('.score-count.player');
const spanWinner = document.createElement('div');
spanWinner.classList.add('result-board');
const replayBtn = document.createElement('button');
replayBtn.classList.add('replay-btn');
const rock = `\u{1FAA8}`;
const paper = `\u{1F4F0}`;
const scissors = `\u{2702}`;
const xVersus = `\u{0078}`
let computerChoice;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    computerChoice = Math.ceil(Math.random() * 3)
    return computerChoice;
}

function playRound(playerChoice) {
    getComputerChoice();
    showRound(playerChoice);
    showWinner(calcResult(computerChoice, playerChoice));
    if (checkGameWinner()) {
        announceGameWinner();
        replayBtn.textContent = "Play again";
        containerOutput.appendChild(replayBtn);
    };
}

function updateScoreboard() {
    spanCpu.textContent = computerScore;
    spanPlayer.textContent = playerScore;
}

function convertChoice(choice) {
    switch (choice) {
        case 1:
            return rock;
            break;
        case 2:
            return paper;
            break;
        case 3:
            return scissors;
            break;
        default:
            return "error";

    }
}

function checkGameWinner() {
    if (playerScore === 5 || computerScore === 5) {
        console.log("END THE GAME");
        disableButtons();
        removeChildsNode(containerOutput);
        return true;
    }
    return false;
}

function announceGameWinner() {
    if (playerScore === 5) {

        spanWinner.textContent = "Congratulations!\nYou won the game!";
        containerOutput.appendChild(spanWinner);
        return;
    }
    spanWinner.textContent = "That's suck!\nYou lose the game!";
    containerOutput.appendChild(spanWinner);
}

function resetGame() {
    computerScore = playerScore = 0;
    enableButtons();
}

function removeChildsNode(parent) {
    while(parent.hasChildNodes()){
        parent.removeChild(parent.firstChild);
    }
}

function disableButtons() {
    btnChoice.forEach(btn => {
        btn.disabled = true;
    });
}

function enableButtons() {
    btnChoice.forEach(btn => {
        btn.disabled = false;
    });
}

function calcResult(computerChoice, playerChoice) {
    let result = playerChoice - computerChoice;

    if (result === 0) {
        return;
    }
    if (result === -2 || result === 1) {
        playerScore++;
        return true;
    } else if (result === 2 || result === -1) {
        computerScore++;
        console.log(computerScore);
        return false;
    }

}

function showWinner(result) {
    if(spanWinner === ""){
        containerOutput.appendChild(spanWinner)
    }
}


function showRound(choice) {
    let spanCpu = convertChoice(computerChoice);
    let spanPlayer = convertChoice(+choice);
    let divVersus = document.createElement('div');

    removeChildsNode(containerOutput);

    divVersus.classList.add('round');
    divVersus.textContent = `You ${spanPlayer} X ${spanCpu} CPU`;
    containerOutput.appendChild(divVersus)
}

btnChoice.forEach(btn => {
    btn.addEventListener('click', () => {
        playRound(btn.id);
        updateScoreboard();
    })
});

replayBtn.addEventListener('click', () => {
    resetGame();
    updateScoreboard();
    removeChildsNode(containerOutput);
})