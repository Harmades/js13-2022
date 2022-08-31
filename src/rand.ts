export function rand<T>(...values: T[]): T {
    return values[Math.floor(Math.random() * values.length)];
}

export function randRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}
