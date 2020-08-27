import Actor from '../../Engine/Actor';
import moveDecorator from '../../Engine/decorators/move.Decorator';

@moveDecorator
class Wall extends Actor {
    constructor(canvas) {
        super(canvas);
    }
}

export default Wall;