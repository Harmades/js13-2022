import { floor } from "./alias";
import * as Renderer from "./renderer";
import { Settings } from "./settings";
import * as World from "./world";

let tickLength = Settings.engineTimeResolution;
let lastTick = performance.now();
let lastRender = lastTick;
const world = World.create();
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
    World.update(world);
}

function render(): void {
    Renderer.clear(renderer);
    World.render(renderer, world);
}

loop(0);
