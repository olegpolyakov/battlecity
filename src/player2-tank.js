import { Key, PLAYER2_TANK_POSITION, PLAYER2_TANK_SPRITES } from './constants.js';
import PlayerTank from './player-tank.js';

export default class Player2Tank extends PlayerTank {
    constructor(args) {
        super(args);

        this.type = 'player2Tank';
        this.x = PLAYER2_TANK_POSITION[0];
        this.y = PLAYER2_TANK_POSITION[1];
        this.sprites = PLAYER2_TANK_SPRITES;
        this.movementKeys = [
            Key.PLAYER2_UP,
            Key.PLAYER2_RIGHT,
            Key.PLAYER2_DOWN,
            Key.PLAYER2_LEFT
        ];
        this.fireKeys = [
            Key.PLAYER2_FIRE,
        ];
    }
}