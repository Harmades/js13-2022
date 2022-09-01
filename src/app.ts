import { floor } from "./alias";
import * as Enemies from "./enemies";
import * as Physics from "./physics";
import * as Player from "./player";
import * as Renderer from "./renderer";
import { Settings } from "./settings";

let tickLength = Settings.engineTimeResolution;
let lastTick = performance.now();
let lastRender = lastTick;

const player = Player.create();
const enemies = Enemies.create();
const renderer = Renderer.create();

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
    Enemies.update(enemies);
    Physics.update(player, enemies);
}

function render(): void {
    Renderer.clear(renderer);
    Player.render(renderer, player);
    Enemies.render(renderer, enemies);
}

loop(0);
