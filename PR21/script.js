function mouseCoordinates() {
    const boxes = document.querySelectorAll('.box');
    const pageDisplay = document.getElementById('page-info');
    const blockDisplay = document.getElementById('block-info');

    window.addEventListener('mousemove', function (event) {
        let pageCoord = `(${event.pageX};${event.pageY})`;
        pageDisplay.innerText = `Страница: ${pageCoord}`;
        console.log(`Страница: ${pageCoord}`);
    });

    boxes.forEach(box => {
        box.addEventListener('mousemove', function (event) {
            let rect = box.getBoundingClientRect();
            let blockX = Math.floor(event.clientX - rect.left);
            let blockY = Math.floor(event.clientY - rect.top);

            blockDisplay.innerText = `Блок: (${blockX};${blockY})`;
            console.log(`Блок: (${blockX};${blockY})`);
        });

        box.addEventListener('mouseleave', function () {
            blockDisplay.innerText = `Блок: ()`;
            console.log(`Блок: ()`);
        });
    });
}

function paintContainer() {
    window.addEventListener('mousedown', function (event) {
        if (event.button === 0)
            document.querySelector("#box2").style.backgroundColor = 'pink'
        if (event.button === 2)
            document.querySelector("#box2").style.backgroundColor = 'lightYellow'
    });
}

function pictureMovement() {
    const img = document.getElementById("img")
    img.addEventListener('dragstart', function (event) {
        this.classList.add('dragging')
    });

    img.addEventListener('dragend', function () {
        this.classList.remove('dragging');
    });

    window.addEventListener('dragover', function (event) {
        event.preventDefault();
    });
}

function pictureChangeSize() {
    const img = document.getElementById("img")
    let currentWidth = img.width;
    img.addEventListener('mousewheel', function (event) {
        if (event.deltaY < 0) {
            currentWidth += 20;
        } else {
            currentWidth -= 20;
        }

        img.style.width = currentWidth + 'px';
    });
}

window.onload = function () {

    mouseCoordinates();

    paintContainer();

    pictureMovement();

    pictureChangeSize();
};