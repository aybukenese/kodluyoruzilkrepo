const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

// Çizim başladığında
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

// Çizim devam ederken
canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
  }
});

// Çizim bittiğinde
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

// Çizim alanını temizlemek
document.getElementById('clearCanvas').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
