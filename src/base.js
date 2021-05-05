import { BASE_POSITION, BASE_WIDTH, BASE_HEIGHT, BASE_SPRITES } from './constants.js';
import GameObject from './game-object.js';

export default class Base extends GameObject {
    constructor(args) {
        super(args);

        this.x = BASE_POSITION[0];
        this.y = BASE_POSITION[1];
        this.width = BASE_WIDTH;
        this.height = BASE_HEIGHT;
        this.sprites = BASE_SPRITES;
        this.destroyed = false;
    }

    get sprite() {
        return this.sprites[Number(this.destroyed)];
    }

    hit() {
        this.emit('destroyed', this);
    }
}