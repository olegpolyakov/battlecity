import { Direction, TILE_SIZE, TANK_WIDTH, TANK_HEIGHT, TANK_SPEED, TANK_TURN_THRESHOLD } from './constants.js';
import GameObject from './game-object.js';
import Bullet from './bullet.js';
import TankExplosion from './tank-explosion.js';

export default class Tank extends GameObject {
    constructor(args) {
        super(args);

        this.width = TANK_WIDTH;
        this.height = TANK_HEIGHT;
        this.speed = TANK_SPEED;
        this.bulletSpeed = 4;
        this.bullet = null;
        this.explosion = null;
    }

    get sprite() {
        return this.sprites[this.direction * 2 + this.animationFrame];
    }

    get isExploding() {
        return Boolean(this.explosion?.isExploding);
    }

    turn(direction) {
        const prevDirection = this.direction;

        this.direction = direction;

        if (direction === Direction.UP || direction === Direction.DOWN) {
            const deltaRight = this.x % TILE_SIZE;
            const deltaLeft = TILE_SIZE - deltaRight;

            if (prevDirection === Direction.RIGHT) {
                if (deltaRight >= TANK_TURN_THRESHOLD) {
                    this.x += deltaLeft;
                } else {
                    this.x -= deltaRight;
                }
            } else if (prevDirection === Direction.LEFT) {
                if (deltaLeft >= TANK_TURN_THRESHOLD) {
                    this.x -= deltaRight;
                } else {
                    this.x += deltaLeft;
                }
            }
        } else {
            const deltaBottom = this.y % TILE_SIZE;
            const deltaTop = TILE_SIZE - deltaBottom;

            if (prevDirection === Direction.UP) {
                if (deltaTop >= TANK_TURN_THRESHOLD) {
                    this.y -= deltaBottom;
                } else {
                    this.y += deltaTop;
                }
            } else if (prevDirection === Direction.DOWN) {
                if (deltaBottom >= TANK_TURN_THRESHOLD) {
                    this.y += deltaTop;
                } else {
                    this.y -= deltaBottom;
                }
            }
        }
    }

    animate(frameDelta) {
        this.frames += frameDelta;

        if (this.frames > 20) {
            this.animationFrame ^= 1;
            this.frames = 0;
        }
    }

    fire() {
        if (!this.bullet) {
            const [x, y] = this.getBulletStartingPosition();

            this.bullet = new Bullet({
                x,
                y,
                tank: this,
                direction: this.direction,
                speed: this.bulletSpeed
            });

            this.bullet.on('destroyed', () => {
                this.bullet = null;
            });

            this.emit('fire', this.bullet);
        }
    }

    hit() {
        this.explode();
        this.destroy();
    }

    explode() {
        if (this.isExploding) return;

        const [x, y] = this.getExplosionStartingPosition();

        this.explosion = new TankExplosion({
            x,
            y
        });

        this.emit('explode', this.explosion);
    }

    destroy() {
        this.isDestroyed = true;
        this.bullet = null;
        this.explosion = null;

        this.emit('destroyed', this);
    }

    getBulletStartingPosition() {
        switch (this.direction) {
            case Direction.UP: return [this.left + 12, this.top - 4];
            case Direction.RIGHT: return [this.right - 8, this.top + 12];
            case Direction.DOWN: return [this.left + 10, this.bottom - 8];
            case Direction.LEFT: return [this.left, this.top + 12];
        }
    }

    getExplosionStartingPosition() {
        return [
            this.left + this.width * 0.5,
            this.top + this.height * 0.5
        ];
    }
}