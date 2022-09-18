import { Key, Direction, PLAYER1_TANK_POSITION, PLAYER1_TANK_SPRITES, TANK_SPEED } from './constants.js';
import Tank from './tank.js';

export default class PlayerTank extends Tank {
    constructor(args) {
        super(args);

        this.direction = Direction.UP;
        this.speed = TANK_SPEED;
        this.movementKeys = [];
        this.fireKeys = [];
    }

    update({ input, frameDelta, world }) {
        if (input.has(...this.movementKeys)) {
            const direction = Tank.getDirectionForKeys(input.keys);
            const axis = Tank.getAxisForDirection(direction);
            const value = Tank.getValueForDirection(direction);

            this.turn(direction);
            this.move(axis, value);
            this.animate(frameDelta);

            const isOutOfBounds = world.isOutOfBounds(this);
            const hasCollision = world.hasCollision(this);

            if (isOutOfBounds || hasCollision) {
                this.move(axis, -value);
            }
        }

        if (input.has(...this.fireKeys)) {
            this.fire();
        }
    }
}