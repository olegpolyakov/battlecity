import * as constants from './constants.js';
import Base from './base.js';
import Stage from './stage.js';
import Tank from './tank.js';

export default class World {
    constructor() {
        this.stage = null;
        this.base = new Base({
            x: constants.BASE_X,
            y: constants.BASE_Y,
            width: constants.UNIT_SIZE,
            height: constants.UNIT_SIZE,
            sprites: constants.BASE_SPRITES
        });
        this.player1Tank = new Tank({
            x: constants.PLAYER1_TANK_START_X,
            y: constants.PLAYER1_TANK_START_Y,
            width: constants.TANK_WIDTH,
            height: constants.TANK_HEIGHT,
            sprites: constants.PLAYER1_TANK_SPRITES,
            direction: constants.Direction.UP,
            speed: constants.TANK_SPEED
        });
        this.player2Tank = null;
        this.enemyTanks = [];
    }

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

    get objects() {
        return [this.base, this.player1Tank, ...this.stage.objects];
    }

    setStage(data) {
        this.stage = new Stage(data);
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
        const collision = this.getCollision(object);

        return Boolean(collision);
    }

    getCollision(object) {
        const collisionObject = this._getCollisionObject(object);

        if (collisionObject) {
            collisionObject.debug = true;

            return { object: collisionObject };
        }
    }

    _getCollisionObject(object) {
        return this.stage.objects
            .find(block => block && this._haveCollision(object, block));
    }

    _haveCollision(a, b) {
        return (
            a.left < b.right &&
            a.right > b.left &&
            a.top < b.bottom &&
            a.bottom > b.top
        );
    }
}