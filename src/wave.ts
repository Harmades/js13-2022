import { Pattern as BulletsPattern } from "./bullets";
import { create as createEnemy, Enemy, Pattern } from "./enemy";
import { rand, randColor, randRange, randRangeInt } from "./random";
import { AtlasSprite, Renderer } from "./renderer";
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

let sprites: AtlasSprite[] = [
    "assets/floating_eye.png",
    "assets/imp.png",
    "assets/skeleton.png",
    "assets/zombie.png",
];

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
        const amplitude = randRange(Settings.waveEasyAmplitudeMin, Settings.waveEasyAmplitudeMax);
        const frequency = randRange(Settings.waveEasyFrequencyMin, Settings.waveEasyFrequencyMax);
        const rx = randRange(Settings.waveEasyRxMin, Settings.waveEasyRxMax);
        const ry = randRange(Settings.waveEasyRyMin, Settings.waveEasyRyMax);
        const sy = randRange(Settings.waveEasySyMin, Settings.waveEasySyMax);
        const time = randRange(Settings.waveEasyTimeMin, Settings.waveEasyTimeMax);
        const bulletsPattern = randRangeInt(BulletsPattern.Single, BulletsPattern.Double);
        const sprite = rand(...sprites);
        return createEnemy(
            sy,
            pattern,
            color,
            time,
            amplitude,
            frequency,
            rx,
            ry,
            bulletsPattern,
            sprite
        );
    }
    if (difficulty == WaveDifficulty.Medium) {
        const pattern = rand(Pattern.Straight, Pattern.Triangular, Pattern.Rectangular);
        const amplitude = randRange(
            Settings.waveMediumAmplitudeMin,
            Settings.waveMediumAmplitudeMax
        );
        const frequency = randRange(
            Settings.waveMediumFrequencyMin,
            Settings.waveMediumFrequencyMax
        );
        const rx = randRange(Settings.waveMediumRxMin, Settings.waveMediumRxMax);
        const ry = randRange(Settings.waveMediumRyMin, Settings.waveMediumRyMax);
        const sy = randRange(Settings.waveMediumSyMin, Settings.waveMediumSyMax);
        const time = randRange(Settings.waveMediumTimeMin, Settings.waveMediumTimeMax);
        const bulletsPattern = randRangeInt(BulletsPattern.Single, BulletsPattern.Quintuple);
        const sprite = rand(...sprites);
        return createEnemy(
            sy,
            pattern,
            color,
            time,
            amplitude,
            frequency,
            rx,
            ry,
            bulletsPattern,
            sprite
        );
    }
    if (difficulty == WaveDifficulty.Hard) {
        const pattern = rand(Pattern.Triangular, Pattern.Rectangular, Pattern.Circular);
        const amplitude = randRange(Settings.waveHardAmplitudeMin, Settings.waveHardAmplitudeMax);
        const frequency = randRange(Settings.waveHardFrequencyMin, Settings.waveHardFrequencyMax);
        const rx = randRange(Settings.waveHardRxMin, Settings.waveHardRxMax);
        const ry = randRange(Settings.waveHardRyMin, Settings.waveHardRyMax);
        const sy = randRange(Settings.waveHardSyMin, Settings.waveHardSyMax);
        const time = randRange(Settings.waveHardTimeMin, Settings.waveHardTimeMax);
        const bulletsPattern = randRangeInt(BulletsPattern.Double, BulletsPattern.Sixtuple);
        const sprite = rand(...sprites);
        return createEnemy(
            sy,
            pattern,
            color,
            time,
            amplitude,
            frequency,
            rx,
            ry,
            bulletsPattern,
            sprite
        );
    }

    throw new Error();
}

export function update(): void {}

export function render(renderer: Renderer) {}
