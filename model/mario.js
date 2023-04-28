const marioImg =  new Image();
marioImg.src = './assets/img/mario_sprite.png';

const mario = {
    x: 0,
    y: 0,
    img: marioImg,
    state: 'wait', 
    sprite: {
        width: 97,
        height: 143,
        row: 0,
        column: 0
    },
    runingStep: 0,
    wait: function() {
        ctx.drawImage(
            this.img,                                   // Imagem
            0,                                          // Coluna do Sprite
            this.sprite.height * this.sprite.row,       // Linha do Sprite
            this.sprite.width,                          // Largura do Sprite
            this.sprite.height,                         // Altura do Sprite
            this.x,                                     // Posição horizontal
            ctx.canvas.height - this.sprite.height - this.y,                 // Posição vertical
            this.sprite.width,                          // Largura
            this.sprite.height                          // Altura
        );
    },
    turnLeft: function() {this.sprite.row = 1},
    turnRight: function() {this.sprite.row = 0},
    runDelay: 5,
    runDelayCounter: 0,
    run: function() { 
        if (this.sprite.row == 1) {
            this.x -= 5;
        } else {
            this.x += 5;
        }
        ctx.drawImage(    
            this.img,                                   // Imagem
            this.sprite.width * this.sprite.column,            // Coluna do Sprite
            this.sprite.height * this.sprite.row,       // Linha do Sprite
            this.sprite.width,                          // Largura do Sprite
            this.sprite.height,                         // Altura do Sprite
            this.x,                                     // Posição horizontal
            ctx.canvas.height - this.sprite.height - this.y,                 // Posição vertical
            this.sprite.width,                          // Largura
            this.sprite.height                          // Altura 
        );
        
        if (this.runDelayCounter == this.runDelay ){
            this.runDelayCounter = 0;
            (this.sprite.column < 1) ? this.sprite.column++ : this.sprite.column = 0;
        } else {
            this.runDelayCounter++;
        }
        
    },
    jumpImpulse: 60,
    gravity: 5,
    verticalInertia: 60,
    jump: function() {
        console.log("y: " + this.y);
        console.log("vertical inertia: : " + this.verticalInertia)
        console.log("gravity: " +this.gravity)
        this.y += this.verticalInertia;
        console.log(this.verticalInertia -= this.gravity);
        this.verticalInertia -= this.gravity;
        if (this.y <= 0) {
            this.verticalInertia = this.jumpImpulse;
            this.state = 'wait';
        }
        ctx.drawImage(
            this.img,                                   // Imagem
            this.sprite.width,                                          // Coluna do Sprite
            this.sprite.height * this.sprite.row,       // Linha do Sprite
            this.sprite.width,                          // Largura do Sprite
            this.sprite.height,                         // Altura do Sprite
            this.x,                                     // Posição horizontal
            ctx.canvas.height - this.sprite.height - this.y,                 // Posição vertical
            this.sprite.width,                          // Largura
            this.sprite.height                          // Altura
        );
    }
}
