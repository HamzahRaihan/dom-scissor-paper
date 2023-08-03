function getComputerChoice() {
  let computer = Math.random();

  if (computer < 0.34) {
    return 'paper';
  }
  if (computer >= 0.34 && computer < 0.67) {
    return 'rock';
  }
  return 'scissor';
}

const choice = document.querySelectorAll('li img');
const imageComputer = document.querySelector('.img-computer');
const info = document.querySelector('.info');
let scorePlayer = 0;
let scoreComputer = 0;

function getResult(computer, player) {
  if (computer == player) {
    return 'draw';
  }
  if (player == 'paper') return computer == 'rock' ? 'win!' : 'lose!';
  if (player == 'rock') return computer == 'paper' ? 'lose!' : 'win!';
  if (player == 'scissor') return computer == 'rock' ? 'lose!' : 'win!';
}

function getScore(resultScore) {
  if (resultScore == 'draw') {
    scorePlayer = scorePlayer;
    scoreComputer = scoreComputer;
  }
  if (resultScore == 'win!') {
    scorePlayer = scorePlayer + 1;
  }
  if (resultScore == 'lose!') {
    scoreComputer = scoreComputer + 1;
  }
  const scoreC = document.querySelector('.score-computer');
  const scoreP = document.querySelector('.score-player');
  scoreC.innerHTML = scoreComputer;
  scoreP.innerHTML = scorePlayer;
}

function rollingChoice() {
  const imageComputer = document.querySelector('.img-computer');
  const image = ['rock', 'paper', 'scissor'];
  let i = 0;

  const start = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - start > 1000) {
      clearInterval;
      return;
    }
    imageComputer.setAttribute('src', `img/${image[i++]}.jpg`);
    if (i == image.length) {
      i = 0;
    }
  }, 100);
}

choice.forEach(function (image) {
  image.addEventListener('click', function () {
    const getComputer = getComputerChoice();
    const getPlayer = image.className;
    const result = getResult(getComputer, getPlayer);

    rollingChoice();

    setTimeout(function () {
      imageComputer.setAttribute('src', `img/${getComputer}.jpg`);
      getScore(result);
      info.innerHTML = result;
    }, 1000);
  });
});

// const playerRock = document.querySelector('.rock');
// const playerScissor = document.querySelector('.scissor');
// const playerPaper = document.querySelector('.paper');

// playerRock.addEventListener('click', function () {
//   const getComputer = getComputerChoice();
//   const getPlayer = playerRock.className;
//   const result = getResult(getComputer, getPlayer);

//   imageComputer.setAttribute('src', `img/${getComputer}.jpg`);

//   info.innerHTML = result;
// });

// playerScissor.addEventListener('click', function () {
//   const getComputer = getComputerChoice();
//   const getPlayer = playerScissor.className;
//   const result = getResult(getComputer, getPlayer);

//   imageComputer.setAttribute('src', `img/${getComputer}.jpg`);

//   info.innerHTML = result;
// });
// playerPaper.addEventListener('click', function () {
//   const getComputer = getComputerChoice();
//   const getPlayer = playerPaper.className;
//   const result = getResult(getComputer, getPlayer);

//   imageComputer.setAttribute('src', `img/${getComputer}.jpg`);

//   info.innerHTML = result;
// });
