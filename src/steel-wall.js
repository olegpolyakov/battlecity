import { STEEL_WALL_SPRITES } from './constants.js';
import Wall from './wall.js';

export default class SteelWall extends Wall {
    constructor(args) {
        super(args);

        this.sprites = STEEL_WALL_SPRITES;
    }

    hit(bullet) {
        if (this.isDestroyed) return;
    }
}