export const NUMBER_OF_CELLS = 13;
export const CELL_SIZE = 48;
export const WORLD_SIZE = NUMBER_OF_CELLS * CELL_SIZE;

export const Direction = {
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3
};

export const TANK_WIDTH = CELL_SIZE;
export const TANK_HEIGHT = CELL_SIZE;
export const TANK_SPEED = 3;

export const PLAYER1_TANK_START_X = 4 * CELL_SIZE;
export const PLAYER1_TANK_START_Y = 12 * CELL_SIZE;

export const PLAYER1_TANK_SPRITES = [
    [0 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
    [1 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
    [6 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
    [7 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
    [4 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
    [5 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
    [2 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE],
    [3 * CELL_SIZE, 0 * CELL_SIZE, CELL_SIZE, CELL_SIZE]
];

export const BRICK_WALL_SPRITES = [
    [16 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE], // full
    [17 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE], // right
    [18 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE], // bottom
    [19 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE], // left
    [20 * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE], // top
];