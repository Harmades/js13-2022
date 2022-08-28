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
const enemies = Enemy.load();
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
    for (let enemy of enemies) {
        Enemy.update(enemy);
    }
}

function render(): void {
    Renderer.clear(renderer);
    Player.render(renderer, player);
    Tile.render(tile, renderer);
    for (let enemy of enemies) {
        Enemy.render(renderer, enemy);
    }
}

loop(0);
