const marioImg =  new Image();
marioImg.src = './img/mario_sprite.png';

const mario = {
    x: 100,
    y: 0,
    img: marioImg,
    sprite: {
        width: 97,
        height: 143,
        line: 0
    },
    runingStep: 0,
    wait: function() {
        ctx.drawImage(
            this.img,                                   // Imagem
            0,                                          // Coluna do Sprite
            this.sprite.height * this.sprite.line,      // Linha do Sprite
            this.sprite.width,                          // Largura do Sprite
            this.sprite.height,                         // Altura do Sprite
            this.x,                                     // Posição horizontal
            450 - this.y,                               // Posição vertical
            this.sprite.width,                          // Largura
            this.sprite.height                          // Altura
        );
    },
    turnLeft: function() {this.sprite.line = 1},
    turnRight: function() {this.sprite.line = 0},
    run: function() { 
        ctx.drawImage(    
            this.img,                                   // Imagem
            this.sprite.width * this.runingStep,        // Coluna do Sprite
            this.sprite.height * this.sprite.line,      // Linha do Sprite
            this.sprite.width,                          // Largura do Sprite
            this.sprite.height,                         // Altura do Sprite
            this.x,                                     // Posição horizontal
            450 - this.y,                               // Posição vertical
            this.sprite.width,                          // Largura
            this.sprite.height                          // Altura 
        );
        
        (this.runingStep < 1) ? this.runingStep++ : this.runingStep = 0
    },
}
