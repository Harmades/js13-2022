import { create as createEnemy, Enemy, Pattern } from "./enemy";
import { rand, randColor, randRange, randRangeInt } from "./random";
import { Renderer } from "./renderer";
import { Settings } from "./settings";

export enum WaveDifficulty {
    Easy,
    Medium,
    Hard,
}

export type Wave = {
    difficulty: WaveDifficulty;
    enemies: Enemy[];
};

export function create(difficulty: WaveDifficulty): Wave {
    const enemies: Enemy[] = [];
    if (difficulty == WaveDifficulty.Easy) {
        const size = randRangeInt(3, 6);
        for (let i = 0; i < size; i++) {
            enemies.push(createRandEnemy(difficulty));
        }
    }
    if (difficulty == WaveDifficulty.Medium) {
        const size = randRangeInt(5, 10);
        for (let i = 0; i < size; i++) {
            enemies.push(createRandEnemy(difficulty));
        }
    }
    if (difficulty == WaveDifficulty.Hard) {
        const size = randRangeInt(9, 17);
        for (let i = 0; i < size; i++) {
            enemies.push(createRandEnemy(difficulty));
        }
    }

    return { difficulty, enemies };
}

export function createRandEnemy(difficulty: WaveDifficulty): Enemy {
    const color = randColor();
    if (difficulty == WaveDifficulty.Easy) {
        const pattern = rand(Pattern.Straight, Pattern.Triangular);
        const amplitude = randRange(10, 51);
        const frequency = randRange(0.1, 0.25);
        const rx = randRange(100, 201);
        const ry = rx;
        const sy = randRange(0, Settings.height - Settings.enemyHeight);
        const time = randRange(4, 8);
        return createEnemy(sy, pattern, color, time, amplitude, frequency, rx, ry);
    }
    if (difficulty == WaveDifficulty.Medium) {
        const pattern = rand(Pattern.Straight, Pattern.Triangular, Pattern.Rectangular);
        const amplitude = randRange(10, 51);
        const frequency = randRange(0.1, 0.25);
        const rx = randRange(100, 201);
        const ry = rx;
        const sy = randRange(0, Settings.height - Settings.enemyHeight);
        const time = randRange(4, 8);
        return createEnemy(sy, pattern, color, time, amplitude, frequency, rx, ry);
    }
    if (difficulty == WaveDifficulty.Hard) {
        const pattern = rand(Pattern.Triangular, Pattern.Rectangular, Pattern.Circular);
        const amplitude = randRange(10, 51);
        const frequency = randRange(0.1, 0.25);
        const rx = randRange(100, 201);
        const ry = rx;
        const sy = randRange(0, Settings.height - Settings.enemyHeight);
        const time = randRange(4, 8);
        return createEnemy(sy, pattern, color, time, amplitude, frequency, rx, ry);
    }

    throw new Error();
}

export function update(): void {}

export function render(renderer: Renderer) {}
