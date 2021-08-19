

export default class Food {

    constructor(p5, field) {
        this.blockSize = field.blockSize;
        this.x = field.edge + (p5.floor(p5.random(field.cols)) * field.blockSize);
        this.y = field.edge + (p5.floor(p5.random(field.rows)) * field.blockSize);
    }


    show(p5) {
        p5.fill(255, 0, 100)
        p5.rect(this.x, this.y, this.blockSize, this.blockSize);
    }

}