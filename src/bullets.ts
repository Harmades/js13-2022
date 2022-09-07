import {
    Bullet,
    create as createBullet,
    fire as fireBullet,
    render as renderBullet,
    update as updateBullet,
} from "./bullet";
import { Settings } from "./settings";
import { Speed } from "./speed";
import {
    create as createVector,
    add as addVector
} from "./vector";
import { repeat } from "./array";
import { floor, min, max, abs, sign } from "./alias";
import { randRange } from "./random";

export type Bullets = {
    bullets: Bullet[];
    baseSpeedX: number;
    baseSpeedY: number;
    lastRandY: number;
}

export enum Pattern {
    Single,
    Double,
    Triple,
    Quadruple,
    Quintuple,
    Sixtuple,
    ConicEnd,
    Straight,
    StraightHole,
    Explosion,
}

export function create(
    poolSize: number,
    baseSpeedX: number,
    baseSpeedY: number): Bullets {
    return {
        bullets: repeat(() => createBullet(), poolSize),
        baseSpeedX,
        baseSpeedY,
        lastRandY: 0,
    };
}

export function fire(bullets: Bullets, speedX: number, shootPosition: Vector, pattern: Pattern, rand: number = 0) {
    let randY = randRange(-rand, rand);
    let speedY = bullets.lastRandY + sign(randY) * min(abs(bullets.lastRandY - randY), Settings.bulletsVariance);
    speedY = max(min(Settings.bulletsMaxdY, speedY), -Settings.bulletsMaxdY)
    bullets.lastRandY = speedY;

    if (pattern < Pattern.ConicEnd) {
        for (i = 0; i <= pattern; i++) {
            let bullet = bullets.bullets.find((b) => !b.isActive);
            if (bullet == undefined) return;
            fireBullet(
                bullet,
                shootPosition,
                createVector(speedX, bullets.baseSpeedY * (2 * i - pattern) + speedY));
        }
    }
    if (pattern == Pattern.Straight) {
        let bullet = bullets.bullets.find((b) => !b.isActive);
        if (bullet == undefined) return;
        bullet.dh = 0.1;
        fireBullet(
            bullet,
            shootPosition,
            createVector(speedX, speedY));
    }
    if (pattern == Pattern.StraightHole) {
        let bullet = bullets.bullets.find((b) => !b.isActive);
        if (bullet == undefined) return;
        bullet.dh = 0.2;
        bullet.dhDirection = 0;
        fireBullet(
            bullet,
            addVector(shootPosition, createVector(bullet.h, 0)),
            createVector(speedX, speedY + bullet.dh * 150));
        bullet = bullets.bullets.find((b) => !b.isActive);
        if (bullet == undefined) return;
        bullet.dh = 0.2;
        bullet.dhDirection = 1;
        fireBullet(
            bullet,
            addVector(shootPosition, createVector(-bullet.h, 0)),
            createVector(speedX, speedY - bullet.dh * 150));
    }

    if (pattern == Pattern.Explosion) {
        let bullet = bullets.bullets.find((b) => !b.isActive);
        if (bullet == undefined) return;
        bullet.w = Settings.bossBigBulletWidth;
        bullet.h = Settings.bossBigBulletHeight;
        bullet.bullets = bullets
        bullet.explodeTick = Settings.bossBigBulletExplosionTick;
        fireBullet(
            bullet,
            addVector(shootPosition, createVector(Settings.bossBigBulletWidth, - (Settings.bossBigBulletHeight / 2))),
            createVector(speedX, speedY));
    }

}

export function update(bullets: Bullets) {
    for (let bullet of bullets.bullets) {
        updateBullet(bullet);
    }
}

export function render(renderer: Renderer, bullets: Bullets) {
    for (let bullet of bullets.bullets) {
        renderBullet(renderer, bullet);
    }
}

