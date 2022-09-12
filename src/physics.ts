import { sign } from "./alias";
import { bossHit } from "./boss";
import { free } from "./bullet";
import { getActiveBullets } from "./bullets";
import { die as enemyDie, getActiveEnemies } from "./enemies";
import { bulletHit } from "./player";
import { getCenter, Rectangle } from "./rectangle";
import { Sprite } from "./sprite";
import { Vector } from "./vector";
import { changeScene, Scene, World } from "./world";
import { Settings } from "./settings"
import { awardMoney } from "./player"

export type Collision = Rectangle;

type Overlap = Vector;

export function getCollision(rectangle1: Sprite, rectangle2: Sprite): Collision | null {
    const xOverlap = getOverlap(xProject(rectangle1), xProject(rectangle2));
    const yOverlap = getOverlap(yProject(rectangle1), yProject(rectangle2));
    // collides if there is an overlap on x axis and y axis
    if (xOverlap == null || yOverlap == null) return null;
    return {
        x: xOverlap.x,
        y: yOverlap.x,
        w: xOverlap.y - xOverlap.x,
        h: yOverlap.y - yOverlap.x,
    };
}

export function update(world: World): void {
    const enemies = world.enemies;
    const player = world.player;
    const boss = enemies.boss;

    for (let enemy of getActiveEnemies(enemies)) {
        for (let bullet of getActiveBullets(player.bullets)) {
            const bulletEnemyCollision = getCollision(enemy, bullet);
            if (bulletEnemyCollision != null) {
                free(bullet);
                enemyDie(enemy, enemies);
                awardMoney(player, 1)
                break;
            }
        }
        for (let bullet of getActiveBullets(enemy.bullets)) {
            const bulletPlayerCollision = getCollision(player, bullet);
            if (bulletPlayerCollision != null) {
                if (bulletHit(player) < 0) {
                    changeScene(Scene.Shop, world);
                }
                break;
            }
        }
        const playerEnemyCollision = getCollision(player, enemy);
        if (playerEnemyCollision != null) {
            if (bulletHit(player) < 0) {
                changeScene(Scene.Shop, world);
            }
        }
    }
    if (boss.elapsedTime != 0) {
        for (let bullet of getActiveBullets(enemies.boss.bullets)) {
            const bulletPlayerCollision = getCollision(player, bullet);
            if (bulletPlayerCollision != null) {
                if (bulletHit(player) < 0) {
                    changeScene(Scene.Shop, world);
                }
            }
        }
        for (let bullet of getActiveBullets(player.bullets)) {
            const bulletEnemyCollision = getCollision(enemies.boss, bullet);
            if (bulletEnemyCollision != null) {
                free(bullet);
                bossHit(enemies.boss);
            }
        }
        const playerBossCollision = getCollision(player, boss);
        if (playerBossCollision != null) {
            if (bulletHit(player) < 0) {
                changeScene(Scene.Shop, world);
            }
        }
    }
}

function getTranslationVector(player: Sprite, rectangle: Sprite, collision: Collision): Vector {
    const playerCenter = getCenter(player);
    const platformCenter = getCenter(rectangle);
    const xSign = sign(playerCenter.x - platformCenter.x);
    const ySign = sign(playerCenter.y - platformCenter.y);
    const translation =
        collision.w > collision.h
            ? { x: 0, y: ySign * collision.h }
            : { x: xSign * collision.w, y: 0 };
    return translation;
}

function xProject(rectangle: Sprite): Vector {
    return { x: rectangle.x, y: rectangle.x + rectangle.w };
}

function yProject(rectangle: Sprite): Vector {
    return { x: rectangle.y, y: rectangle.y + rectangle.h };
}

function getOverlap(s1: Vector, s2: Vector): Overlap | null {
    if (s1.y <= s2.x || s2.y <= s1.x) return null;
    return {
        x: Math.max(s1.x, s2.x),
        y: Math.min(s1.y, s2.y),
    };
}
