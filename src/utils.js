import { Direction } from './constants.js';

export function getDirectionForKeys(keys) {
    if (keys.has('ArrowUp')) {
        return Direction.UP;
    }

    if (keys.has('ArrowRight')) {
        return Direction.RIGHT;
    }

    if (keys.has('ArrowDown')) {
        return Direction.DOWN;
    }

    if (keys.has('ArrowLeft')) {
        return Direction.LEFT;
    }
}

export function getAxisForDirection(direction) {
    return direction % 2 === 0 ? 'y' : 'x';
}

export function getValueForDirection(direction) {
    switch (direction) {
        case Direction.UP: return -1;
        case Direction.RIGHT: return 1;
        case Direction.DOWN: return 1;
        case Direction.LEFT: return -1;
    }
}

export function getSideForDirection(direction) {
    switch (direction) {
        case Direction.UP: return 'top';
        case Direction.RIGHT: return 'right';
        case Direction.DOWN: return 'bottom';
        case Direction.LEFT: return 'left';
    }
}