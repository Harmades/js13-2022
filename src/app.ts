import { floor } from "./alias";
import * as Player from "./player";
import * as Renderer from "./renderer";
import { Settings } from "./settings";
import * as Tile from "./tile";

let tickLength = Settings.engineTimeResolution;
let lastTick = performance.now();
let lastRender = lastTick;

Player.create();
Renderer.create();
Tile.create();

function loop(tFrame: number) {
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

function update() {
    Player.update();
    Tile.update();
}

function render() {
    Renderer.clear();
    Player.render();
    Tile.render();
}

loop(0);
