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
        this.renderPlayer1Tank(world.player1Tank);
    }

    renderPlayer1Tank(player1Tank) {
        this.context.drawImage(
            this.sprite.image,
            ...player1Tank.sprite,
            player1Tank.x, player1Tank.y, 16, 16
        );
    }

    clearScreen() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}