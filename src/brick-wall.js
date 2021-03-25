import { BRICK_WALL_SPRITES } from './constants.js';
import Wall from './wall.js';

export default class BrickWall extends Wall {
    constructor(args) {
        super(args);

        this.sprites = BRICK_WALL_SPRITES;
    }

    hit(bullet) {
        console.log('HIT', this, bullet);
    }
}