let board = [
  ['', '',''],
  ['', '',''],
  ['', '',''],
];

let currentPlayer = 'X';
let playerxWins = 0;
let playeroWins = 0;

function checkWin() {
  for(let i = 0; i < 3; i++) {
  if(board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
    return true;
   }
  }

  for(let j = 0; j < 3; j++) {
    if(board[0][j] !== '' && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
      return true;
    }
  }

  if(board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return true;
  }

  if(board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return true;
  }
};

function checkTie() {
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      if(board[i][j] === '') {
       return false;
      }
    }
  }
  return true;
};


function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

function updateBoard(row, col) {
  board[row][col] = currentPlayer;
 let cell =  document.getElementById(`cell${row}${col}`);
 cell.innerText = currentPlayer;
cell.classList.add(`player-${currentPlayer.toLowerCase()}`);
};


function handleClick(event) {
  const row = event.target.parentNode.rowIndex;
  const col = event.target.cellIndex;


  if(board[row][col] !== '') {
    alert('posição selecionada já ocupada');
    return;
  };

  updateBoard(row, col);

  if(checkWin()) {
    alert(`${currentPlayer} Venceu`);
    if(currentPlayer === 'X'){
      playerxWins++;
      document.querySelector('.player-x-score').innerText = `PLAYER X : ${playerxWins}`;
    }else{
      playeroWins++;
      document.querySelector('.player-o-score').innerText = `PLAYER O : ${playeroWins}`
    };
    resetGame();
    return;
  };

  if(checkTie()) {
    alert('o jogo deu empate!!')
    resetGame();
    return;
  };
  
  switchPlayer();
};



document.querySelectorAll('td').forEach(cell =>{
  cell.addEventListener('click', handleClick);
});


function resetGame() {
  board =  [
    ['', '',''],
    ['', '',''],
    ['', '',''],
  ];

  currentPlayer = 'X';

  document.querySelectorAll('td').forEach(cell =>{
    cell.innerText = '';
    cell.classList.remove('player-x', 'player-o')
  });
};


// botao reiniciar jogo sem alterar valor


document.querySelector('#button').addEventListener('click', resetGame);