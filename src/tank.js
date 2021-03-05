import { Direction } from './constants.js';

export default class Tank {
    direction = Direction.UP;
    x = 64 * 3;
    y = 192 * 3;
    width = 48;
    height = 48;
    speed = 3;
    animationFrame = 0;
    frames = [
        [0 * 48, 0 * 48, 48, 48],
        [1 * 48, 0 * 48, 48, 48],
        [6 * 48, 0 * 48, 48, 48],
        [7 * 48, 0 * 48, 48, 48],
        [4 * 48, 0 * 48, 48, 48],
        [5 * 48, 0 * 48, 48, 48],
        [2 * 48, 0 * 48, 48, 48],
        [3 * 48, 0 * 48, 48, 48]
    ];

    get sprite() {
        return this.frames[this.direction * 2 + this.animationFrame];
    }

    update(world, activeKeys) {
        if (activeKeys.has('ArrowUp')) {
            this._turn(Direction.UP);

            if (world.canMove(this)) {
                this._move('y', -1);
            }
        } else if (activeKeys.has('ArrowRight')) {
            this._turn(Direction.RIGHT);

            if (world.canMove(this)) {
                this._move('x', 1);
            }
        } else if (activeKeys.has('ArrowDown')) {
            this._turn(Direction.DOWN);

            if (world.canMove(this)) {
                this._move('y', 1);
            }
        } else if (activeKeys.has('ArrowLeft')) {
            this._turn(Direction.LEFT);

            if (world.canMove(this)) {
                this._move('x', -1);
            }
        }
    }

    _turn(direction) {
        this.direction = direction;
    }

    _move(axis, value) {
        this[axis] += this.speed * value;
        this.animationFrame ^= 1;
    }
}