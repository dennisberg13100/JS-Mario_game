const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const frame = {
    fps: 10,
    lastTime: 0
};

function draw(currentTime) {
    // Cuida que a animação ocorra em uma velocidade constante
    const timeDelta = currentTime - frame.lastTime;
    if (timeDelta < (1000 / frame.fps)) {
        requestAnimationFrame(draw);
        return;
    }
    frame.lastTime = currentTime;
    // Limpando a tela
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mario.turnLeft();
    mario.turnRight();
    mario.wait();
    requestAnimationFrame(draw);
}

window.onload = function() {
    draw();
};