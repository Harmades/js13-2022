import { repeat } from "./array";
import * as Bullet from "./bullet";
import { createReleasedKeyPress, input } from "./input";
import { Rectangle } from "./rectangle";
import { drawRect, Renderer } from "./renderer";
import { Settings } from "./settings";
import { load, play_cowboy, stop_song } from "./sound";
import { Speed } from "./speed";
import * as Vector from "./vector";

const spaceInput = createReleasedKeyPress("space");
const shiftInput = createReleasedKeyPress("shift");
let shootPosition = Vector.create(Settings.playerWidth, Settings.playerHeight / 2);
let isPlaying = false;
let isAudioInitialized = false;

export type Player = Rectangle &
    Speed & {
        bullets: Bullet.Bullet[];
    };

export function create(): Player {
    const player = {
        x: Settings.playerWidth,
        dx: 0,
        y: Settings.height / 2,
        dy: 0,
        w: Settings.playerWidth,
        h: Settings.playerHeight,
        bullets: repeat(() => Bullet.create(), 50),
    };
    return player;
}

export function shoot(player: Player): void {
    let bullet: Bullet.Bullet | undefined = player.bullets.find((b) => !b.isActive);
    if (bullet == undefined) return;
    Bullet.fire(bullet, Vector.add(player, shootPosition), Settings.playerBulletSpeedX);
}

export function update(player: Player) {
    let dx = 0,
        dy = 0;
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
            stop_song();
        } else {
            play_cowboy();
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
    updateBullets(player.bullets);
}

function updateBullets(bullets: Bullet.Bullet[]): void {
    for (let bullet of bullets) {
        Bullet.update(bullet);
    }
}

export function reset(player: Player): void {
    player.x = Settings.playerWidth;
    player.y = Settings.height / 2;
    player.dx = 0;
    player.dy = 0;
}

export function render(renderer: Renderer, player: Player) {
    drawRect(renderer, player);
    for (let bullet of player.bullets) {
        if (bullet.isActive) {
            Bullet.render(renderer, bullet);
        }
    }
}
