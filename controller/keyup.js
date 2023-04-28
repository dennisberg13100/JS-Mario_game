document.onkeyup = function(event) {
    if (event.key in keyupAction){
        keyupAction[event.key]();
    }   
};

const keyupAction = {
    ArrowLeft: () => {
        mario.turnLeft();
        mario.state = 'wait';
    },
    ArrowRight: () => {
        mario.turnRight();
        mario.state = 'wait';
    },
    ArrowUp: () => {
    }
}