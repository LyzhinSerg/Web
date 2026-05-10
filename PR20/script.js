function timer() {
    setInterval(function () {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const hh = hours < 10 ? '0' + hours : hours;
        const mm = minutes < 10 ? '0' + minutes : minutes;
        const ss = seconds < 10 ? '0' + seconds : seconds;
        const formatted = hh + ":" + mm + ":" + ss;

        document.getElementById('clock').innerHTML = formatted;
    }, 1000)
}

function squareMovement() {
    const canvas = document.getElementById('squareMovement');
    const sctx = canvas.getContext('2d');

    let y = 0;
    let x = 75;
    const size = 50;
    const speed = 2;

    setInterval(function () {
        sctx.clearRect(0, 0, canvas.width, canvas.height);

        sctx.fillStyle = 'pink';
        sctx.fillRect(x, y, size, size);

        y += speed;

        if (y > canvas.height) {
            y = -size;
        }
    }, 20);
}


function circleMovement() {
    const canvas = document.getElementById('circleMovement');
    const ctx = canvas.getContext('2d');

    const radius = 30;
    let x = canvas.width / 2;
    let y = canvas.height / 2;

    let dx = (Math.random() - 0.5) * 10;
    let dy = (Math.random() - 0.5) * 10;

    function drawBall() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "pink";
        ctx.fill();
        ctx.closePath();

        if (x + dx > canvas.width - radius || x + dx < radius) {
            dx = -dx;
        }

        if (y + dy > canvas.height - radius || y + dy < radius) {
            dy = -dy;
        }

        x += dx;
        y += dy;
    }

    setInterval(drawBall, 10);
}

function circlesMovement() {
    let canvas = document.getElementById('circlesMovement');
    let ctx = canvas.getContext('2d');
    let balls = [];
    let timerId = null;

    function createBalls() {
        const count = prompt("Введите кол-во шаров")
        balls = [];

        for (var i = 0; i < count; i++) {
            balls.push({
                x: Math.random() * (canvas.width - 40) + 20,
                y: Math.random() * (canvas.height - 40) + 20,
                dx: (Math.random() - 0.5) * 10,
                dy: (Math.random() - 0.5) * 10,
                radius: 15,
                color: `rgb(${Math.floor(Math.random() * 256)},
                        ${0},
                        ${Math.floor(Math.random() * 256)})`
            });
        }
    }

    function move() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        balls.forEach(function (ball) {
            
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
            ctx.fillStyle = ball.color;
            ctx.fill();
            ctx.closePath();

            if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
                ball.dx = -ball.dx;
            }

            if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
                ball.dy = -ball.dy;
            }

            ball.x += ball.dx;
            ball.y += ball.dy;
        });
    }

    document.getElementById('startBtn').onclick = function () {
        if (timerId) clearInterval(timerId);
        createBalls();
        timerId = setInterval(move, 10);
    };
}

$(document).ready(function () {
    //Task 1
    timer();

    //Task 2
    squareMovement();

    //Task 3
    circleMovement();

    //Task 4
    circlesMovement();
});