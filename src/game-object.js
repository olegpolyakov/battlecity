import EventEmitter from './event-emitter.js';

export default class GameObject extends EventEmitter {
    constructor({ x, y, width, height, sprites } = {}) {
        super();

        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this.sprites = sprites;
        this.animationFrame = 0;
        this.animationSpeed = 0;
        this.frames = 0;
        this.isDestructable = false;
        this.isDestroyed = false;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
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