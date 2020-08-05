class Actor {
	constructor (position, speed) {
		this.position = position;
		this.speed = speed;
	}

	calc (diffTime) {
		const newPosition = this.speed * diffTime + this.position.x;
		this.position.x = newPosition;
	}

	render (canvas) {
		const x = this.position.x;
		const y = this.position.y;
		const w = 20;
		const h = 20;

		canvas.fillStyle = 'tomato';
  		canvas.fillRect(x, y, w, h);
	}

	set x (x) {
		this.position.x = x;
	}


}


export default Actor;
