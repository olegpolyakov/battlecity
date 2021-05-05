import GameObject from './game-object.js';

export default class Explosion extends GameObject {
    constructor(args) {
        super(args);

        this.type = 'explosion';
    }

    get sprite() {
        return this.sprites[this.animationFrame];
    }

    get isExploding() {
        return this.animationFrame < this.sprites.length;
    }

    update({ world, frameDelta }) {
        if (this.isExploding) {
            this.animate(frameDelta);
        } else {
            this.destroy();
        }
    }

    animate(frameDelta) {
        this.frames += frameDelta;

        if (this.frames > 50) {
            this.animationFrame = (this.animationFrame + 1) % this.sprites.length + 1;
            this.frames = 0;
        }
    }

    hit() {
        return;
    }

    destroy() {
        this.emit('destroyed', this);
    }
}