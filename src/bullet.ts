import { Rectangle } from "./rectangle";
import { drawRect, Renderer } from "./renderer";
import { Settings } from "./settings";
import { Speed } from "./speed";
import { Vector, create as createVector } from "./vector";
import { min, pow, floor, sin, PI } from "./alias";
import { Bullets } from "./bullets";

export type Bullet = Rectangle &
    Speed & {
        isActive: boolean;
        bullets: Bullets;
        baseH: number;
        maxH: number;
        dh: number;
        dhDirection: number;
        explodeTick: number;
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
        baseH: Settings.bulletHeight,
        maxH: Settings.bulletHeight * 100,
        dh: 0,
        dhDirection: 0,
        explodeTick: 0,
        bullets: undefined,
    };
}

export function update(bullet: Bullet): void {
    if (!bullet.isActive) return;
    bullet.x += bullet.dx * Settings.delta;
    const old_h = bullet.h;
    bullet.h = min(bullet.h + bullet.dh, bullet.maxH)
    if (bullet.h == bullet.maxH) bullet.dy = -30 * sin(bullet.x / Settings.width * 6 * PI);
    bullet.y += bullet.dy * Settings.delta - (bullet.h - old_h) * (bullet.dhDirection);
    if (bullet.explodeTick != 0) {
        bullet.explodeTick -= 1;
        if (bullet.explodeTick == 0) {
            if (bullet.bullets == undefined) return;
            const speed = bullet.dx / 2;
            for (let i: number = 0; i < 4; i++) {
                let new_bullet = bullet.bullets.bullets.find((b) => !b.isActive);
                if (new_bullet == undefined) return;
                fire(
                    new_bullet,
                    bullet,
                    createVector(pow(-1, i) * speed, pow(-1, floor(i / 2)) * speed + bullet.dy));
            }
            free(bullet);
        }
    }
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
    bullet.h = bullet.baseH;
    bullet.dh = 0;
}
