import { floor, ceil } from "./alias"
import { repeat } from "./array";
import {
    Bullets,
    Pattern as BulletsPattern,
    create as createBullets,
    fire as fireBullets,
    render as renderBullets,
    update as updateBullets,
} from "./bullets";
import { Direction } from "./direction";
import { rand, randColor, randRange, randRangeInt } from "./random";
import { Rectangle } from "./rectangle";
import { drawRect, Renderer, } from "./renderer";
import { Settings } from "./settings";
import { Speed } from "./speed";
import { Vector, create as createVector, add as addVector } from "./vector"


export type BossPattern = {
    duration: number;
    tx: number;
    ty: number;
    dx: number;
    dy: number;
    shootPattern: BulletsPattern[];
    shootCount: number[];
    shootFrequency: number[];
    shootSpeed: number[];
    repeat: number;
    resetPosOnRepeat: boolean;
};

export type Boss = Rectangle &
    Speed & {
        color: string;
        bullets: Bullets;
        elapsedTime: number;
        shootElapsedTime: number;
        shootCount: number;
        currentPattern: BossPattern;
        targetReached: boolean;
        patternIndex: number;
        repeatCount: number;
    };


const spray: BossPattern = {
    duration: 10,
    tx: Settings.width * 0.9 - Settings.bossWidth,
    ty: Settings.height - Settings.bossHeight,
    dx: -50,
    dy: -20,
    shootPattern: [BulletsPattern.Sixtuple, BulletsPattern.Quintuple, BulletsPattern.Triple],
    shootCount: [2, 2, 2],
    shootFrequency: [4, 3, 2],
    shootSpeed: [35, 40, 55],
    repeat: 3,
    resetPosOnRepeat: false,
}


const straight: BossPattern = {
    duration: 10,
    tx: Settings.width * 0.8 - Settings.bossWidth,
    ty: Settings.bossHeight,
    dx: 0,
    dy: 20,
    shootPattern: [BulletsPattern.Straight, BulletsPattern.Straight, BulletsPattern.Straight],
    shootCount: [1, 1, 1],
    shootFrequency: [0.5, 1, 0.5],
    shootSpeed: [40, 20, 50],
    repeat: 3,
    resetPosOnRepeat: true,
}


export function create(): Boss {
    const color = `#${randColor()}`;
    return {
        x: Settings.width * 0.5 - Settings.bossWidth / 2,
        y: Settings.height * 0.5 - Settings.bossHeight / 2,
        w: Settings.bossWidth,
        h: Settings.bossHeight,
        dx: 0,
        dy: 0,
        color,
        bullets: createBullets(Settings.bossBulletsPoolSize,
            Settings.bossBulletSpeedX,
            Settings.bossBulletSpeedY),
        elapsedTime: 0,
        currentPattern: spray,
        shootElapsedTime: 0,
        shootCount: 0,
        targetReached: false,
        patternIndex: 0,
        repeatCount: 0,
    };
}


export function update(boss: Boss): void {
    updateBullets(boss.bullets)
    boss.elapsedTime += Settings.delta;
    boss.shootElapsedTime += Settings.delta;
    const speed = Settings.bossSpeed;

    if (!boss.targetReached) {

        if (boss.x > boss.currentPattern.tx) {
            boss.dx = -speed;
        } else if (boss.x < boss.currentPattern.tx) {
            boss.dx = speed;
        }

        if (boss.y > boss.currentPattern.ty) {
            boss.dy = -speed;
        } else if (boss.y < boss.currentPattern.ty) {
            boss.dy = speed;
        }

    } else {
        boss.dx = boss.currentPattern.dx;
        boss.dy = boss.currentPattern.dy;
    }

    boss.x += boss.dx * Settings.delta;
    boss.y += boss.dy * Settings.delta;

    if (boss.targetReached) {
        if (boss.shootCount < boss.currentPattern.shootCount[boss.patternIndex]) {
            if (boss.shootElapsedTime >= 1 / boss.currentPattern.shootFrequency[boss.patternIndex]) {
                boss.shootCount += 1;
                boss.shootElapsedTime = 0;
                if (boss.currentPattern.shootPattern[boss.patternIndex] != undefined) {
                    fireBullets(boss.bullets,
                        boss.dx - boss.currentPattern.shootSpeed[boss.patternIndex],
                        addVector(boss, createVector(0, Settings.bossHeight / 2)),
                        boss.currentPattern.shootPattern[boss.patternIndex]
                    );
                }
            }
        } else {
            boss.shootCount = 0;
            if (boss.patternIndex + 1 == boss.currentPattern.shootFrequency.length) {
                boss.patternIndex = 0;
                if (boss.repeatCount + 1 == boss.currentPattern.repeat) {
                    boss.repeatCount = 0;
                    boss.targetReached = false;

                    /* TODO : Make it random */
                    if (boss.currentPattern == straight) {
                        boss.currentPattern = spray;
                    } else if (boss.currentPattern == spray) {
                        boss.currentPattern = straight;
                    }
                } else {
                    boss.repeatCount += 1;
                    if (boss.currentPattern.resetPosOnRepeat) {
                        boss.targetReached = false;
                    }
                }
            } else {
                boss.patternIndex += 1;
            }
        }
    }

    if ((floor(boss.x) == boss.currentPattern.tx || ceil(boss.x) == boss.currentPattern.tx) &&
        (floor(boss.y) == boss.currentPattern.ty || ceil(boss.y) == boss.currentPattern.ty)) {
        boss.targetReached = true;
        boss.dx = 0;
        boss.dy = 0;
        return;
    }

}

export function render(renderer: Renderer, boss: Boss) {
    renderBullets(renderer, boss.bullets);
    drawRect(renderer, boss, boss.color);
}
