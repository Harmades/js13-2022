import { Settings } from "./settings";
import { floor } from "./alias";
import * as Renderer from "./renderer";
import * as Logo from "./logo";

let tickLength = Settings.engineTimeResolution;
let lastTick = performance.now();
let lastRender = lastTick;

Logo.create();
Renderer.create();

function loop(tFrame: number) {
    window.requestAnimationFrame(t => loop(t));
    var nextTick = lastTick + tickLength;
    var numTicks = 0;

    if (tFrame > nextTick) {
        var elapsed = tFrame - lastTick;
        numTicks = floor(elapsed / tickLength);
    }

    for (var i = 0; i < numTicks; i++) {
        lastTick += tickLength;
        update(tickLength / 1000);
    }

    render();
    lastRender = tFrame;
}

function update(delta: number) {
    Logo.update(delta);
}

function render() {
    Renderer.clear();
    Logo.render();
}

loop(0)