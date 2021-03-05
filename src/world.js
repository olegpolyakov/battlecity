import * as constants from './constants.js';
import Tank from './tank.js';
import Wall from './wall.js';

export default class World {
    level = null;
    player1Tank = new Tank({
        x: constants.PLAYER1_TANK_START_X,
        y: constants.PLAYER1_TANK_START_Y,
        width: constants.TANK_WIDTH,
        height: constants.TANK_HEIGHT,
        direction: constants.Direction.UP,
        speed: constants.TANK_SPEED,
        frames: constants.PLAYER1_TANK_SPRITES
    });
    player2Tank = null;
    enemyTanks = [];

    get width() {
        return constants.WORLD_SIZE;
    }

    get height() {
        return constants.WORLD_SIZE;
    }

    get top() {
        return 0;
    }

    get right() {
        return this.width;
    }

    get bottom() {
        return this.height;
    }

    get left() {
        return 0;
    }

    setLevel(data) {
        this.level = data.map((blocks, y) => {
            return blocks.map((block, x) => {
                return block > 0 ? new Wall({
                    x: x * constants.CELL_SIZE,
                    y: y * constants.CELL_SIZE,
                    width: constants.CELL_SIZE,
                    height: constants.CELL_SIZE,
                    sprite: block
                }) : null;
            });
        });
    }

    update(activeKeys) {
        this.player1Tank.update(this, activeKeys);
    }

    isOutOfBounds(object) {
        return (
            object.top < this.top ||
            object.right > this.right ||
            object.bottom > this.bottom ||
            object.left < this.left
        );
    }

    hasCollision(object) {
        const collisionObject = this._getCollisionObject(object);

        if (collisionObject) {
            collisionObject.debug = true;
        }

        return Boolean(collisionObject);
    }

    _getCollisionObject(object) {
        return this.level
            .reduce((result, blocks) => result.concat(...blocks), [])
            .find(block => block && this._objectsHaveCollision(object, block));
    }

    _objectsHaveCollision(a, b) {
        return (
            (
                (a.left >= b.left && a.left < b.right)
                ||
                (a.right > b.left && a.right <= b.right)
            )
            &&
            (
                (a.top >= b.top && a.top < b.bottom)
                ||
                (a.bottom > b.top && a.bottom <= b.bottom)
            )
        );
    }
}