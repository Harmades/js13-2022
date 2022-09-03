import { Enemy, render as renderEnemy, update as updateEnemy } from "./enemy";
import { Renderer } from "./renderer";
import { Settings } from "./settings";
import { create as createWave, WaveDifficulty } from "./wave";

export type Enemies = {
    entities: Enemy[];
    deadCount: number;
};

let elapsedTime = 0;

export function create(): Enemies {
    return {
        entities: createWave(WaveDifficulty.Easy).enemies,
        deadCount: 0,
    };
}

export function update(enemies: Enemies): void {
    elapsedTime += Settings.delta;
    if (elapsedTime >= Settings.waveEasyTimeMax || enemies.deadCount == enemies.entities.length) {
        nextWave(enemies);
        elapsedTime = 0;
    }
    for (let enemy of enemies.entities) {
        updateEnemy(enemy);
    }
}

export function render(renderer: Renderer, enemies: Enemies): void {
    for (let enemy of enemies.entities) {
        renderEnemy(renderer, enemy);
    }
}

export function getActiveEnemies(enemies: Enemies): Enemy[] {
    return enemies.entities.filter((e) => !e.dead);
}

export function nextWave(enemies: Enemies): void {
    enemies.entities = createWave(WaveDifficulty.Easy).enemies;
    enemies.deadCount = 0;
    elapsedTime = 0;
}

export function reset(enemies: Enemies): void {
    nextWave(enemies);
}

export function die(enemy: Enemy, enemies: Enemies) {
    enemy.dead = true;
    enemies.deadCount++;
}
