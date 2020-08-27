export default (actorClass) => {
    return class extends actorClass {
        constructor(canvas) {
            super(canvas);
            this.position = [0, 0];
            this.speed = [0, 0];
            this.accelerate = [0, 0];
        }

        calc(diffTime) {
            this.position = this.position.map((coord, direction) => {
                return coord + (this.speed[direction] * diffTime);
            })
            this.speed = this.speed.map((speeddy, direction) => {
                return speeddy - this.accelerate[direction];
            })
        }
    }
}