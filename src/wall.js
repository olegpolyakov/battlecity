import GameObject from './game-object.js';

export default class Wall extends GameObject {
    constructor({ type, ...rest }) {
        super(rest);

        this.type = type;
    }

    get sprite() {
        return this.sprites[0];
    }
}