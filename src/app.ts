import { floor } from "./alias";
import * as Enemy from "./enemy";
import * as Player from "./player";
import * as Renderer from "./renderer";
import { Settings } from "./settings";
import * as Tile from "./tile";

let tickLength = Settings.engineTimeResolution;
let lastTick = performance.now();
let lastRender = lastTick;

const player = Player.create();
const enemy = Enemy.create({
    x: Settings.width / 2,
    y: Settings.height / 2,
    dx: 0,
    dy: -100,
    w: 50,
    h: 50,
    pattern: Enemy.Pattern.Circular,
    y1: 0.1 * Settings.height,
    y2: 0.9 * Settings.height,
});
const renderer = Renderer.create();
const tile = Tile.create();

function loop(tFrame: number): void {
    window.requestAnimationFrame((t) => loop(t));
    var nextTick = lastTick + tickLength;
    var numTicks = 0;

    if (tFrame > nextTick) {
        var elapsed = tFrame - lastTick;
        numTicks = floor(elapsed / tickLength);
    }

    for (var i = 0; i < numTicks; i++) {
        lastTick += tickLength;
        update();
    }

    render();
    lastRender = tFrame;
}

function update(): void {
    Player.update(player);
    Tile.update(tile, player);
    Enemy.update(enemy);
}

function render(): void {
    Renderer.clear(renderer);
    Player.render(renderer, player);
    Tile.render(tile, renderer);
    Enemy.render(renderer, enemy);
}

loop(0);
