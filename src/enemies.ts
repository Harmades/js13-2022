import { Boss, create as createBoss, render as renderBoss, update as updateBoss } from "./boss";
import { Bullet } from "./bullet";
import { getActiveBullets } from "./bullets";
import { Enemy, render as renderEnemy, update as updateEnemy } from "./enemy";
import { createReleasedKeyPress } from "./input";
import { Renderer } from "./renderer";
import { Settings } from "./settings";
import { create as createWave, WaveDifficulty } from "./wave";

export type Enemies = {
    entities: Enemy[];
    deadCount: number;
    boss: Boss;
};

let elapsedTime = 0;
let currentWave = 1;
let bossWave = Settings.waveEasyCount + Settings.waveMediumCount + Settings.waveHardCount + 1;
let mInput = createReleasedKeyPress("m");

export function create(): Enemies {
    return {
        entities: createWave(WaveDifficulty.Easy).enemies,
        deadCount: 0,
        boss: createBoss(),
    };
}

export function update(enemies: Enemies): void {
    elapsedTime += Settings.delta;
    if (elapsedTime >= Settings.waveEasyTimeMax || enemies.deadCount == enemies.entities.length) {
        nextWave(enemies);
        elapsedTime = 0;
    }
    if (currentWave < bossWave) {
        for (let enemy of enemies.entities) {
            updateEnemy(enemy);
        }
    } else {
        updateBoss(enemies.boss);
    }

    if (mInput()) {
        nextWave(enemies);
    }
}

export function render(renderer: Renderer, enemies: Enemies): void {
    if (currentWave < bossWave) {
        for (let enemy of enemies.entities) {
            renderEnemy(renderer, enemy);
        }
    } else {
        renderBoss(renderer, enemies.boss);
    }
}

export function getActiveEnemies(enemies: Enemies): Enemy[] {
    return enemies.entities.filter((e) => !e.dead);
}

export function nextWave(enemies: Enemies): void {
    currentWave++;
    let difficulty: WaveDifficulty = WaveDifficulty.Easy;
    if (currentWave > 3 && currentWave <= 6) {
        difficulty = WaveDifficulty.Medium;
    }
    if (currentWave > 6) {
        difficulty = WaveDifficulty.Hard;
    }
    enemies.entities = createWave(difficulty).enemies;
    enemies.deadCount = 0;
    elapsedTime = 0;
}

export function reset(enemies: Enemies): void {
    currentWave = 1;
    nextWave(enemies);
}

export function die(enemy: Enemy, enemies: Enemies) {
    enemy.dead = true;
    enemies.deadCount++;
}

export function getAllEnemiesBullet(enemies: Enemies): Bullet[] {
    let bulletList: Bullet[] = [];
    for (let enemy of getActiveEnemies(enemies)) {
        bulletList.push.apply(bulletList, getActiveBullets(enemy.bullets));
    }
    return bulletList;
}
