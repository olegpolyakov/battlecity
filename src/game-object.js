import EventEmitter from './event-emitter.js';

export default class GameObject extends EventEmitter {
    constructor({ x, y, width, height, sprites } = {}) {
        super();

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprites = sprites;
        this.animationFrame = 0;
        this.frames = 0;
        this.isDestructable = false;
        this.isDestroyed = false;
    }

    get top() {
        return this.y;
    }

    get right() {
        return this.x + this.width;
    }

    get bottom() {
        return this.y + this.height;
    }

    get left() {
        return this.x;
    }

    update() {

    }

    move(axis, value) {
        this[axis] += value * this.speed;
    }

    stop() {
        this.speed = 0;
    }
}