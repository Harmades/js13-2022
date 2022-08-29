export enum Pattern {
    Straight,
    Triangle,
    Circular,
    Rectangle,
}

export type Spawn = {
    pattern: Pattern;
    sy: number;
    dy: number;
    frequency?: number;
    color: string;
};

export const Spawns: Spawn[] = [
    {
        pattern: Pattern.Straight,
        sy: 100,
        dy: 100,
        color: "#FFF000",
    },
    {
        pattern: Pattern.Triangle,
        sy: 150,
        dy: 250,
        frequency: 4,
        color: "#AAAAAA",
    },
    {
        pattern: Pattern.Circular,
        sy: 300,
        dy: 400,
        frequency: 4,
        color: "#000000",
    },
    {
        pattern: Pattern.Rectangle,
        sy: 450,
        dy: 550,
        frequency: 4,
        color: "#AF5BE6",
    },
];
