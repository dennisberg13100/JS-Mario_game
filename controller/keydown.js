document.onkeydown =  function(event) {
    if (event.key in keydownAction){
        keydownAction[event.key]();
    }   
  };

const keydownAction = {
    ArrowLeft: () => {
        mario.turnLeft();
        (mario.state == 'wait') ? mario.state = 'run': null;
    },
    ArrowRight: () => {
        mario.turnRight();
        (mario.state == 'wait') ? mario.state = 'run': null;
    },
    ArrowUp: () => {
        mario.state = 'jump';
    }
}
