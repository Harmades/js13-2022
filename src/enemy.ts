import { Rectangle } from "./rectangle";
import { drawRect, Renderer } from "./renderer";
import { Settings } from "./settings";
import { Pattern, Spawn, Spawns } from "./spawn";
import { cosine, createTween, linear, triangle } from "./tween";
import { create as createVector, Vector, zero } from "./vector";

export type Enemy = Rectangle & { tween: () => Vector };

export function create({ pattern, sy, amplitude, frequency }: Spawn): Enemy {
    let tween = (): Vector => zero();
    const from = createVector(Settings.width, sy);
    const to = createVector(0, sy);
    if (pattern == Pattern.Circular) {
        tween = createTween(
            from,
            to,
            (x: number): number => 1 + cosine(x, amplitude as number, frequency as number),
            4
        );
    }
    if (pattern == Pattern.Straight) {
        tween = createTween(from, to, linear, 4);
    }
    if (pattern == Pattern.Triangle) {
        tween = createTween(
            from,
            to,
            (x: number): number => 1 + triangle(x, amplitude as number, frequency as number),
            4
        );
    }
    return { x: from.x, y: from.y, w: 50, h: 50, tween };
}

export function update(enemy: Enemy): void {
    const position = enemy.tween();
    enemy.x = position.x;
    enemy.y = position.y;
}

export function load(): Enemy[] {
    return Spawns.map((s: Spawn) => create(s));
}

export function render(renderer: Renderer, enemy: Enemy) {
    drawRect(renderer, enemy, "#FFF000");
}
