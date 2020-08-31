export default (actorClass) => {
    return class extends actorClass {
        constructor(canvas) {
            super(canvas);
        }

    }
}