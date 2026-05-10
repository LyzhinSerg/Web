function getKeyCode() {
    window.addEventListener('keydown', function (event) {
        let keyCode = event.keyCode;
        let keyName = event.key;
        let message = `Нажата клавиша: ${keyName} (код: ${keyCode})`;

        switch (keyName) {
            case "ArrowUp":
                message += " — Стрелка ВВЕРХ";
                break;
            case "ArrowDown":
                message += " — Стрелка ВНИЗ";
                break;
            case "ArrowLeft":
                message += " — Стрелка ВЛЕВО";
                break;
            case "ArrowRight":
                message += " — Стрелка ВПРАВО";
                break;
            case "Enter":
                message += " — Клавиша ВВОД";
                break;
            case "Escape":
                message += " — Клавиша ESC";
                break;
            case "Alt":
                message += " — Клавиша ALT";
                break;
            case "Control":
                message += " — Клавиша CTRL";
                break;
            case "Shift":
                message += " — Клавиша SHIFT";
                break;
        }

        console.log(message);
    })
}

function pressedBtn() {
    window.addEventListener('keydown', function (event) {
        window.addEventListener('keydown', function (event) {
            const keyElement = document.getElementById(event.code);

            if (keyElement) {
                keyElement.classList.add('pressed');
            }
        });

        window.addEventListener('keyup', function (event) {
            const keyElement = document.getElementById(event.code);

            if (keyElement) {
                keyElement.classList.remove('pressed');
            }
        });
    })
}

function playerMovement() {
    const player = document.getElementById('player');
    const area = document.getElementById('gameArea');
    const step = 10;

    let x = 0;
    let y = 0;

    window.addEventListener('keydown', function (event) {
        const areaWidth = area.clientWidth;
        const areaHeight = area.clientHeight;
        const playerSize = player.offsetWidth;

        switch (event.code) {
            case "ArrowUp":
                if (y > 0) y -= step;
                break;
            case "ArrowDown":
                if (y + playerSize * 1.5 < areaHeight) y += step;
                break;
            case "ArrowLeft":
                if (x > 0) x -= step;
                break;
            case "ArrowRight":
                if (x + playerSize < areaWidth) x += step;
                break;
        }

        player.style.left = x + "px";
        player.style.top = y + "px";
    });
};

function pingPong() {
    const canvas = document.getElementById('pongCanvas');
    const ctx = canvas.getContext('2d');
    const status = document.getElementById('status');

    let ball = {
        x: 50, y: 50,
        dx: 4, dy: 4,
        radius: 10
    };

    let paddle = {
        width: 10,
        height: 80,
        x: canvas.width - 20,
        y: canvas.height / 2 - 40,
        speed: 20
    };

    let gameOver = false;

    window.addEventListener('keydown', function (e) {
        if (e.code === "ArrowUp" && paddle.y > 0) {
            paddle.y -= paddle.speed;
        }
        if (e.code === "ArrowDown" && paddle.y + paddle.height < canvas.height) {
            paddle.y += paddle.speed;
        }
    });

    function draw() {
        if (gameOver) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = "peachPuff";
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "pink";
        ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

        if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
            ball.dy = -ball.dy;
        }

        if (ball.x + ball.dx < ball.radius) {
            ball.dx = -ball.dx;
        }

        if (ball.x + ball.dx > paddle.x - ball.radius) {
            if (ball.y > paddle.y && ball.y < paddle.y + paddle.height) {
                ball.dx = -ball.dx;
            } else if (ball.x > canvas.width) {
                gameOver = true;
                status.innerText = "ВЫ ПРОИГРАЛИ!";
            }
        }
        ball.x += ball.dx;
        ball.y += ball.dy;
    }
    setInterval(draw, 3);
}

window.onload = function () {
    getKeyCode();

    pressedBtn();

    playerMovement();

    pingPong();
}