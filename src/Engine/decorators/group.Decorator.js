import mapClass from '../helpers/mapClass';

export default (actorClass) => {
    return class extends actorClass {
        constructor(canvas) {
            super(canvas);
            this.container = new mapClass();
        }

        add(name, actor, position, target) {
            this.container.add(name, actor, position, target);
        }

        push(name, actor) {
            this.container.push(name, actor);
        }

        getChild(name) {
            return this.container.get(name);
        }

        reorder(name, position, target) {
            this.container.reorder(name, position, target)
        }

        remove(name) {
            this.container.remove(name);
        }

        calc(diff) {
            super.calc(diff);
            for (let child of this.container) {
                child.calc(diff);
            }
        }

        render() {
            // console.log(this.container);
            super.render();
            for (let child of this.container) {
                child.render();
                console.log(child);
            }
        }


    }
}