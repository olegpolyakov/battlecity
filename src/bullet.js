import { BULLET_WIDTH, BULLET_HEIGHT, BULLET_SPRITES } from './constants.js';
import { getAxisForDirection, getValueForDirection } from './utils.js';
import GameObject from './game-object.js';
import Explosion from './explosion.js';

export default class Bullet extends GameObject {
    constructor({ tank, direction, speed, ...args }) {
        super(args);

        this.type = 'bullet';
        this.width = BULLET_WIDTH;
        this.height = BULLET_HEIGHT;
        this.sprites = BULLET_SPRITES;
        this.direction = direction;
        this.speed = speed;
        this.tank = tank;
        this.explosion = null;
    }

    get sprite() {
        return this.sprites[this.direction];
    }

    update({ world }) {
        const axis = getAxisForDirection(this.direction);
        const value = getValueForDirection(this.direction);

        this._move(axis, value);

        const isOutOfBounds = world.isOutOfBounds(this);
        const collision = world.getCollision(this);

        if (isOutOfBounds) {
            this._destroy(world);
        } else if (collision) {
            if (this._collide(collision.objects)) {
                this._destroy(world);
                console.log(world.objects);
            }
        }
    }

    _destroy(world) {
        this.speed = 0;

        if (!this.explosion) {
            const [x, y] = this._getExplosionStartingPosition();

            this.explosion = new Explosion({
                x,
                y
            });

            world.objects.add(this.explosion);
        } else if (this.explosion.exploded) {
            world.objects.delete(this.explosion);
            world.objects.delete(this);
            this.tank.bullet = null;
            this.explosion = null;
        }
    }

    _move(axis, value) {
        this[axis] += value * this.speed;
    }

    _collide(objects) {
        for (const object of objects) {
            if (object === this.tank || object === this.explosion) continue;

            object.hit(this);

            return true;
        }

        return false;
    }

    _getExplosionStartingPosition() {
        switch (this.direction) {
            case GameObject.Direction.UP: return [this.left - 10, this.top - 12];
            case GameObject.Direction.RIGHT: return [this.right - 16, this.top - 12];
            case GameObject.Direction.DOWN: return [this.left - 10, this.bottom - 16];
            case GameObject.Direction.LEFT: return [this.left - 16, this.top - 12];
        }
    }
}