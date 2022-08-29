import logo from "../assets/logo.png";

import * as Bullet from "./bullet";
import { createReleasedKeyPress, input } from "./input";
import { Rectangle } from "./rectangle";
import { drawRect, loadImage, Renderer } from "./renderer";
import { Settings } from "./settings";
import { load, play_cowboy, stop_song } from "./sound";
import { Speed } from "./speed";
import * as Vector from "./vector";

let image: HTMLImageElement | null = null;
let speed = 100;
const width = 50;
const height = 50;
const spaceInput = createReleasedKeyPress("space");
const shiftInput = createReleasedKeyPress("shift");
let shootPosition = Vector.create(width, height / 2);
let isPlaying = false;
let isAudioInitialized = false;

export type Player = Rectangle &
    Speed & {
        bullets: Bullet.Bullet[];
    };

export function create(): Player {
    image = loadImage(logo);
    const player = {
        x: 50,
        dx: 0,
        y: 50,
        dy: 0,
        w: width,
        h: height,
        bullets: [
            Bullet.create(),
            Bullet.create(),
            Bullet.create(),
            Bullet.create(),
            Bullet.create(),
            Bullet.create(),
            Bullet.create(),
            Bullet.create(),
            Bullet.create(),
            Bullet.create(),
        ],
    };
    return player;
}

export function shoot(player: Player): void {
    let bullet: Bullet.Bullet | undefined = player.bullets.find((b) => !b.isActive);
    if (bullet == undefined) return;
    Bullet.fire(bullet, Vector.add(player, shootPosition));
}

export function update(player: Player) {
    let dx = 0,
        dy = 0;
    if (input.left) dx += -speed;
    if (input.right) dx += speed;
    if (input.up) dy += -speed;
    if (input.down) dy += speed;
    if (spaceInput()) shoot(player);
    player.dx = dx;
    player.dy = dy;

    if (!isAudioInitialized) {
        load();
        isAudioInitialized = true;
    }
    if (isAudioInitialized && shiftInput()) {
        if (isPlaying) {
            stop_song();
        } else {
            play_cowboy();
        }
        isPlaying = !isPlaying;
    }

    player.x += player.dx * Settings.delta;
    player.y += player.dy * Settings.delta;
    updateBullets(player.bullets);
}

function updateBullets(bullets: Bullet.Bullet[]): void {
    for (let bullet of bullets) {
        Bullet.update(bullet);
    }
}

export function render(renderer: Renderer, player: Player) {
    if (!image?.complete) return;
    drawRect(renderer, player);
    for (let bullet of player.bullets) {
        if (bullet.isActive) {
            Bullet.render(bullet, renderer);
        }
    }
}
