import { drawImageRepeated, Renderer } from "./renderer";
import { Sprite } from "./sprite";

export type Background = Sprite;

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

export function update(): void {}

export function render(renderer: Renderer, background: Background): void {
    drawImageRepeated(renderer, background);
}
