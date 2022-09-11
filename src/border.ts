import { drawImageRepeated, Renderer } from "./renderer";
import { Settings } from "./settings";

export function update(): void {}

export function render(renderer: Renderer): void {
    drawImageRepeated(
        renderer,
        renderer.gameCanvas,
        "assets/border1.png",
        {
            x: 0,
            y: Settings.worldHeight - Settings.tileSize,
            w: Settings.worldWidth,
            h: Settings.tileSize,
        },
        false
    );
    drawImageRepeated(
        renderer,
        renderer.gameCanvas,
        "assets/border1.png",
        {
            x: 0,
            y: 0,
            w: Settings.worldWidth,
            h: Settings.tileSize,
        },
        true
    );
}
