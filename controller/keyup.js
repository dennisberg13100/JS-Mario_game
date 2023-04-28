document.onkeyup = function(event) {
    if (event.key in keyupAction){
        keyupAction[event.key]();
    }   
};

const keyupAction = {
    ArrowLeft: () => {
        mario.turnLeft();
        (mario.state == 'run') ? mario.state = 'wait': null;
    },
    ArrowRight: () => {
        mario.turnRight();
        (mario.state == 'run') ? mario.state = 'wait': null;
    },
    ArrowUp: () => {
    }
}