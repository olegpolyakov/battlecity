import { TILE_SIZE, TANK_WIDTH, TANK_HEIGHT, TANK_SPEED, TANK_TURN_THRESHOLD } from './constants.js';
import { getAxisForDirection } from './utils.js';
import GameObject from './game-object.js';
import Bullet from './bullet.js';

export default class Tank extends GameObject {
    constructor(args) {
        super(args);

        this.width = TANK_WIDTH;
        this.height = TANK_HEIGHT;
        this.speed = TANK_SPEED;
        this.bulletSpeed = 4;
        this.bullet = null;
        this.isDestroyed = false;
    }

    get sprite() {
        return this.sprites[this.direction * 2 + this.animationFrame];
    }

    _turn(direction) {
        const prevDirection = this.direction;

        this.direction = direction;

        if (direction === GameObject.Direction.UP || direction === GameObject.Direction.DOWN) {
            if (prevDirection === GameObject.Direction.RIGHT) {
                const value = TILE_SIZE - (this.x % TILE_SIZE);

                if (value <= TANK_TURN_THRESHOLD) {
                    this.x += value;
                }
            } else if (prevDirection === GameObject.Direction.LEFT) {
                const value = this.x % TILE_SIZE;

                if (value <= TANK_TURN_THRESHOLD) {
                    this.x -= value;
                }
            }
        } else {
            if (prevDirection === GameObject.Direction.UP) {
                const value = this.y % TILE_SIZE;

                if (value <= TANK_TURN_THRESHOLD) {
                    this.y -= value;
                }
            } else if (prevDirection === GameObject.Direction.DOWN) {
                const value = TILE_SIZE - (this.y % TILE_SIZE);

                if (value <= TANK_TURN_THRESHOLD) {
                    this.y += value;
                }
            }
        }
    }

    _move(axis, value) {
        this[axis] += value * this.speed;
    }

    _fire() {
        if (!this.bullet) {
            const [x, y] = this._getBulletStartingPosition();

            const bullet = new Bullet({
                x,
                y,
                tank: this,
                direction: this.direction,
                speed: this.bulletSpeed
            });

            this.bullet = bullet;
        }
    }

    _animate(frameDelta) {
        this.frames += frameDelta;

        if (this.frames > 20) {
            this.animationFrame ^= 1;
            this.frames = 0;
        }
    }

    _getBulletStartingPosition() {
        switch (this.direction) {
            case Tank.Direction.UP: return [this.left + 10, this.top];
            case Tank.Direction.RIGHT: return [this.right - 8, this.top + 12];
            case Tank.Direction.DOWN: return [this.left + 10, this.bottom - 8];
            case Tank.Direction.LEFT: return [this.left, this.top + 12];
        }
    }
}