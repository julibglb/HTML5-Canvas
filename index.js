//access to elements
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

const button = document.querySelector('#button');
const form = document.querySelector('#size');
console.log(form.value)


// creating new variable 
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

// creating function

function draw(e) {
    if (!isDrawing) return; // stop the function from running when they are not moused down
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    //go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    // if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    //     direction = !direction;
    // }

    // if (direction) {
    //     ctx.lineWidth++;
    // } else {
    //     ctx.lineWidth--;
    // }
    

}

function changePen(size) {
        console.log(size)
        if (size === 'small') {
            ctx.lineWidth = 15;
        } else if (size === 'middle') {
            ctx.lineWidth = 50;
        } else if (size === 'large') {
            ctx.lineWidth = 85;
        } 

    }

// creating events listener
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

button.addEventListener('click', () => {
     ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
})

form.addEventListener('change', () => changePen(form.value))
