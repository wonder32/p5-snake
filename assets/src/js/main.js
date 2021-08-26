import '../scss/style.scss';
import p5 from 'p5'
import Field from "./modules/Field";
import Food from "./modules/Food"
import Snake from "./modules/Snake"
import Score from "./modules/Score"
import Hammer from 'hammerjs'


let snake;
let food;
let field;
let score;

new p5(function(p5) {
    p5.setup = function()
    {
        p5.frameRate(10);
        field = new Field(p5)

        let game = p5.createCanvas(field.minHeight, field.minHeight)

        game.parent("game");
        snake = new Snake(30, 10, field, p5)
        food = new Food(p5, field)
        score = new Score(p5);

        // set options to prevent default behaviors for swipe, pinch, etc
        let options = {
            preventDefault: true
        };

        // document.body registers gestures anywhere on the page
        let hammer = new Hammer(document.body, options);
        hammer.get('swipe').set({
            direction: Hammer.DIRECTION_ALL
        });

        hammer.on("swipe", p5.swiped);

    }


    p5.draw = function() {
        p5.background(51)
        if (snake.death(p5)) {
            const prevLives = parseInt(score.livesValue.html());
            score.livesValue.html(prevLives -1);
            snake.x = field.edge + (p5.floor((30 / field.blockSize)) * field.blockSize);
            snake.y = field.edge + (p5.floor((10 / field.blockSize)) * field.blockSize);
            snake.xSpeed = 1;
            snake.ySpeed = 0;
        }

        snake.update(p5)
        snake.show(p5)

        if (snake.eat(snake, food)) {
            food = new Food(p5, field)
            const prevScore = parseInt(score.scoreValue.html());
            score.scoreValue.html(prevScore + (10 * snake.total));
        }

        field.createRaster(p5)
        food.show(p5)
    }

    p5.keyPressed = function() {
        if (p5.keyCode === p5.UP_ARROW) {
            snake.dir(0, -1)
        } else if (p5.keyCode === p5.DOWN_ARROW) {
            snake.dir(0, 1)
        } else if (p5.keyCode === p5.LEFT_ARROW) {
            snake.dir(-1, 0)
        } else if (p5.keyCode === p5.RIGHT_ARROW) {
            snake.dir(1, 0)
        } else if (p5.keyCode === 80) {
            if (pause) {
                p5.loop();
                pause = false;
            } else {
                p5.noLoop();
                pause = true;
            }
        }
    }

    p5.swiped = function(event) {

        if (event.direction == 4) {
            snake.dir(1, 0) // right
        } else if (event.direction == 8) {
            snake.dir(0, -1) // up
        } else if (event.direction == 16) {
            snake.dir(0, 1) // down
        } else if (event.direction == 2) {
            snake.dir(-1, 0)
        }
    }
});