export default class Wall {
    constructor({ x, y, width, height, sprite }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = sprite;
    }

    get top() {
        return this.y;
    }

    get right() {
        return this.x + this.width;
    }

    get bottom() {
        return this.y + this.height;
    }

    get left() {
        return this.x;
    }
}