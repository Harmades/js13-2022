export function rand<T>(...values: T[]): T {
    return values[Math.floor(Math.random() * values.length)];
}

export function randRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function randRangeInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function randColor(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
}
