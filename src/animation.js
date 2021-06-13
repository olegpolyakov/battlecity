export default class Animation {
    constructor({ sprites = [], speed = 0 }) {
        this.sprites = sprites;
        this.speed = speed;
        this.frame = 0;
        this.frames = 0;
    }

    run(frameDelta) {
        this.frames += frameDelta;

        if (this.frames > this.speed) {
            this.frame = (this.frame + 1) % (this.sprites.length + 1);
            this.frames = 0;
        }
    }
}