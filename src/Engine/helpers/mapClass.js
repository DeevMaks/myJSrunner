class MapClass {
    constructor() {
        this.storage = {};
        this.order = [];
    }

    push(key, value) {
        this.storage[key] = value;
        this.order.push(key);
    }

    reorder(obj, position, target) {
        this.order = this.order.reduce((acc, actor) => {
            if(actor === obj) {
                return acc;
            }
            if(actor === target) {
                return position === 'before' 
                    ? [...acc, obj, actor]
                    : [...acc, actor, obj];
            }
            return [...acc, actor];
        }, []);
    }

    add(key, value, position, target) {
        this.push(key, value);
        this.reorder(key, position, target);
    }

    get(key) {
        return this.storage[key];
    }

    remove(key) {
        this.storage[key] = undefined;
        this.order = this.order.filter((item) => {
            return item !== key;
        });
    }

    [Symbol.iterator]() {
        let step = 0;
        const that = this;
        return {
            next() {
                let result = that.storage[that.order[step]];
                step += 1;
                return result ? {value: result, done: false} : {done: true};
            }
        };
    }
}

export default MapClass;