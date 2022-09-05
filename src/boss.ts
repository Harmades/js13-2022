import { repeat } from "./array";
import {
    Bullet,
    create as createBullet,
    render as renderBullet,
    update as updateBullet,
} from "./bullet";
import { Direction } from "./direction";
import { rand, randColor, randRange } from "./random";
import { Rectangle } from "./rectangle";
import { drawRect, Renderer } from "./renderer";
import { Settings } from "./settings";
import { Speed } from "./speed";

export type Boss = Rectangle &
    Speed & {
        rx: number;
        ry: number;
        direction: Direction;
        distance: number;
        color: string;
        bullets: Bullet[];
    };

export function create(): Boss {
    const color = `#${randColor()}`;
    return {
        x: Settings.width * 0.75,
        y: Settings.height * 0.5,
        w: Settings.bossWidth,
        h: Settings.bossHeight,
        dx: 0,
        dy: 0,
        distance: 0,
        color,
        direction: Direction.Left,
        bullets: repeat(() => createBullet(), 100),
        rx: randRange(Settings.bossRxMin, Settings.bossRxMax),
        ry: randRange(Settings.bossRyMin, Settings.bossRyMax),
    };
}

export function update(boss: Boss): void {
    for (let bullet of boss.bullets) {
        updateBullet(bullet);
    }

    const speedX = Settings.bossSpeed;
    if (boss.direction == null) {
        boss.direction = Direction.Left;
    }
    if (boss.direction == Direction.Left) {
        if (boss.distance >= boss.rx) {
            boss.direction = rand(Direction.Up, Direction.Down, Direction.Right);
            boss.distance = 0;
        }
        boss.dx = -speedX;
        boss.dy = 0;
        boss.distance += -boss.dx * Settings.delta;
    }
    if (boss.direction == Direction.Right) {
        if (boss.distance >= boss.rx) {
            boss.direction = rand(Direction.Up, Direction.Down, Direction.Left);
            boss.distance = 0;
        }
        boss.dx = speedX;
        boss.dy = 0;
        boss.distance += boss.dx * Settings.delta;
    }
    if (boss.direction == Direction.Up) {
        if (boss.distance >= boss.ry) {
            boss.direction = rand(Direction.Right, Direction.Down, Direction.Left);
            boss.distance = 0;
        }
        boss.dy = -speedX / 2;
        boss.dx = 0;
        boss.distance += -boss.dy * Settings.delta;
    }
    if (boss.direction == Direction.Down) {
        if (boss.distance >= boss.ry) {
            boss.direction = rand(Direction.Right, Direction.Up, Direction.Left);
            boss.distance = 0;
        }
        boss.dy = speedX / 2;
        boss.dx = 0;
        boss.distance += boss.dy * Settings.delta;
    }

    boss.x += boss.dx * Settings.delta;
    boss.y += boss.dy * Settings.delta;
}

export function render(renderer: Renderer, boss: Boss) {
    for (let bullet of boss.bullets) {
        renderBullet(renderer, bullet);
    }

    drawRect(renderer, boss, boss.color);
}
