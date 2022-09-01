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
    Speed &
    Spawn & {
        dead: boolean;
        elapsedTime: number;
        direction?: Direction;
        target?: number;
        distance: number;
    };

export function create({ pattern, sy, color, time, amplitude, frequency, rx, ry }: Spawn): Enemy {
    return {
        x: Settings.width,
        y: sy,
        sy,
        dx: 0,
        dy: 0,
        w: 50,
        h: 50,
        pattern,
        time,
        color,
        dead: false,
        amplitude,
        frequency,
        rx,
        ry,
        elapsedTime: 0,
        distance: 0,
    };
}

export function update(enemy: Enemy): void {
    if (enemy.dead) return;
    const frequency = enemy.frequency as number;
    const amplitude = enemy.amplitude as number;
    const speedX = Settings.width / enemy.time;
    enemy.elapsedTime += Settings.delta;
    if (enemy.pattern == Pattern.Circular) {
        enemy.dx =
            2 * PI * frequency * amplitude * cos(2 * PI * frequency * enemy.elapsedTime) - speedX;
        enemy.dy = 2 * PI * frequency * amplitude * sin(2 * PI * frequency * enemy.elapsedTime);
    }
    if (enemy.pattern == Pattern.Rectangular) {
        const target = enemy.target as number;
        if (enemy.direction == null) {
            enemy.direction = Direction.Left;
            enemy.target = randRange(50, 150);
        }
        if (enemy.direction == Direction.Left) {
            if (enemy.distance >= target) {
                enemy.direction = rand(Direction.Up, Direction.Down);
                enemy.distance = 0;
                enemy.target = randRange(50, 150);
            }
            enemy.dx = -speedX;
            enemy.dy = 0;
            enemy.distance += -enemy.dx * Settings.delta;
        }
        if (enemy.direction == Direction.Right) {
        }
        if (enemy.direction == Direction.Up) {
            if (enemy.distance >= target) {
                enemy.direction = Direction.Left;
                enemy.target = randRange(50, 150);
                enemy.distance = 0;
            }
            enemy.dy = -speedX / 2;
            enemy.dx = 0;
            enemy.distance += -enemy.dy * Settings.delta;
        }
        if (enemy.direction == Direction.Down) {
            if (enemy.distance >= target) {
                enemy.direction = Direction.Left;
                enemy.target = randRange(50, 150);
                enemy.distance = 0;
            }
            enemy.dy = speedX / 2;
            enemy.dx = 0;
            enemy.distance += enemy.dy * Settings.delta;
        }
    }
    if (enemy.pattern == Pattern.Triangular) {
        if (enemy.y >= enemy.sy + amplitude) {
            enemy.dy = -4 * amplitude * frequency;
        }
        if (enemy.dy == 0 || enemy.y <= enemy.sy - amplitude) {
            enemy.dy = 4 * amplitude * frequency;
        }
        enemy.dx = -speedX;
    }
    if (enemy.pattern == Pattern.Straight) {
        enemy.dx = -speedX;
    }

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
