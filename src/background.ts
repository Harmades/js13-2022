import { drawImageRepeated, Renderer } from "./renderer";
import { Settings } from "./settings";
import { Sprite } from "./sprite";

export type Background = Sprite;

let x = 0;

export function create(): Background {
    return {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        sprite: "assets/basic_cobble.png",
        ox: 0,
        oy: 0,
    };
}

export function update(): void {
    x -= Settings.backgroundSpeed * Settings.delta;
    if (x <= -3 * Settings.worldWidth) {
        x = 0;
    }
}

export function render(renderer: Renderer, background: Background): void {
    drawImageRepeated(
        renderer,
        background.sprite,
        {
            x,
            y: 0,
            w: 4 * Settings.worldWidth,
            h: Settings.worldHeight,
        },
        false
    );
}
