import { getCollision } from "./physics";
import { Player } from "./player";
import { Rectangle } from "./rectangle";
import { drawRect, Renderer } from "./renderer";
import { Vector } from "./vector";

export type Tile = Rectangle & Vector;

let color = "#FF0000";

export function create(): Tile {
    return {
        x: 200,
        y: 200,
        w: 50,
        h: 50,
    };
}

export function update(tile: Tile, player: Player): void {
    if (getCollision(player, tile) != null) {
        color = "#000000";
    } else {
        color = "#FF0000";
    }
}

export function render(tile: Tile, renderer: Renderer): void {
    drawRect(renderer, tile, color);
}
