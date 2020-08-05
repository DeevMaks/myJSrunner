class Actor {
	constructor (position, speed) {
		this.position = position;
		this.speed = speed; // 100
	}

	calc (diffTime) {
		const newPosition = this.speed * diffTime;
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
}


export default Actor;
