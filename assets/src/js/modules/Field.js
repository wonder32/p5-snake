export default class Field
{

    constructor(p5)
    {
        this.minHeight = this.calcMinHeight(p5);
        this.cols = this.rows = 30;
        this.blockSize = p5.floor(this.minHeight / this.cols);
        this.edge = (this.minHeight - (30 * this.blockSize)) / 2;
    }


    calcMinHeight(p5) {
        return p5.windowWidth > p5.windowHeight*0.99 ? p5.windowHeight*0.99 : p5.windowWidth;
    }

    createRaster(p5) {
        p5.stroke(60);
        for (let i = this.edge; i < this.minHeight; i += this.blockSize) {
            p5.line(i, 0, i, this.minHeight);
            p5.line(0, i, this.minHeight, i);
        }

        p5.fill(255)
        p5.rect(0, 0, this.minHeight, this.edge);
        p5.rect(0, 0, this.edge, this.minHeight);
        p5.rect(this.minHeight - this.edge, 0, this.minHeight - this.edge, this.minHeight);
        p5.rect(0, this.minHeight - this.edge, this.minHeight, this.minHeight);
    }
}