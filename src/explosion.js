import { BULLET_EXPLOSION_WIDTH, BULLET_EXPLOSION_HEIGHT, BULLET_EXPLOSION_SPEED, BULLET_EXPLOSION_SPRITES } from './constants.js';
import GameObject from './game-object.js';

export default class Explosion extends GameObject {
    constructor(args) {
        super(args);

        this.type = 'explosion';
        this.width = BULLET_EXPLOSION_WIDTH;
        this.height = BULLET_EXPLOSION_HEIGHT;
        this.speed = BULLET_EXPLOSION_SPEED;
        this.sprites = BULLET_EXPLOSION_SPRITES;
        this.isDestroyed = false;
    }

    get sprite() {
        return this.sprites[this.animationFrame];
    }

    update({ world, frameDelta }) {
        if (this.animationFrame < 3) {
            this._animate(frameDelta);
        } else {
            this._destroy(world);
        }
    }

    _animate(frameDelta) {
        this.frames += frameDelta;

        if (this.frames > 50) {
            this.animationFrame = (this.animationFrame + 1) % 4;
            this.frames = 0;
        }
    }

    _destroy(world) {
        this.isDestroyed = true;
        world.objects.delete(this);
    }
}