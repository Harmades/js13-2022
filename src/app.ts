import { Settings } from "./settings";
import { floor } from "./alias";
import { Logo } from "./logo";
import { Renderer } from "./renderer";

let tickLength = Settings.engineTimeResolution;
let lastTick = performance.now();
let lastRender = lastTick;
const logo = new Logo();

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
    logo.update(delta);
}

function render() {
    Renderer.clear();
    logo.render();
}

loop(0)