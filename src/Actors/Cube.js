import Actor from '../Engine/Actor.js';
import store from '../Store.js';

class Cube extends Actor {
	constructor (position, speed) {
		super(position, speed);
	}

	render (canvas) {
		const x = this.position.x;
		const y = this.position.y;
		const w = 20;
		const h = 20;

		canvas.fillStyle = '#222';
  		canvas.fillRect(x, y, w, h);
	}

	calc (diffTime) {
		super.calc(diffTime);
		if (this.position.x >= store.canvasWidth) {
			this.x = -20;
		}
	}
}

export default Cube;
