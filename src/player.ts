import * as Bullet from "./bullet";
import {
    Bullets,
    create as createBullets,
    fire as fireBullets,
    Pattern as BulletsPattern,
    update as updateBullets,
} from "./bullets";
import { createReleasedKeyPress, input } from "./input";
import { Rectangle } from "./rectangle";
import { drawRect, Renderer } from "./renderer";
import { Settings } from "./settings";
import { load, playGameMusic, stopSong } from "./sound";
import { Speed } from "./speed";
import { add as addVector, create as createVector } from "./vector";

const spaceInput = createReleasedKeyPress("space");
const shiftInput = createReleasedKeyPress("shift");
let isPlaying = false;
let isAudioInitialized = false;

export type Player = Rectangle &
    Speed & {
        bullets: Bullets;
        bulletsPattern: BulletsPattern;
    };

export function create(): Player {
    const player = {
        x: Settings.playerWidth,
        dx: 0,
        y: Settings.height / 2,
        dy: 0,
        w: Settings.playerWidth,
        h: Settings.playerHeight,
        bullets: createBullets(
            Settings.playerBulletsPoolSize,
            Settings.playerBulletSpeedX,
            Settings.playerBulletSpeedY,
            Settings.playerSprayOpen
        ),
        bulletsPattern: BulletsPattern.Single,
    };
    return player;
}

export function shoot(player: Player): void {
    let bullet = player.bullets.bullets.find((b) => !b.isActive);
    if (bullet == undefined) return;
    fireBullets(
        player.bullets,
        player.dx + Settings.playerBulletSpeedX,
        addVector(player, createVector(Settings.playerWidth, Settings.playerHeight / 2)),
        player.bulletsPattern
    );
    player.bulletsPattern += 1;
    player.bulletsPattern %= BulletsPattern.ConicEnd;
}

export function update(player: Player) {
    let dx = 0,
        dy = 0;
    updateBullets(player.bullets);
    if (input.left) dx += -Settings.playerSpeedX;
    if (input.right) dx += Settings.playerSpeedX;
    if (input.up) dy += -Settings.playerSpeedY;
    if (input.down) dy += Settings.playerSpeedY;
    if (spaceInput()) shoot(player);
    player.dx = dx;
    player.dy = dy;

    if (!isAudioInitialized) {
        load();
        isAudioInitialized = true;
    }
    if (isAudioInitialized && shiftInput()) {
        if (isPlaying) {
            stopSong();
        } else {
            playGameMusic();
        }
        isPlaying = !isPlaying;
    }

    player.x += player.dx * Settings.delta;
    player.y += player.dy * Settings.delta;
    if (player.x <= 0) player.x = 0;
    if (player.x >= Settings.width - Settings.playerWidth)
        player.x = Settings.width - Settings.playerWidth;
    if (player.y <= 0) player.y = 0;
    if (player.y >= Settings.height - Settings.playerHeight)
        player.y = Settings.height - Settings.playerHeight;
}

export function reset(player: Player): void {
    player.x = Settings.playerWidth;
    player.y = Settings.height / 2;
    player.dx = 0;
    player.dy = 0;
}

export function render(renderer: Renderer, player: Player) {
    drawRect(renderer, player);
    for (let bullet of player.bullets.bullets) {
        if (bullet.isActive) {
            Bullet.render(renderer, bullet);
        }
    }
}
