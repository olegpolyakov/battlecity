import { CELL_SIZE, Direction } from './constants.js';
import Tank from './Tank.js';

export default class World {
    level = null;
    player1Tank = new Tank();
    player2Tank = null;
    enemyTanks = [];

    get size() {
        return this.level[0].length * CELL_SIZE;
    }

    setLevel(data) {
        this.level = data.map((blocks, y) => {
            return blocks.map((block, x) => {
                return {
                    x: x * CELL_SIZE,
                    y: y * CELL_SIZE,
                    width: CELL_SIZE,
                    height: CELL_SIZE,
                    sprite: block
                };
            });
        });
    }

    update(activeKeys) {
        this.player1Tank.update(this, activeKeys);
    }

    canMove(object) {
        const { direction, x, y, width, height } = object;

        if (direction === Direction.UP) {
            const nextY = y - 1;
            const objectOnPath = this._getObjectOnY(object, nextY);

            return !objectOnPath && nextY > 0;
        } else if (direction === Direction.RIGHT) {
            const nextX = x + 1;
            const objectOnPath = this._getObjectOnX(object, nextX);

            return !objectOnPath && (nextX + width) < this.size;
        } else if (direction === Direction.DOWN) {
            const nextY = y + 1;
            const objectOnPath = this._getObjectOnY(object, nextY);

            return !objectOnPath && (nextY + height) < this.size;
        } else if (direction === Direction.LEFT) {
            const nextX = x - 1;
            const objectOnPath = this._getObjectOnX(object, nextX);

            return !objectOnPath && nextX > 0;
        }
    }

    _getObjectOnX(object, nextX) {
        return this.level
            .reduce((result, blocks) => result.concat(...blocks), [])
            .find(block =>
                block.sprite > 0 &&
                (
                    isSame(object.y, block.y) ||
                    isBetween(object.y, block.y, block.y + block.height) ||
                    isBetween(object.y + object.height, block.y, block.y + block.height)
                )
                &&
                (
                    isSame(nextX, block.x) ||
                    isBetween(nextX, block.x, block.x + block.width) ||
                    isBetween(nextX + object.width, block.x, block.x + block.width)
                )
            );
    }

    _getObjectOnY(object, nextY) {
        return this.level
            .reduce((result, blocks) => result.concat(...blocks), [])
            .find(block =>
                block.sprite > 0 &&
                (
                    isSame(nextY, block.y) ||
                    isBetween(nextY, block.y, block.y + block.height) ||
                    isBetween(nextY + object.height, block.y, block.y + block.height)
                )
                &&
                (
                    isSame(object.x, block.x) ||
                    isBetween(object.x, block.x, block.x + block.width) ||
                    isBetween(object.x + object.width, block.x, block.x + block.width)
                )
            );
    }
}

function isBetween(p, p1, p2) {
    return p > p1 && p < p2;
}

function isSame(p1, p2) {
    return p1 === p2;
}