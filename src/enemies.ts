import { Enemy, render as renderEnemy, update as updateEnemy } from "./enemy";
import { Renderer } from "./renderer";
import { Settings } from "./settings";
import { create as createWave, WaveDifficulty } from "./wave";

export type Enemies = {
    entities: Enemy[];
};

let elapsedTime = 0;

export function create(): Enemies {
    return {
        entities: createWave(WaveDifficulty.Easy).enemies,
    };
}

export function update(enemies: Enemies): void {
    elapsedTime += Settings.delta;
    if (elapsedTime >= 5) {
        enemies.entities = createWave(WaveDifficulty.Easy).enemies;
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

export function reset(enemies: Enemies): void {
    enemies.entities = createWave(WaveDifficulty.Easy).enemies;
}

export function die(enemy: Enemy, enemies: Enemies) {
    enemy.dead = true;
}
