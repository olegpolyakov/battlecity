import { Key } from './constants.js';

export default class Input {
    constructor() {
        this.keys = new Set();
        this.init();
    }

    init() {
        document.addEventListener('keydown', event => {
            switch (event.code) {
                case Key.PLAYER1_UP:
                case Key.PLAYER1_LEFT:
                case Key.PLAYER1_DOWN:
                case Key.PLAYER1_RIGHT:
                case Key.PLAYER1_FIRE:
                case 'Enter':
                case Key.PLAYER2_UP:
                case Key.PLAYER2_LEFT:
                case Key.PLAYER2_DOWN:
                case Key.PLAYER2_RIGHT:
                case Key.PLAYER2_FIRE:
                    event.preventDefault();
                    this.keys.add(event.code);
            }
        });

        document.addEventListener('keyup', event => {
            switch (event.code) {
                case Key.PLAYER1_UP:
                case Key.PLAYER1_LEFT:
                case Key.PLAYER1_DOWN:
                case Key.PLAYER1_RIGHT:
                case Key.PLAYER1_FIRE:
                case 'Enter':
                case Key.PLAYER2_UP:
                case Key.PLAYER2_LEFT:
                case Key.PLAYER2_DOWN:
                case Key.PLAYER2_RIGHT:
                case Key.PLAYER2_FIRE:
                    event.preventDefault();
                    this.keys.delete(event.code);
            }
        });
    }

    has(...arg) {
        return Array.isArray(arg) ?
            arg.some(key => this.keys.has(key)) :
            this.keys.has(arg);
    }
}