export function rand<T>(...values: T[]): T {
    return values[Math.floor(Math.random() * values.length)];
}

export function randRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function randRangeInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max) + 1;
    return Math.floor(Math.random() * (max - min) + min);
}

export function randColor(): string {
    const r = randRangeInt(0, 255);
    const g = randRangeInt(0, 255);
    const b = randRangeInt(0, 255);
    const a = 0.5;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
