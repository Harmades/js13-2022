import { asin, cos, PI, pow, sign, sin, sqrt } from "./alias";
import { Settings } from "./settings";

export type TweenProps = {
    sx: number;
    sy: number;
    dx: number;
    dy: number;
};

export function createTween(
    from: number,
    to: number,
    easing: (x: number) => number,
    time: number
): () => number {
    let t = 0;
    return (): number => {
        t += Settings.delta / time;
        if (t > 1) {
            t = 1;
        }
        const progress = easing(t);
        return from + progress * (to - from);
    };
}

export function easeInOutCirc(x: number): number {
    return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
}

export function linear(x: number): number {
    return x;
}

export function sine(x: number, amplitude: number, frequency: number): number {
    return amplitude * sin(2 * PI * frequency * x);
}

export function cosine(x: number, amplitude: number, frequency: number): number {
    return amplitude * cos(2 * PI * frequency * x);
}

export function triangle(x: number, amplitude: number, frequency: number): number {
    return ((2 * amplitude) / PI) * asin(sin(2 * PI * frequency * x));
}

export function rectangular(x: number, amplitude: number, frequency: number): number {
    return amplitude * sign(sin(2 * PI * frequency * x));
}
