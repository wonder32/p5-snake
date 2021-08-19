export default class Score
{
    constructor(p5) {

        this.board = p5.createDiv('Score = 0');
        this.board.position(20, 20);
        this.board.id = 'score';
        this.board.style('color', 'white');
    }
}