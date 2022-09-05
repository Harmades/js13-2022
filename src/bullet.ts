import { Rectangle } from "./rectangle";
import { drawRect, Renderer } from "./renderer";
import { Settings } from "./settings";
import { Speed } from "./speed";
import { Vector } from "./vector";

export type Bullet = Rectangle &
    Speed & {
        isActive: boolean;
    };

export function create(): Bullet {
    return {
        x: 0,
        y: 0,
        w: Settings.bulletWidth,
        h: Settings.bulletHeight,
        dx: 0,
        dy: 0,
        isActive: false,
    };
}

export function update(bullet: Bullet): void {
    if (!bullet.isActive) return;
    bullet.x += bullet.dx * Settings.delta;
    bullet.y += bullet.dy * Settings.delta;
    // if (bullet.x <= -Settings.bulletWidth || bullet.x >= Settings.width) {
    //     free(bullet);
    // }
}

export function render(renderer: Renderer, bullet: Bullet): void {
    if (!bullet.isActive) return;
    drawRect(renderer, bullet);
}

export function fire(bullet: Bullet, dest: Vector, speed: Vector) {
    bullet.x = dest.x;
    bullet.y = dest.y;
    bullet.dx = speed.x;
    bullet.dy = speed.y;
    bullet.isActive = true;
}

export function free(bullet: Bullet): void {
    bullet.isActive = false;
    bullet.dx = 0;
    bullet.dy = 0;
    bullet.x = 0;
    bullet.y = 0;
}
