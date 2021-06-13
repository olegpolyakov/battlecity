import { TANK_EXPLOSION_ANIMATION_SPEED, TANK_EXPLOSION_SPRITES } from './constants.js';
import Explosion from './explosion.js';

export default class TankExplosion extends Explosion {
    constructor(args) {
        super(args);

        this.sprites = TANK_EXPLOSION_SPRITES;
        this.animationSpeed = TANK_EXPLOSION_ANIMATION_SPEED;
    }

    get x() {
        return super.x - this.width * 0.5;
    }

    get y() {
        return super.y - this.height * 0.5;
    }

    get width() {
        return this.sprite && this.sprite[2];
    }

    get height() {
        return this.sprite && this.sprite[3];
    }
}