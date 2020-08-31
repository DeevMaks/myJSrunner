class MapClass {
    constructor() {
        this.storage = {};
        this.order = [];
    }

    add(key, value) {
        this.storage[key] = value;
        this.order.push(key);
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