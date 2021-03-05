export default class View {
    constructor(canvas, sprite) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.sprite = sprite;
    }

    async init() {
        await this.sprite.load();
    }

    update(world) {
        this.clearScreen();
        this.renderLevel(world.level);
        this.renderPlayer1Tank(world.player1Tank);
    }

    renderLevel(level) {
        for (let i = 0; i < level.length; i++) {
            for (let j = 0; j < level[i].length; j++) {
                const block = level[i][j];
                const [x, y, width, height] = this.sprite.get(block.sprite);

                this.context.drawImage(
                    this.sprite.image,
                    x, y, width, height,
                    block.x, block.y, width, height
                );
            }
        }
    }

    renderPlayer1Tank(player1Tank) {
        const [x, y, width, height] = player1Tank.sprite;

        this.context.drawImage(
            this.sprite.image,
            x, y, width, height,
            player1Tank.x, player1Tank.y, width, height
        );
    }

    clearScreen() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}