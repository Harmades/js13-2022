import logo from "../assets/logo.png";
import {
    Bullet,
    create as createBullet,
    fire as fireBullet,
    render as renderBullet,
    update as updateBullet,
} from "./bullet";
import { createReleasedKeyPress, input } from "./input";
import { Rectangle } from "./rectangle";
import { drawRect, loadImage, Renderer } from "./renderer";
import { Settings } from "./settings";
import { load, play_cowboy, stop_song } from "./sound";
import { Speed } from "./speed";

let image: HTMLImageElement | null = null;
let speed = 100;
let spaceInput = createReleasedKeyPress("space");
let shiftInput = createReleasedKeyPress("shift");
let isPlaying = false;
let isAudioInitialized = false;

export type Player = Rectangle &
    Speed & {
        bullets: Bullet[];
    };

export function create(): Player {
    image = loadImage(logo);
    return {
        x: 50,
        dx: 0,
        y: 50,
        dy: 0,
        w: 50,
        h: 50,
        bullets: [
            createBullet(),
            createBullet(),
            createBullet(),
            createBullet(),
            createBullet(),
            createBullet(),
            createBullet(),
            createBullet(),
            createBullet(),
            createBullet(),
        ],
    };
}

export function shoot(player: Player): void {
    let bullet: Bullet | undefined = player.bullets.find((b) => !b.isActive);
    if (bullet == undefined) return;
    fireBullet(bullet, player);
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

function updateBullets(bullets: Bullet[]): void {
    for (let bullet of bullets) {
        updateBullet(bullet);
    }
}

export function render(renderer: Renderer, player: Player) {
    if (!image?.complete) return;
    drawRect(renderer, player);
    for (let bullet of player.bullets) {
        if (bullet.isActive) {
            renderBullet(bullet, renderer);
        }
    }
}
