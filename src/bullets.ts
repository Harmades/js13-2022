import { cos, max, min, PI } from "./alias";
import { repeat } from "./array";
import {
    Bullet,
    create as createBullet,
    fire as fireBullet,
    free as freeBullet,
    render as renderBullet,
    update as updateBullet,
} from "./bullet";
import { randRange } from "./random";
import { Renderer } from "./renderer";
import { Settings } from "./settings";
import { add as addVector, create as createVector, Vector } from "./vector";

export type Bullets = {
    bullets: Bullet[];
    baseSpeedX: number;
    baseSpeedY: number;
    lastRandY: number;
    sprayOpen: number;
    shielded: boolean;
    bh: number;
    bw: number;
};

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
    UpAndDown,
}

export function create(
    poolSize: number,
    baseSpeedX: number,
    baseSpeedY: number,
    sprayOpen: number,
    bulletHeight: number,
    bulletWidth: number,
    shielded: boolean = false,
    isPlayerBullet: boolean
): Bullets {
    return {
        bullets: repeat(
            () => createBullet(bulletHeight, bulletWidth, shielded, isPlayerBullet),
            poolSize
        ),
        baseSpeedX,
        baseSpeedY,
        lastRandY: 0,
        sprayOpen: sprayOpen,
        shielded: shielded,
        bh: bulletHeight,
        bw: bulletWidth,
    };
}

function computeRandY(bullets: Bullets, rand: number): number {
    let randY = randRange(-rand, rand);
    let speedY = bullets.lastRandY + randY;
    speedY = max(min(Settings.bulletsMaxdY, speedY), -Settings.bulletsMaxdY);
    bullets.lastRandY = speedY;
    return speedY;
}

export function fire(
    bullets: Bullets,
    speedX: number,
    shootPosition: Vector,
    pattern: Pattern,
    rand: number = 0
) {
    let speedY = computeRandY(bullets, rand);
    if (pattern < Pattern.ConicEnd) {
        for (let i: number = 0; i <= pattern; i++) {
            let bullet = bullets.bullets.find((b) => !b.isActive);
            if (bullet == undefined) return;
            fireBullet(
                bullets,
                bullet,
                shootPosition,
                createVector(
                    speedX,
                    bullets.baseSpeedY * cos(PI * ((i + 1) / (pattern + 2))) * bullets.sprayOpen +
                    speedY
                )
            );
            speedY = computeRandY(bullets, rand);
        }
    }
    if (pattern == Pattern.Straight) {
        let bullet = bullets.bullets.find((b) => !b.isActive);
        if (bullet == undefined) return;
        bullet.dh = 0.2 * (speedX / Settings.playerBulletSpeedX);
        bullet.dhDirection = 0.5;
        fireBullet(bullets,
            bullet,
            shootPosition,
            createVector(speedX, speedY));
    }
    if (pattern == Pattern.StraightHole) {
        let bullet = bullets.bullets.find((b) => !b.isActive);
        if (bullet == undefined) return;
        bullet.dh = 0.4;
        bullet.dhDirection = 0;
        fireBullet(
            bullets,
            bullet,
            shootPosition,
            createVector(speedX, speedY + bullet.dh * 150 + 10)
        );
        bullet = bullets.bullets.find((b) => !b.isActive);
        if (bullet == undefined) return;
        bullet.dh = 0.4;
        bullet.dhDirection = 1;
        fireBullet(
            bullets,
            bullet,
            shootPosition,
            createVector(speedX, speedY - (bullet.dh * 150 + 10))
        );
    }

    if (pattern == Pattern.Explosion) {
        let bullet = bullets.bullets.find((b) => !b.isActive);
        if (bullet == undefined) return;
        bullet.w = Settings.bossBigBulletWidth;
        bullet.h = Settings.bossBigBulletHeight;
        bullet.bullets = bullets;
        bullet.explodeTick = Settings.bossBigBulletExplosionTick;
        fireBullet(
            bullets,
            bullet,
            addVector(
                shootPosition,
                createVector(Settings.bossBigBulletWidth, -(Settings.bossBigBulletHeight / 2))
            ),
            createVector(speedX, speedY)
        );
    }
    /* Assuming this comes from the boss */
    if (pattern == Pattern.UpAndDown) {
        for (let i: number = 0; i <= 10; i++) {
            let bullet = bullets.bullets.find((b) => !b.isActive);
            if (bullet == undefined) return;
            fireBullet(
                bullets,
                bullet,
                addVector(
                    shootPosition,
                    createVector(Settings.bossWidth / 2, Settings.bossHeight / 2)
                ),
                createVector(
                    speedX * cos(PI * ((i + 1) / (pattern + 2))) * 0.5 + speedY,
                    bullets.baseSpeedY
                )
            );
            speedY = computeRandY(bullets, rand);
        }
        for (let i: number = 0; i <= 10; i++) {
            let bullet = bullets.bullets.find((b) => !b.isActive);
            if (bullet == undefined) return;
            fireBullet(
                bullets,
                bullet,
                addVector(
                    shootPosition,
                    createVector(Settings.bossWidth / 2, -Settings.bossHeight / 2)
                ),
                createVector(
                    speedX * cos(PI * ((i + 1) / (pattern + 2))) * 0.5 + speedY,
                    -bullets.baseSpeedY
                )
            );
            speedY = computeRandY(bullets, rand);
        }
    }
}

export function resetRand(bullets: Bullets) {
    bullets.lastRandY = 0;
}

export function update(bullets: Bullets) {
    for (let bullet of getActiveBullets(bullets)) {
        updateBullet(bullet);
    }
}

export function render(renderer: Renderer, bullets: Bullets) {
    for (let bullet of getActiveBullets(bullets)) {
        renderBullet(renderer, bullet);
    }
}

export function getActiveBullets(bullets: Bullets): Bullet[] {
    return bullets.bullets.filter((e) => e.isActive);
}

export function reset(bullets: Bullets): void {
    for (let bullet of bullets.bullets) {
        freeBullet(bullet);
    }
}
