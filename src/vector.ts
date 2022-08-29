import { cos, sin } from "./alias";

export type Vector = {
    x: number;
    y: number;
};

export function create(x: number, y: number): Vector {
    return {
        x: x,
        y: y,
    };
}

export function zero(): Vector {
    return {
        x: 0,
        y: 0,
    };
}

export function add(vector1: Vector, vector2: Vector): Vector {
    return create(vector1.x + vector2.x, vector1.y + vector2.y);
}

export function multiply(vector: Vector, value: number): Vector {
    return create(value * vector.x, value * vector.y);
}

export function subtract(vector1: Vector, vector2: Vector): Vector {
    return create(vector1.x - vector2.x, vector1.y - vector2.y);
}

export function rotate(vector: Vector, angle: number): Vector {
    const x2 = cos(angle) * vector.x - sin(angle) * vector.y;
    const y2 = sin(angle) * vector.x + cos(angle) * vector.y;
    return create(x2, y2);
}
