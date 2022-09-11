import { drawImageRepeated, Renderer } from "./renderer";
import { Settings } from "./settings";

let x = 0;

export function update(): void {
    x -= Settings.borderSpeed * Settings.delta;
    if (x <= -3 * Settings.worldWidth) {
        x = 0;
    }
}

export function render(renderer: Renderer): void {
    drawImageRepeated(
        renderer,
        "assets/border1.png",
        {
            x,
            y: Settings.worldHeight - Settings.tileSize,
            w: 4 * Settings.worldWidth,
            h: Settings.tileSize,
        },
        false
    );
    drawImageRepeated(
        renderer,
        "assets/border1.png",
        {
            x,
            y: 0,
            w: 4 * Settings.worldWidth,
            h: Settings.tileSize,
        },
        true
    );
}
