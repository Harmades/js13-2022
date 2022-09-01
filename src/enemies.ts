import { Enemy, load, render as renderEnemy, update as updateEnemy } from "./enemy";
import { Renderer } from "./renderer";

export type Enemies = {
    entities: Enemy[];
};

export function create(): Enemies {
    return {
        entities: load(),
    };
}

export function update(enemies: Enemies): void {
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
    enemies.entities = load();
}

export function die(enemy: Enemy, enemies: Enemies) {
    enemy.dead = true;
}
