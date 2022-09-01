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
    return { x: 0, y: 0, w: 5, h: 5, dx: 0, dy: 0, isActive: false };
}

export function update(bullet: Bullet): void {
    if (!bullet.isActive) return;
    bullet.x += bullet.dx * Settings.delta;
    bullet.y += bullet.dy * Settings.delta;
}

export function render(bullet: Bullet, renderer: Renderer): void {
    drawRect(renderer, bullet);
}

export function fire(bullet: Bullet, dest: Vector) {
    bullet.x = dest.x;
    bullet.y = dest.y;
    bullet.dx = Settings.playerBulletSpeedX;
    bullet.dy = 0;
    bullet.isActive = true;
}

export function free(bullet: Bullet): void {
    bullet.isActive = false;
}
