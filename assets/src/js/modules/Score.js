export default class Score
{
    constructor(p5) {

        this.scoreLabel = p5.createDiv('Score');
        this.scoreValue = p5.createDiv('0');
        this.livesLabel = p5.createDiv('Lives');
        this.livesValue = p5.createDiv('3');

        if (p5.windowWidth > p5.windowHeight*0.99) {
            this.leftPositionLabel = ((p5.windowWidth / 2) + (p5.windowHeight / 2)) + 50;
            this.heightPositionLabel = p5.windowWidth + 180;
            this.leftPositionValue = ((p5.windowWidth / 2) + (p5.windowHeight / 2)) + 150;
            this.heightPositionValue = p5.windowWidth + 200;
            this.leftPositionLives = ((p5.windowWidth / 2) + (p5.windowHeight / 2)) + 200;
            this.heightPositionLives = p5.windowWidth + 220;
            this.leftPositionLivesValue = ((p5.windowWidth / 2) + (p5.windowHeight / 2)) + 250;
            this.heightPositionLivesValue = p5.windowWidth + 240;
            this.fontSize = '2.8em';
        } else {
            this.leftPositionLabel = (p5.windowWidth / 2) - 100;
            this.heightPositionLabel = (p5.windowHeight / 2) +150;
            this.leftPositionValue = (p5.windowWidth / 2) - 100;
            this.heightPositionValue = (p5.windowHeight / 2) + 210;
            this.leftPositionLives = (p5.windowWidth / 2) - 100;
            this.heightPositionLives = (p5.windowHeight / 2) + 270;
            this.leftPositionLivesValue = (p5.windowWidth / 2) - 100;
            this.heightPositionLivesValue = (p5.windowHeight / 2) + 330;
            this.fontSize = '5.8em';
        }

        this.scoreLabel.position(this.leftPositionLabel, this.heightPositionLabel);
        this.scoreLabel.style('color', 'white');
        this.scoreLabel.style('font-size', this.fontSize);

        this.scoreValue.position(this.leftPositionValue, this.heightPositionValue);
        this.scoreValue.style('color', 'white');
        this.scoreValue.style('font-size', this.fontSize);

        this.livesLabel.position(this.leftPositionLives, this.heightPositionLives);
        this.livesLabel.style('color', 'white');
        this.livesLabel.style('font-size', this.fontSize);

        this.livesValue.position(this.leftPositionLivesValue, this.heightPositionLivesValue);
        this.livesValue.style('color', 'white');
        this.livesValue.style('font-size', this.fontSize);
    }
}