import { Key, PLAYER1_TANK_POSITION, PLAYER1_TANK_SPRITES } from './constants.js';
import PlayerTank from './player-tank.js';

export default class Player1Tank extends PlayerTank {
    constructor(args) {
        super(args);

        this.type = 'player1Tank';
        this.x = PLAYER1_TANK_POSITION[0];
        this.y = PLAYER1_TANK_POSITION[1];
        this.sprites = PLAYER1_TANK_SPRITES;
        this.movementKeys = [
            Key.PLAYER1_UP,
            Key.PLAYER1_RIGHT,
            Key.PLAYER1_DOWN,
            Key.PLAYER1_LEFT,
        ];
        this.fireKeys = [
            Key.PLAYER1_FIRE,
        ];
    }
}