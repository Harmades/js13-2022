import { Rectangle } from "./rectangle";
import { drawRect, Renderer } from "./renderer";
import { Settings } from "./settings";
import { Pattern, Spawn, Spawns } from "./spawn";
import { createTween, linear, rectangular, sine, triangle } from "./tween";
import { create as createVector } from "./vector";

export type Enemy = Rectangle & {
    tweenX: () => number;
    tweenY: () => number;
    color: string;
};

export function create({ pattern, sy, dy, frequency, color }: Spawn): Enemy {
    const time = 4;
    const from = createVector(Settings.width, sy);
    const to = createVector(0, dy);
    let tweenX = createTween(from.x, to.x, linear, time);
    let tweenY = (): number => 0;
    if (pattern == Pattern.Circular) {
        tweenY = createTween(
            from.y,
            to.y,
            (x: number): number => 0.5 * (1 + sine(x, 1, frequency as number)),
            time
        );
    }
    if (pattern == Pattern.Straight) {
        tweenY = createTween(from.y, to.y, linear, time);
    }
    if (pattern == Pattern.Triangle) {
        tweenY = createTween(
            from.y,
            to.y,
            (x: number): number => 0.5 * (1 + triangle(x, 1, frequency as number)),
            time
        );
    }
    if (pattern == Pattern.Rectangle) {
        tweenY = createTween(
            from.y,
            to.y,
            (x: number): number => 0.5 * (1 + rectangular(x, 1, frequency as number)),
            time
        );
    }
    return { x: from.x, y: from.y, w: 50, h: 50, color, tweenX, tweenY };
}

export function update(enemy: Enemy): void {
    enemy.x = enemy.tweenX();
    enemy.y = enemy.tweenY();
}

export function load(): Enemy[] {
    return Spawns.map((s: Spawn) => create(s));
}

export function render(renderer: Renderer, enemy: Enemy) {
    drawRect(renderer, enemy, enemy.color);
}
