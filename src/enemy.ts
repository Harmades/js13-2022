import { PI } from "./alias";
import { Rectangle } from "./rectangle";
import { drawRect, Renderer } from "./renderer";
import { Settings } from "./settings";
import { Speed } from "./speed";
import { rotate } from "./vector";

export enum Pattern {
    Straight,
    Triangle,
    Circular,
    Rectangle,
}

export type Enemy = Rectangle &
    Speed & {
        pattern: Pattern;
        y1: number;
        y2: number;
    };

export function create({ x, y, dx, dy, w, h, pattern, y1, y2 }: Enemy): Enemy {
    return { x, y, dx, dy, w, h, pattern, y1, y2 };
}

export function update(enemy: Enemy): void {
    if (enemy.pattern == Pattern.Straight) {
    }
    if (enemy.pattern == Pattern.Triangle) {
        if (enemy.y <= enemy.y1 || enemy.y >= enemy.y2) {
            enemy.dy = -enemy.dy;
        }
    }
    if (enemy.pattern == Pattern.Circular) {
        const speed = { x: enemy.dx, y: enemy.dy };
        rotate(speed, PI / 1200);
        speed.y += 0.1;
        enemy.dx = speed.x;
        enemy.dy = speed.y;
    }
    if (enemy.pattern == Pattern.Rectangle) {
    }
    enemy.x += enemy.dx * Settings.delta;
    enemy.y += enemy.dy * Settings.delta;
}

export function render(renderer: Renderer, enemy: Enemy) {
    drawRect(renderer, enemy, "#FFF000");
}
