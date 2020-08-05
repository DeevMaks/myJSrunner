// набор объектов
// методы для отрисовки/перерисовки
// actors - элементы сцены
// document.getElementById('canvas').getContext('2d');

class Scene {
	constructor (actors, canvas) {
		this.actors = actors;
		this.canvas = canvas;
		this.startTime = null;

		this.frame = this.frame.bind(this);
	}

	/*
		добавление
	*/
	addActor (index, actor) {

	}

	/*
		удаление
	*/
	removeActor (index) {

	}

	/*
		расчет элементов в сцене
	*/
	calc (diffTime) {
		this.actors.forEach( actor => actor.calc(diffTime) );
	}

	/*
		отрисовка
	*/
	render () {
		this.actors.forEach( actor => actor.render(this.canvas) );
	}

	start () {
		this.frame();
	}

	clearFrame () {
		const canvas = this.canvas.canvas;
		this.canvas.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
	}

	frame (time) {
		if(!this.startTime) this.startTime = time;
		const diffTime = time - this.startTime;
		this.clearFrame();
		this.render();
		this.calc(diffTime);
		window.requestAnimationFrame(this.frame);
	}
}

export default Scene;
