import { cos, PI, sin } from "./alias";
import { rand, randRange } from "./rand";
import { Rectangle } from "./rectangle";
import { drawRect, Renderer } from "./renderer";
import { Settings } from "./settings";
import { Speed } from "./speed";
import { Pattern, Spawn, Spawns } from "./wave";

export enum Direction {
    Up,
    Left,
    Right,
    Down,
}

export type Enemy = Rectangle &
    Speed & {
        sy: number;
        color: string;
        dead: boolean;
        pattern: Pattern;
        amplitude?: number;
        frequency?: number;
        rx?: number;
        ry?: number;
        direction?: Direction;
        target?: number;
    };

let t = 0;
let d = 0;

export function create({ pattern, sy: y, color, amplitude, frequency, rx, ry }: Spawn): Enemy {
    return {
        x: Settings.width,
        y: y,
        sy: y,
        dx: 0,
        dy: 0,
        w: 50,
        h: 50,
        pattern,
        color,
        dead: false,
        amplitude,
        frequency,
        rx,
        ry,
    };
}

export function die(enemy: Enemy) {
    enemy.dead = true;
}

export function update(enemy: Enemy): void {
    const frequency = enemy.frequency as number;
    const amplitude = enemy.amplitude as number;
    t += Settings.delta;
    if (enemy.dead) return;
    if (enemy.pattern == Pattern.Circular) {
        enemy.dx =
            2 * PI * frequency * amplitude * cos(2 * PI * frequency * t) - Settings.width / 4;
        enemy.dy = 2 * PI * frequency * amplitude * sin(2 * PI * frequency * t);
    }
    if (enemy.pattern == Pattern.Rectangular) {
        const target = enemy.target as number;
        if (enemy.direction == null) {
            enemy.direction = Direction.Left;
            enemy.target = randRange(50, 150);
        }
        if (enemy.direction == Direction.Left) {
            if (d >= target) {
                enemy.direction = rand(Direction.Up, Direction.Down);
                d = 0;
                enemy.target = randRange(50, 150);
            }
            enemy.dx = -Settings.width / 4;
            enemy.dy = 0;
            d += -enemy.dx * Settings.delta;
        }
        if (enemy.direction == Direction.Right) {
        }
        if (enemy.direction == Direction.Up) {
            if (d >= target) {
                enemy.direction = Direction.Left;
                enemy.target = randRange(50, 150);
                d = 0;
            }
            enemy.dy = -Settings.width / 8;
            enemy.dx = 0;
            d += -enemy.dy * Settings.delta;
        }
        if (enemy.direction == Direction.Down) {
            if (d >= target) {
                enemy.direction = Direction.Left;
                enemy.target = randRange(50, 150);
                d = 0;
            }
            enemy.dy = Settings.width / 8;
            enemy.dx = 0;
            d += enemy.dy * Settings.delta;
        }
    }
    if (enemy.pattern == Pattern.Triangular) {
        if (enemy.y >= enemy.sy + amplitude) {
            enemy.dy = -4 * amplitude * frequency;
        }
        if (enemy.dy == 0 || enemy.y <= enemy.sy - amplitude) {
            enemy.dy = 4 * amplitude * frequency;
        }
        enemy.dx = -Settings.width / 4;
    }
    if (enemy.pattern == Pattern.Straight) {
        enemy.dx = -Settings.width / 4;
    }

    console.log(d);

    enemy.x += enemy.dx * Settings.delta;
    enemy.y += enemy.dy * Settings.delta;
}

export function load(): Enemy[] {
    return Spawns.map((s: Spawn) => create(s));
}

export function render(renderer: Renderer, enemy: Enemy) {
    if (enemy.dead) return;
    drawRect(renderer, enemy, enemy.color);
}
