import { TANK_EXPLOSION_WIDTH, TANK_EXPLOSION_HEIGHT, TANK_EXPLOSION_ANIMATION_SPEED, TANK_EXPLOSION_SPRITES } from './constants.js';
import Explosion from './explosion.js';

export default class TankExplosion extends Explosion {
    constructor(args) {
        super(args);

        this.width = TANK_EXPLOSION_WIDTH;
        this.height = TANK_EXPLOSION_HEIGHT;
        this.sprites = TANK_EXPLOSION_SPRITES;
        this.animationSpeed = TANK_EXPLOSION_ANIMATION_SPEED;
    }
}