import { floor } from "./alias";
import * as Bullet from "./bullet";
import {
    Bullets,
    create as createBullets,
    fire as fireBullets,
    Pattern as BulletsPattern,
    update as updateBullets,
} from "./bullets";
import { createReleasedKeyPress, input } from "./input";
import { AtlasSprite, drawSprite, Renderer } from "./renderer";
import { Settings } from "./settings";
import { load, playBossMusic, playPlayerHit, stopSong } from "./sound";
import { Speed } from "./speed";
import { Sprite } from "./sprite";
import { getPowerUpStatus, onMoneyChanged, PowerUp } from "./ui";
import { add as addVector, create as createVector } from "./vector";

const spaceInput = createReleasedKeyPress("space");
const shiftInput = createReleasedKeyPress("shift");
let isPlaying = false;
let isAudioInitialized = false;

export type Player = Sprite &
    Speed & {
        bullets: Bullets;
        bulletsPattern: BulletsPattern;
        shootSpeed: number;
        shieldCount: number;
        money: number;
        invincibleTime: number;
        animationTime: number;
    };

let sprites: AtlasSprite[] = ["assets/cerbere.png", "assets/cerbere2.png"];

export function create(): Player {
    const player: Player = {
        x: Settings.playerWidth,
        dx: 0,
        y: Settings.worldHeight / 2,
        dy: 0,
        w: Settings.playerWidth,
        h: Settings.playerHeight,
        bullets: createBullets(
            Settings.playerBulletsPoolSize,
            Settings.playerBulletSpeedX,
            Settings.playerBulletSpeedY,
            Settings.playerSprayOpen,
            Settings.playerBulletWidth,
            Settings.playerBulletHeight,
            undefined,
            true
        ),
        bulletsPattern: BulletsPattern.Single,
        shootSpeed: 1,
        shieldCount: 0,
        money: 10,
        sprite: sprites[0],
        invincibleTime: 0,
        ox: Settings.playerOx,
        oy: Settings.playerOy,
        animationTime: 0,
    };
    onMoneyChanged(player.money);
    return player;
}

export function shoot(player: Player): void {
    let bullet = player.bullets.bullets.find((b) => !b.isActive);
    if (bullet == undefined) return;
    fireBullets(
        player.bullets,
        player.shootSpeed * Settings.playerBulletSpeedX,
        addVector(player, createVector(Settings.playerWidth, Settings.playerHeight / 2)),
        player.bulletsPattern
    );
    /*player.bulletsPattern += 1;
    player.bulletsPattern %= BulletsPattern.ConicEnd;*/
}

export function update(player: Player) {
    let dx = 0,
        dy = 0;
    updateBullets(player.bullets);
    if (player.invincibleTime > 0) {
        player.invincibleTime -= Settings.delta;
    } else {
        player.invincibleTime = 0;
    }
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
            playBossMusic();
        }
        isPlaying = !isPlaying;
    }

    player.x += player.dx * Settings.delta;
    player.y += player.dy * Settings.delta;
    if (player.x <= 0) player.x = 0;
    if (player.x >= Settings.worldWidth - Settings.playerWidth)
        player.x = Settings.worldWidth - Settings.playerWidth;
    if (player.y <= 0) player.y = 0;
    if (player.y >= Settings.worldHeight - Settings.playerHeight)
        player.y = Settings.worldHeight - Settings.playerHeight;

    if (player.dx != 0 || player.dy != 0) {
        player.animationTime += Settings.delta;
        if (player.animationTime > Settings.playerAnimationTime) {
            player.animationTime = 0;
            player.sprite = player.sprite == sprites[0] ? sprites[1] : sprites[0];
        }
    } else {
        player.sprite = sprites[0];
        player.animationTime = 0;
    }
}

export function reset(player: Player): void {
    player.x = Settings.playerWidth;
    player.y = Settings.worldHeight / 2;
    player.dx = 0;
    player.dy = 0;
    let powerUps = getPowerUpStatus();
    player.shootSpeed = powerUps[PowerUp.Speed] + 1; /* TODO Handle Laser shot */
    player.shieldCount = powerUps[PowerUp.Shield] + 1;
    if (player.shieldCount == Settings.powerUpMaxCount) {
        player.bullets.shielded = true;
    }
    if (powerUps[PowerUp.Multishot] == Settings.powerUpMaxCount) {
        player.bulletsPattern = BulletsPattern.Straight;
    } else {
        player.bulletsPattern = powerUps[PowerUp.Multishot];
    }
}

export function bulletHit(player: Player): number {
    if (player.invincibleTime == 0) {
        player.shieldCount -= 1;
        playPlayerHit();
        player.invincibleTime = Settings.playerInvincibleTime;
    }
    return player.shieldCount;
}

export function awardMoney(player: Player, money: number): boolean {
    if (player.money + money < 0) return false;
    player.money += money;
    onMoneyChanged(player.money);
    return true;
}

export function render(renderer: Renderer, player: Player) {
    if (floor(player.invincibleTime / Settings.playerBlinkPeriod) % 2 == 0) {
        drawSprite(renderer, player);
    }
    for (let bullet of player.bullets.bullets) {
        if (bullet.isActive) {
            Bullet.render(renderer, bullet);
        }
    }
}
