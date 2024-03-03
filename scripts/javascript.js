const btnChoices = document.querySelectorAll('.choice-btn');
const scoreCount = document.querySelectorAll('.score-count');
const output = document.querySelector('.container-output');

const replayBtn = document.createElement('btn');
replayBtn.textContent = 'Play again?';
replayBtn.classList.add('replay-btn');

const choices = ['rock', 'paper', 'scissors'];
const results = {
  win: 0,
  lose: 0,
  draw: 0,
};

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)]; // return a random index making the computer choose randomly
}

function getPlayerChoice(choiceId) {
  return choices[choiceId];
}

btnChoices.forEach((btnChoice) => {
  btnChoice.addEventListener('click', () => {
    const round = playRound(getComputerChoice(), getPlayerChoice(btnChoice.id));
    updateScore(round);
  });
});

function playRound(compChoice, playerChoice) {
  const pointsCalc = {
    rock: 1,
    paper: 2,
    scissors: 3,
  };

  const roundResults = pointsCalc[playerChoice] - pointsCalc[compChoice];

  console.log(`${playerChoice} x ${compChoice}`);

  if (roundResults === 0) return 'draw';
  return roundResults === -2 || roundResults === 1 ? 'win' : 'lose';
}

function updateScore(round) {
  if (round === 'reset') {
    scoreCount[0].textContent = 0;
    scoreCount[1].textContent = 0;
  }
  results[round] += 1;
  scoreCount[0].textContent = results.win;
  scoreCount[1].textContent = results.lose;

  checkWinner();
}

function checkWinner() {
  if (results.win !== 5 && results.lose !== 5) return;
  disableButtons();

  const spanWinner = document.createElement('span');
  output.appendChild(spanWinner);

  output.appendChild(replayBtn);

  if (results.win === 5) {
    spanWinner.textContent = `CONGRATULATIONS! You won!`;
    return;
  }
  spanWinner.textContent = `%#@*! This game sucks!`;
}

function disableButtons() {
  btnChoices.forEach((btn) => {
    btn.disabled = true;
  });
}

replayBtn.addEventListener('click', () => {
  results.win = 0;
  results.lose = 0;
  results.draw = 0;

  btnChoices.forEach((btn) => {
    btn.disabled = false;
  });

  output.innerHTML = ``;
  updateScore('reset');
});
