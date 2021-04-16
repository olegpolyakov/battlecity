import { STAGE_SIZE, TILE_SIZE } from './constants.js';
import Base from './base.js';
import BrickWall from './brick-wall.js';
import SteelWall from './steel-wall.js';
import PlayerTank from './player-tank.js';
import EnemyTank from './enemy-tank.js';

export default class Stage {
    static TerrainType = {
        BRICK_WALL: 1,
        STEEL_WALL: 2,
        TREE: 3,
        WATER: 4,
        ICE: 5
    };

    static createObject(type, args) {
        switch (type) {
            case Stage.TerrainType.BRICK_WALL: return new BrickWall(args);
            case Stage.TerrainType.STEEL_WALL: return new SteelWall(args);
        }
    }

    static createTerrain(map) {
        const objects = [];

        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map.length; j++) {
                const value = map[j][i];

                if (value) {
                    const object = Stage.createObject(value, {
                        x: i * TILE_SIZE,
                        y: j * TILE_SIZE
                    });

                    objects.push(object);
                }
            }
        }

        return objects;
    }

    static createEnemies(types) {
        return types.map(type => new EnemyTank({ type }));
    }

    constructor(data) {
        this.base = new Base();
        this.playerTank = new PlayerTank();
        this.enemies = Stage.createEnemies(data.enemies);
        this.terrain = Stage.createTerrain(data.map);
        this.enemyTankCount = 0;
        this.enemyTankTimer = 0;
        this.enemyTankPositionIndex = 0;


        this.objects = new Set([
            this.base,
            this.playerTank,
            ...this.terrain
        ]);

    }

    get width() {
        return STAGE_SIZE;
    }

    get height() {
        return STAGE_SIZE;
    }

    get top() {
        return 0;
    }

    get right() {
        return this.width;
    }

    get bottom() {
        return this.height;
    }

    get left() {
        return 0;
    }

    update(input, frameDelta) {
        const state = {
            input,
            frameDelta,
            world: this
        };

        if (this._shouldAddEnemyTank(frameDelta)) {
            this._addEnemyTank();
        }

        this.objects.forEach(object => object.update(state));
    }

    isOutOfBounds(object) {
        return (
            object.top < this.top ||
            object.right > this.right ||
            object.bottom > this.bottom ||
            object.left < this.left
        );
    }

    hasCollision(object) {
        const collision = this.getCollision(object);

        return Boolean(collision);
    }

    getCollision(object) {
        const collisionObjects = this._getCollisionObjects(object);

        if (collisionObjects.size > 0) {
            return { objects: collisionObjects };
        }
    }

    _getCollisionObjects(object) {
        const objects = new Set();

        for (const other of this.objects) {
            if (other !== object && this._haveCollision(object, other)) {
                objects.add(other);
            }
        }

        return objects;
    }

    _haveCollision(a, b) {
        return (
            a.left < b.right &&
            a.right > b.left &&
            a.top < b.bottom &&
            a.bottom > b.top
        );
    }

    _shouldAddEnemyTank(frameDelta) {
        this.enemyTankTimer += frameDelta;

        return this.enemyTankTimer > 1000 && this.enemyTankCount < 4;
    }

    _addEnemyTank() {
        const tank = this.enemies.shift();

        if (tank) {
            tank.setPosition(this.enemyTankPositionIndex);

            this.enemyTankCount += 1;
            this.enemyTankTimer = 0;
            this.enemyTankPositionIndex = (this.enemyTankPositionIndex + 1) % 3;

            this.objects.add(tank);
        }
    }

    _removeEnemyTank(enemyTank) {
        this.objects.delete(enemyTank);
        this.enemyTankCount -= 1;
    }
}