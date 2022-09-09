import { sign } from "./alias";
import { free } from "./bullet";
import { die as enemyDie, Enemies, getActiveEnemies } from "./enemies";
import { createReleasedKeyPress } from "./input";
import { Player, bulletHit } from "./player";
import { getCenter, Rectangle } from "./rectangle";
import { changeScene, Scene } from "./scenes";
import { Vector } from "./vector";
import { Boss } from "./boss"
import { getActiveBullets } from "./bullets"

export type Collision = Rectangle;

type Overlap = Vector;
const mInput = createReleasedKeyPress("m");

export function getCollision(rectangle1: Rectangle, rectangle2: Rectangle): Collision | null {
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

export function update(player: Player, enemies: Enemies, boss: Boss): void {
    for (let enemy of getActiveEnemies(enemies)) {
        for (let bullet of getActiveBullets(player.bullets)) {
            const bulletEnemyCollision = getCollision(enemy, bullet);
            if (bulletEnemyCollision != null) {
                free(bullet);
                enemyDie(enemy, enemies);
            }
        }
        for (let bullet of getActiveBullets(enemy.bullets)) {
            const bulletPlayerCollision = getCollision(player, bullet);
            if (bulletPlayerCollision != null) {
                if (bulletHit(player) == 0) {
                    changeScene(Scene.Shop, player, enemies, boss);
                }
            }
        }
        const playerEnemyCollision = getCollision(player, enemy);
        if (playerEnemyCollision != null) {
            changeScene(Scene.Shop, player, enemies, boss);
        }
    }
    for (let bullet of getActiveBullets(boss.bullets)) {
        const bulletPlayerCollision = getCollision(player, bullet);
        if (bulletPlayerCollision != null) {
            if (bulletHit(player) == 0) {
                changeScene(Scene.Shop, player, enemies, boss);
            }
        }
    }

    if (mInput()) {
        changeScene(Scene.Shop, player, enemies, boss);
    }
}

function getTranslationVector(
    player: Rectangle,
    rectangle: Rectangle,
    collision: Collision
): Vector {
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

function xProject(rectangle: Rectangle): Vector {
    return { x: rectangle.x, y: rectangle.x + rectangle.w };
}

function yProject(rectangle: Rectangle): Vector {
    return { x: rectangle.y, y: rectangle.y + rectangle.h };
}

function getOverlap(s1: Vector, s2: Vector): Overlap | null {
    if (s1.y <= s2.x || s2.y <= s1.x) return null;
    return {
        x: Math.max(s1.x, s2.x),
        y: Math.min(s1.y, s2.y),
    };
}
