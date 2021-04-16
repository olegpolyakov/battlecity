import { ENEMY_TANK_START_POSITIONS, ENEMY_TANK_SPRITES, ENEMY_TANK_SPEED, ENEMY_TANK_TURN_TIMER_THRESHOLD } from './constants.js';
import { getDirectionForKeys, getAxisForDirection, getValueForDirection } from './utils.js';
import Tank from './tank.js';

export default class EnemyTank extends Tank {
    static createRandom() {
        const random = Math.floor(Math.random() * 3);
        const [x, y] = ENEMY_TANK_START_POSITIONS[random];
        const sprites = ENEMY_TANK_SPRITES[0];

        return new EnemyTank({ x, y, sprites });
    }

    constructor(args) {
        super(args);

        this.type = 'enemyTank';
        this.direction = Tank.Direction.DOWN;
        this.x = 0;
        this.y = 0;
        this.speed = ENEMY_TANK_SPEED;
        this.sprites = ENEMY_TANK_SPRITES[0];

        this.turnTimer = 0;
    }

    setPosition(positionIndex) {
        this.x = ENEMY_TANK_START_POSITIONS[positionIndex][0];
        this.y = ENEMY_TANK_START_POSITIONS[positionIndex][1];
    }

    update({ world, frameDelta }) {
        if (this.isDestroyed) {
            world.objects.delete(this);
        }

        const direction = this.direction;
        const axis = getAxisForDirection(direction);
        const value = getValueForDirection(direction);

        this._move(axis, value);
        this._animate(frameDelta);

        const isOutOfBounds = world.isOutOfBounds(this);
        const hasCollision = world.hasCollision(this);

        if (isOutOfBounds || hasCollision) {
            this._move(axis, -value);

            if (this._shouldTurn(frameDelta)) {
                this._turnRandomly();
            }
        }
    }

    hit(bullet) {
        if (this.isDestroyed) return;

        this.isDestroyed = true;
    }

    _shouldTurn(frameDelta) {
        this.turnTimer += frameDelta;

        return this.turnTimer > ENEMY_TANK_TURN_TIMER_THRESHOLD;
    }

    _turnRandomly() {
        const randomDirection = Math.floor(Math.random() * 4);

        this.turnTimer = 0;
        this._turn(randomDirection);
    }
}