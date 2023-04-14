const marioImg =  new Image();
marioImg.src = './img/mario_sprite.png';

const mario = {
    x: 100,
    y: 0,
    img: marioImg,
    sprite: {
        width: 97,
        height: 143,
        column: 0
    },
    direction: "right",
    runingStep: 0,

    wait: function() {
        let col = (this.direction === "right") ? 0 : 1;
        ctx.drawImage(
            this.img, // sprite image
            0, // sprite row
            this.sprite.height * col, // sprite col
            this.sprite.width, // sprite width
            this.sprite.height,  // sprite height
            this.x, // horizontal position
            450 - this.y, // vertical position
            this.sprite.width, // width
            this.sprite.height // height
        );
    },

    run: function() { 
        ctx.drawImage(
            this.img, // sprite image
            this.sprite.width * this.runingStep, // sprite row
            this.sprite.height * this.sprite.column, // sprite col
            this.sprite.width, // sprite width
            this.sprite.height,  // sprite height
            this.x, // horizontal position
            450 - this.y, // vertical position
            this.sprite.width, // width
            this.sprite.height // height
        );
        
        (this.runingStep < 1) ? this.runingStep++ : this.runingStep = 0
    },
    turnLeft: () => {this.sprite.x.column = 0},
    turnRight: () => {this.sprite.x.column = 1},

}
