let currentPlayer = "X";
let stepCount = 0;
let xWins = 0;
let oWins = 0;
let tieCount = 0;
const board = new Array(9).fill(null);
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.addEventListener('DOMContentLoaded', () => {
    initGameBoard();
    updateDisplay();
});

function initGameBoard() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('div');
        row.className = 'row g-0';
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.className = 'col-4';
            const button = document.createElement('button');
            button.className = 'game-cell btn btn-light border';
            button.style.width = '70px';
            button.style.height = '70px';
            button.onclick = () => makeMove(i * 3 + j);
            cell.appendChild(button);
            row.appendChild(cell);
        }
        gameBoard.appendChild(row);
    }
}

function makeMove(index) {
    if (board[index] || checkWin()) return;
    board[index] = currentPlayer;
    stepCount++;
    if (checkWin()) {
        alert(`${currentPlayer} wins!`);
        currentPlayer === "X" ? xWins++ : oWins++;
        resetGame();
    } else if (stepCount === 9) {
        alert("tie!");
        tieCount++;
        resetGame();
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateDisplay();
    }
}


function checkWin() {
    return winConditions.some(condition => 
        condition.every(index => board[index] === currentPlayer));
}

function resetGame() {
    board.fill(null);
    stepCount = 0;
    currentPlayer = "X";
    initGameBoard();
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('currentPlayer').textContent = currentPlayer;
    document.getElementById('stepCount').textContent = stepCount;
    document.getElementById('xWins').textContent = xWins;
    document.getElementById('oWins').textContent = oWins;
    document.getElementById('tie').textContent = tieCount;
    document.querySelectorAll('.game-cell').forEach((cell, index) => {
        cell.textContent = board[index];
    });
}
