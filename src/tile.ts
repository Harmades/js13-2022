import { Rectangle } from "./rectangle";
import { Vector } from "./vector";
import * as Renderer from "./renderer";
import { getCollision } from "./physics";
import { player } from "./player";

export type Tile = Rectangle & Vector;

export const tile: Tile = {
    x: 200,
    y: 200,
    w: 50,
    h: 50
};

let color = "#FF0000";

export function create() {

}

export function update() {
    if (getCollision(player, tile) != null) {
        color = "#000000";
    } else {
        color = "#FF0000";
    }
}

export function render() {
    Renderer.drawRect(tile.x, tile.y, tile.w, tile.h, color);
}