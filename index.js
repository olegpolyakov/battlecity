import World from './src/world.js';
import View from './src/view.js';
import Game from './src/game.js';
import Sprite from './src/sprite.js';
import levels from './data/levels.js';
import spriteMap from './data/sprite-map.js';

const canvas = document.querySelector('canvas');
const sprite = new Sprite('./assets/sprite.png', spriteMap);

const game = new Game({
    world: new World(),
    view: new View(canvas, sprite),
    levels
});

game.init().then(() => game.start());

console.log(game);