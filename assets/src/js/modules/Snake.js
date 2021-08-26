

export default class Snake {

    constructor(x, y, field, p5) {
        this.x = field.edge + (p5.floor((x / field.blockSize)) * field.blockSize);
        this.y = field.edge + (p5.floor((y / field.blockSize)) * field.blockSize);
        this.xSpeed = 1;
        this.ySpeed = 0;
        this.total = 1;
        this.tail = [];
        this.field = field;
        this.p5 = p5;
    }

    eat(snake, pos) {
        let d = this.p5.dist(snake.x, snake.y, pos.x, pos.y);
        if (d < 1) {
            this.total++
            return true;
        } else {
            return false;
        }

    }

    death(p5) {
        for (let i=0; i < this.tail.length; i++) {
            let pos = this.tail[i];
            let d = p5.dist(this.x, this.y, pos.x, pos.y)
            if (d<1) {
                this.total = 1;
                this.tail = [];
                return true;
            } else {
                return false;
            }
        }
        if (this.field.minHeight - this.field.edge < this.x || this.x < this.field.edge ||
            this.field.minHeight - this.field.edge < this.x || this.x < this.field.edge) {
            this.total = 1;
            this.tail = [];
            return true;
        } else {
            return false;
        }
    }

    update(p5) {

        this.tail[this.total - 1] = p5.createVector(this.x, this.y)

        if (this.total === this.tail.length) {
            for (let i = 0; i < this.tail.length -1; i++) {
                this.tail[i] = this.tail[i + 1];
            }

        }

        this.x = this.x + this.xSpeed * this.field.blockSize;
        this.y = this.y + this.ySpeed * this.field.blockSize;
        this.x = p5.constrain(this.x, this.field.edge, (p5.width-this.field.edge-this.field.blockSize));
        this.y = p5.constrain(this.y, this.field.edge,  (p5.width-this.field.edge-this.field.blockSize));
    }

    show(p5) {
        p5.fill(255)
        for (let i = 0; i < this.tail.length - 1; i++) {
            p5.rect(this.tail[i].x, this.tail[i].y, this.field.blockSize, this.field.blockSize)
        }
        p5.rect(this.x, this.y, this.field.blockSize, this.field.blockSize)
    }

    dir(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }
}