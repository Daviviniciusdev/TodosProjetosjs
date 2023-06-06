//initial data
let currentColor = 'black';
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let canDraw = false;
let lastX = 0;
let lastY = 0;
let lineWidth = 1;

//events
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
screen.addEventListener('touchstart', touchStartEvent);
screen.addEventListener('touchmove', touchMoveEvent);
screen.addEventListener('touchend', touchEndEvent);
document.querySelector('.clear').addEventListener('click', clearScreen);
document.querySelector('.enviar').addEventListener('click', setWidthLine);

//function 
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mouseDownEvent(e) {
    canDraw = true;
    lastX = e.pageX - screen.offsetLeft;
    lastY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e) {
    if (canDraw) {
        draw(e.pageX - screen.offsetLeft, e.pageY - screen.offsetTop);
    }
}

function mouseUpEvent() {
    canDraw = false;
}

function touchStartEvent(e) {
    canDraw = true;
    lastX = e.touches[0].clientX - screen.offsetLeft;
    lastY = e.touches[0].clientY - screen.offsetTop;
}

function touchMoveEvent(e) {
    if (canDraw) {
        draw(e.touches[0].clientX - screen.offsetLeft, e.touches[0].clientY - screen.offsetTop);
        e.preventDefault(); // Prevent scrolling on touch devices
    }
}

function touchEndEvent() {
    canDraw = false;
}

function draw(x, y) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = 'round';
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    lastX = x;
    lastY = y;
}

function clearScreen() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function setWidthLine() {
    time();
    let value = document.querySelector('.input').value;
    lineWidth = value;
    document.querySelector('.input').value = '';
    document.querySelector('.valor').innerHTML = `O VALOR ${lineWidth} DA LINHA FOI ADICIONADO!!`;

    if (lineWidth === '') {
        document.querySelector('.valor').innerHTML = 'POR FAVOR DEFINA O VALOR DA LINHA';
    } else {
        return lineWidth;
    }
}

function time() {
    setInterval(() => {
        document.querySelector('.valor').innerHTML = '';
    }, 4000);
}
