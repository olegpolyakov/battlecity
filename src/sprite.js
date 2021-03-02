export default class Sprite {
    constructor(src, map) {
        this.src = src;
        this.image = new Image();
        this.map = map;
    }

    set(id, { x, y, width, height }) {
        this.map[id]([x, y, width, height]);

        return this;
    }

    get(id) {
        return this.map[id];
    }

    async load() {
        return new Promise((resolve, reject) => {
            this.image.src = this.src;
            this.image.addEventListener('load', () => resolve(this));
        });
    }
}