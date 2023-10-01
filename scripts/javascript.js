const btnChoice = document.querySelectorAll('.choice-btn');
const containerBtn = document.querySelector('.container-btn');
const containerOutput = document.querySelector('.container-output');
const rock = `\u{1FAA8}`;
const paper = `\u{1F4F0}`;
const scissors = `\u{2702}`;
const xVersus = `\u{0078}`
let computerChoice;
let playerScore = computerScore = 0;

function getComputerChoice() {
    computerChoice = Math.ceil(Math.random() * 3)
    return computerChoice;
}

function calcResult(computerChoice, playerChoice){
    let result = playerChoice - computerChoice;

}

function playRound(playerChoice) {
    getComputerChoice();
    showRound(playerChoice);
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

function showRound(choice) {
    let spanCpu = convertChoice(computerChoice);
    let spanPlayer = convertChoice(+choice);
    let divVersus = document.createElement('div');

    if(containerOutput.hasChildNodes()){
        containerOutput.removeChild(containerOutput.firstChild);
    }

    divVersus.textContent = spanPlayer + xVersus + spanCpu;
    containerOutput.appendChild(divVersus)
}

btnChoice.forEach(btn => {
    btn.addEventListener('click', () => {
        playRound(btn.id);
    })
});
