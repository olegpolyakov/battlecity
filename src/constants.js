export const NUMBER_OF_UNITS = 13;
export const TILE_SIZE = 16;
export const UNIT_SIZE = 32;
export const WORLD_SIZE = NUMBER_OF_UNITS * UNIT_SIZE;

export const Keys = {
    UP: 'ArrowUp',
    RIGHT: 'ArrowRight',
    DOWN: 'ArrowDown',
    LEFT: 'ArrowLeft'
};

export const Direction = {
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3
};

export const ObjectType = {
    BASE: 0,
    BRICK_WALL: 1,
    STEEL_WALL: 2,
    TREE: 3,
    WATER: 4,
    ICE: 5
};

export const BASE_X = 6 * UNIT_SIZE;
export const BASE_Y = 12 * UNIT_SIZE;

export const PLAYER1_TANK_START_X = 4 * UNIT_SIZE;
export const PLAYER1_TANK_START_Y = 12 * UNIT_SIZE;

export const TANK_WIDTH = UNIT_SIZE;
export const TANK_HEIGHT = UNIT_SIZE;
export const TANK_SPEED = 2;
export const TANK_TURN_THRESHOLD = 8;

export const BASE_SPRITES = [
    [19 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [20 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
];

export const PLAYER1_TANK_SPRITES = [
    [0 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [1 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [6 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [7 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [4 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [5 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [2 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [3 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
];

export const BRICK_WALL_SPRITES = [
    [16 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // full
    [17 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // right
    [18 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // bottom
    [19 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // left
    [24 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // top
];

export const STEEL_WALL_SPRITES = [
    [16 * UNIT_SIZE, 4.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // full
    [17 * UNIT_SIZE, 4.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // right
    [18 * UNIT_SIZE, 4.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // bottom
    [19 * UNIT_SIZE, 4.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // left
    [20 * UNIT_SIZE, 4.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // top
];