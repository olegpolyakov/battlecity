import { Keys, ENEMY_TANK_START_POSITIONS, ENEMY_TANK_SPRITES, TANK_SPEED } from './constants.js';
import { getAxisForDirection, getValueForDirection } from './utils.js';
import Tank from './tank.js';

export default class EnemyTank extends Tank {
    static createRandom() {
        const random = Math.floor(Math.random() * 3);
        const [x, y] = ENEMY_TANK_START_POSITIONS[random];
        const sprites = ENEMY_TANK_SPRITES[random];

        return new EnemyTank({ x, y, sprites });
    }

    constructor(args) {
        super(args);

        this.direction = Tank.Direction.DOWN;
        this.speed = TANK_SPEED;
    }

    update({ world, input, frameDelta }) {

    }
}