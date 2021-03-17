import { Direction, Keys, TILE_SIZE, TANK_TURN_THRESHOLD } from './constants.js';
import { getDirectionForKeys, getAxisForDirection, getValueForDirection } from './utils.js';
import GameObject from './game-object.js';

export default class Tank extends GameObject {
    constructor({ direction, speed, ...rest }) {
        super(rest);

        this.direction = direction;
        this.speed = speed;
    }

    get sprite() {
        return this.sprites[this.direction * 2 + this.animationFrame];
    }

    update(world, activeKeys) {
        if (
            activeKeys.has(Keys.UP) ||
            activeKeys.has(Keys.RIGHT) ||
            activeKeys.has(Keys.DOWN) ||
            activeKeys.has(Keys.LEFT)
        ) {
            const direction = getDirectionForKeys(activeKeys);

            this._turn(world, direction);
            this._move(world, direction);
        }
    }

    _turn(world, direction) {
        const prevDirection = this.direction;
        this.direction = direction;

        if (direction === Direction.UP || direction === Direction.DOWN) {
            if (prevDirection === Direction.RIGHT) {
                const value = TILE_SIZE - (this.x % TILE_SIZE);

                if (value <= TANK_TURN_THRESHOLD) {
                    this.x += value;
                }
            } else if (prevDirection === Direction.LEFT) {
                const value = this.x % TILE_SIZE;

                if (value <= TANK_TURN_THRESHOLD) {
                    this.x -= value;
                }
            }
        } else {
            if (prevDirection === Direction.UP) {
                const value = this.y % TILE_SIZE;

                if (value <= TANK_TURN_THRESHOLD) {
                    this.y -= value;
                }
            } else if (prevDirection === Direction.DOWN) {
                const value = TILE_SIZE - (this.y % TILE_SIZE);

                if (value <= TANK_TURN_THRESHOLD) {
                    this.y += value;
                }
            }
        }
    }

    _move(world, direction) {
        const axis = getAxisForDirection(direction);
        const value = getValueForDirection(direction);
        const delta = value * this.speed;

        this.animationFrame ^= 1;
        this[axis] += delta;

        const isOutOfBounds = world.isOutOfBounds(this);
        const hasCollision = world.hasCollision(this);

        if (isOutOfBounds || hasCollision) {
            this[axis] += -delta;
        }
    }
}