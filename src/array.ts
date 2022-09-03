export function repeat<T>(createObject: () => T, count: number): T[] {
    const array: T[] = [];
    for (let i = 0; i < count; i++) {
        array.push(createObject());
    }
    return array;
}
