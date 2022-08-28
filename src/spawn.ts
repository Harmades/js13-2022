export enum Pattern {
    Straight,
    Triangle,
    Circular,
    Rectangle,
}

export type Spawn = {
    pattern: Pattern;
    sy: number;
    frequency?: number;
    amplitude?: number;
};

export const Spawns: Spawn[] = [
    {
        pattern: Pattern.Straight,
        sy: 100,
    },
    {
        pattern: Pattern.Triangle,
        sy: 200,
        frequency: 4,
        amplitude: 0.16,
    },
    {
        pattern: Pattern.Circular,
        sy: 400,
        frequency: 4,
        amplitude: 0.16,
    },
];
