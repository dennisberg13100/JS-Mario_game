const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const frame = {
    fps: 10,
    lastTime: 0,
}

// Draw function 
function draw(currentTime) {
    // Take care that the animationFrame runs on constant speed
    const timeDelta = currentTime - frame.lastTime;
    if (timeDelta < (1000 / frame.fps)) {
        requestAnimationFrame(draw);
        return;
    }
    frame.lastTime = currentTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    mario.run();
    // Repeate
    requestAnimationFrame(draw);
}

window.onload = function() {
    draw();
};