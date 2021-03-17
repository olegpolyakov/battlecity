import * as constants from './constants.js';
import Wall from './wall.js';

export default class Stage {
    static createObject(args) {
        switch (args.type) {
            case constants.ObjectType.BRICK_WALL: return new Wall({
                ...args,
                sprites: constants.BRICK_WALL_SPRITES
            });

            case constants.ObjectType.STEEL_WALL: return new Wall({
                ...args,
                sprites: constants.STEEL_WALL_SPRITES
            });
        }
    }

    constructor(data) {
        this.debug = true;
        this.objects = data.map.map((values, y) => {
            return values.map((value, x) => {
                return value && Stage.createObject({
                    type: value,
                    x: x * constants.TILE_SIZE,
                    y: y * constants.TILE_SIZE,
                    width: constants.TILE_SIZE,
                    height: constants.TILE_SIZE
                });
            });
        }).reduce((objects, array) => objects.concat(...array.filter(v => !!v)), []);
    }
}