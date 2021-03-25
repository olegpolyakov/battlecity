import Stage from './stage.js';

export default class Game {
    constructor({ input, view, stages }) {
        this.input = input;
        this.view = view;
        this.stages = stages;
        this.player1 = null;
        this.player2 = null;
        this.stage = null;
        this.stageIndex = 0;
        this.frames = 0;
        this.lastFrame = 0;

        this.loop = this.loop.bind(this);
    }

    async init() {
        this.view.init();
    }

    start() {
        this.stage = new Stage(this.stages[this.stageIndex]);

        requestAnimationFrame(this.loop);
    }

    loop(currentFrame) {
        const frameDelta = currentFrame - this.lastFrame;

        this.stage.update(this.input, frameDelta);
        this.view.update(this.stage);
        this.frames = 0;

        this.lastFrame = currentFrame;

        requestAnimationFrame(this.loop);
    }
}