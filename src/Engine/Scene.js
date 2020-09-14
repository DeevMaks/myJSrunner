import Actor from './Actor';
import groupDecor from '../Engine/decorators/group.Decorator';

@groupDecor
class Scene extends Actor {
    constructor(canvas) {
        super(canvas);

        this.isEnd = false;
        this.start = this.step = this.frame.bind(this);
        this.lastFrameTime = performance.now(); // returns past time of loading page
    }

    frame(time) {
        // console.log('im workiiing from frame');
        if(this.isEnd) {
            console.log('game over!');
            return true;
        }
        const diffTime = this.getDiffTime(time);
        this.calc(diffTime);
        this.clearFrame();
        this.render();
        window.requestAnimationFrame(this.step);
    } 

    getDiffTime(time) {
        if(!time) {
            return 0;
        }
        const diffTime = time - this.lastFrameTime;
        this.lastFrameTime = time;
        return diffTime;
    }

    clearFrame() {
        const screen = this.canvas.canvas;
        this.canvas.clearRect(0, 0, screen.offsetWidth, screen.offsetHeight);
    }
    
}

export default Scene;