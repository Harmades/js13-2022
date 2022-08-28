import { asin, cos, PI, pow, sin, sqrt } from "./alias";
import { Settings } from "./settings";
import { Vector } from "./vector";

export type TweenProps = {
    sx: number;
    sy: number;
    dx: number;
    dy: number;
};

export function createTween(
    from: Vector,
    to: Vector,
    easing: (x: number) => number,
    time: number
): () => Vector {
    let t = 0;
    return (): Vector => {
        t += Settings.delta / time;
        if (t > 1) t = 1;
        const progress = easing(t);
        return {
            x: from.x * (1 - t) + to.x * t,
            y: to.y * progress,
        };
    };
}

export function easeInOutCirc(x: number): number {
    return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
}

export function linear(x: number): number {
    return 1;
}

export function cosine(x: number, amplitude: number, frequency: number): number {
    return amplitude * cos(2 * PI * frequency * x);
}

export function triangle(x: number, amplitude: number, frequency: number): number {
    return ((2 * amplitude) / PI) * asin(sin(2 * PI * frequency * x));
}
