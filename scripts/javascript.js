function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];

  return choices[Math.floor(Math.random() * 3)]; // return a random index making the computer choose randomly
}

function getPlayerChoice() {
  let playerMove;
  do {
    playerMove = prompt('Rock, papel or scissors?').toLowerCase();
  } while (
    playerMove !== 'rock' &&
    playerMove !== 'paper' &&
    playerMove !== 'scissors'
  );
  return playerMove;
}

function playRound(compChoice, playerChoice) {
  const pointsCalc = {
    rock: 1,
    paper: 2,
    scissors: 3,
  };
  const roundResults = pointsCalc[playerChoice] - pointsCalc[compChoice];

  console.log(playerChoice, compChoice);

  if (roundResults === 0) return 'draw';
  return roundResults === -2 || roundResults === 1 ? 'winner' : 'loser';
}

function playGame() {
  const results = {
    wins: 0,
    loses: 0,
    draws: 0,
  };

  for (let i = 0; i < 5; i += 1) {
    const round = playRound(getComputerChoice(), getPlayerChoice());
    switch (round) {
      case 'winner':
        results.wins += 1;
        break;

      case 'loser':
        results.loses += 1;
        break;

      case 'draw':
        results.draws += 1;
        break;

      default:
        console.log('!!!ERROR!!!');
        break;
    }
  }
  console.table(results);
}

playGame();
