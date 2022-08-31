export enum Pattern {
    Straight,
    Triangular,
    Circular,
    Rectangular,
}

export type Spawn = {
    pattern: Pattern;
    sy: number;
    color: string;
    // Circular
    amplitude?: number;
    frequency?: number;
    // Rectangular
    rx?: number;
    ry?: number;
};

export const Spawns: Spawn[] = [
    {
        pattern: Pattern.Straight,
        sy: 100,
        color: "#FFF000",
    },
    {
        pattern: Pattern.Triangular,
        sy: 150,
        amplitude: 50,
        frequency: 0.5,
        color: "#AAAAAA",
    },
    {
        pattern: Pattern.Circular,
        sy: 300,
        frequency: 0.25,
        amplitude: 200,
        color: "#000000",
    },
    {
        pattern: Pattern.Rectangular,
        sy: 450,
        color: "#AF5BE6",
    },
];
