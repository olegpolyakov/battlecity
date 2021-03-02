export default class Tank {
    direction = 0;
    x = 100;
    y = 100;
    animationFrame = 0;
    frames = [
        [0 * 16, 0 * 16, 16, 16],
        [1 * 16, 0 * 16, 16, 16],
        [6 * 16, 0 * 16, 16, 16],
        [7 * 16, 0 * 16, 16, 16],
        [4 * 16, 0 * 16, 16, 16],
        [5 * 16, 0 * 16, 16, 16],
        [2 * 16, 0 * 16, 16, 16],
        [3 * 16, 0 * 16, 16, 16]
    ];

    get sprite() {
        return this.frames[this.direction * 2 + this.animationFrame];
    }

    update(activeKeys) {
        if (activeKeys.has('ArrowUp')) {
            this._move(0, 'y', -1);
        } else if (activeKeys.has('ArrowRight')) {
            this._move(1, 'x', 1);
        } else if (activeKeys.has('ArrowDown')) {
            this._move(2, 'y', 1);
        } else if (activeKeys.has('ArrowLeft')) {
            this._move(3, 'x', -1);
        }
    }

    _move(direction, axis, value) {
        this.direction = direction;
        this[axis] += value;
        this.animationFrame ^= 1;
    }
}