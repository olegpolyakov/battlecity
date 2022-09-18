import { Key, Direction } from './constants.js';
import EventEmitter from './event-emitter.js';

export default class GameObject extends EventEmitter {
    static getDirectionForKeys(keys) {
        if (keys.has(Key.PLAYER1_UP) || keys.has(Key.PLAYER2_UP)) {
            return Direction.UP;
        } else if (keys.has(Key.PLAYER1_RIGHT) || keys.has(Key.PLAYER2_RIGHT)) {
            return Direction.RIGHT;
        } else if (keys.has(Key.PLAYER1_DOWN) || keys.has(Key.PLAYER2_DOWN)) {
            return Direction.DOWN;
        } else if (keys.has(Key.PLAYER1_LEFT) || keys.has(Key.PLAYER2_LEFT)) {
            return Direction.LEFT;
        }
    }

    static getAxisForDirection(direction) {
        return direction % 2 === 0 ? 'y' : 'x';
    }

    static getValueForDirection(direction) {
        switch (direction) {
            case Direction.UP: return -1;
            case Direction.RIGHT: return 1;
            case Direction.DOWN: return 1;
            case Direction.LEFT: return -1;
        }
    }

    static getSideForDirection(direction) {
        switch (direction) {
            case Direction.UP: return 'top';
            case Direction.RIGHT: return 'right';
            case Direction.DOWN: return 'bottom';
            case Direction.LEFT: return 'left';
        }
    }

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