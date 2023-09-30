const btnChoice = document.querySelectorAll('.choice-button');
let computerChoice;

function getComputerChoice() {
    computerChoice = Math.ceil(Math.random() * 3)
    return computerChoice;
}

function calcResult(computerChoice, playerChoice){
    return playerChoice - computerChoice;
}


btnChoice.forEach(btn => {
    btn.addEventListener('click', () => {
        playRound(btn.id);
    })
});



function playRound(playerChoice) {
    getComputerChoice();
    calcResult(computerChoice, playerChoice);
}