let timerInterval;
let seconds = 0;
let isPaused = false;
let currentScore = 0;

function startGame() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const gameScreen = document.getElementById('game-screen');
    const startBtn = document.getElementById('start-btn');

    startBtn.onclick = function () {
        const name = document.getElementById('player-name').value.trim();
        if (name === "") {
            alert("Введите имя!");
            return;
        }

        document.getElementById('display-name').innerText = name;
        welcomeScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');

        currentScore = 0;
        seconds = 0;
        isPaused = false;

        runTimer();
        scoring();
        initPause();
    };
}

function runTimer() {
    const timerElement = document.getElementById('timer');
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(function () {
        seconds++;
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        timerElement.innerText = `${mins}:${secs}`;
    }, 1000);
}

function initPause() {
    const pauseOverlay = document.getElementById('pause-overlay');
    const gameScreen = document.getElementById('game-screen');

    window.onkeydown = function (e) {
        if (e.code === 'Space' && !gameScreen.classList.contains('hidden')) {
            e.preventDefault();

            isPaused = !isPaused;

            if (isPaused) {
                clearInterval(timerInterval);
                pauseOverlay.classList.remove('hidden');
            } else {
                runTimer();
                pauseOverlay.classList.add('hidden');
            }
        };
    };
}

function scoring() {
    const clickBtn = document.getElementById('click-btn');
    const scoreElement = document.getElementById('score');

    clickBtn.oncontextmenu = (e) => e.preventDefault();

    clickBtn.onmousedown = function (event) {
        if (isPaused) return; 

        if (event.button === 0) currentScore += 5;
        else if (event.button === 2) currentScore += 10;

        scoreElement.innerText = currentScore;
    };
    exitGame();
}

function exitGame() {
    const exitBtn = document.getElementById('exit-btn');
    const resultsScreen = document.getElementById('results-screen');
    const gameScreen = document.getElementById('game-screen');

    exitBtn.onclick = function () {
        clearInterval(timerInterval);
        gameScreen.classList.add('hidden');
        resultsScreen.classList.remove('hidden');
        showRecords();
    };
}

function showRecords() {
    const recordsBody = document.getElementById('records-body');
    recordsBody.innerHTML = "";

    const topScores = [
        { name: "Алексей", score: 150 },
        { name: "Мария", score: 124 },
        { name: "Иван", score: 98 },
        { name: "Елена", score: 85 },
        { name: "Дмитрий", score: 72 }
    ];

    topScores.forEach((player, index) => {
        const row = `<tr><td>${index + 1}</td><td>${player.name}</td><td>${player.score}</td></tr>`;
        recordsBody.innerHTML += row;
    });
}

window.onload = function () {
    startGame();
}
