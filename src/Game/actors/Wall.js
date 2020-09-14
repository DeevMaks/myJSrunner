import Actor from '../../Engine/Actor';
import moveDecorator from '../../Engine/decorators/move.Decorator';

@moveDecorator
class Wall extends Actor {
    constructor(canvas) {
        super(canvas);
    }

    render() {
        const [x, y] = this.position;
        this.canvas.fillRect(x, y, 20, -50);
        console.log('position', x, y);
    }

    calc() {
        
    }
}

export default Wall;