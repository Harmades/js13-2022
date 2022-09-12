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
import { playPlayerHit } from "./sound";
import { Speed } from "./speed";
import { Sprite } from "./sprite";
import { getPowerUpStatus, onCurrentShieldChanged, onMoneyChanged, PowerUp } from "./ui";
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
        shootF: number;
        shootTime: number;
    };

let sprites: AtlasSprite[] = ["cerbere", "cerbere2"];

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
        money: 0,
        sprite: sprites[0],
        invincibleTime: 0,
        ox: Settings.playerOx,
        oy: Settings.playerOy,
        animationTime: 0,
        shootF: Settings.playerShootF,
        shootTime: 0,
    };
    onMoneyChanged(player.money);
    return player;
}

export function shoot(player: Player): void {
    let bullet = player.bullets.bullets.find((b) => !b.isActive);
    if (bullet == undefined) return;
    fireBullets(
        player.bullets,
        (player.shootSpeed * 0.5 + 1) * Settings.playerBulletSpeedX,
        addVector(player, createVector(Settings.playerWidth, Settings.playerHeight / 2)),
        player.bulletsPattern
    );
    /*player.bulletsPattern += 1;
    player.bulletsPattern %= BulletsPattern.ConicEnd;*/
}

export function update(player: Player) {
    player.shootTime += Settings.delta;
    if (player.shootTime >= 1 / player.shootF) {
        shoot(player);
        player.shootTime = 0;
    }
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
    player.dx = dx;
    player.dy = dy;

    player.x += player.dx * Settings.delta;
    player.y += player.dy * Settings.delta;
    if (input.x) player.x = input.x;
    if (input.y) player.y = input.y;
    if (player.x <= 0) player.x = 0;
    if (player.x >= Settings.worldWidth - Settings.playerWidth)
        player.x = Settings.worldWidth - Settings.playerWidth;
    if (player.y <= 0) player.y = 0;
    if (player.y >= Settings.worldHeight - Settings.playerHeight)
        player.y = Settings.worldHeight - Settings.playerHeight;

    player.animationTime += Settings.delta;
    if (player.animationTime > Settings.playerAnimationTime) {
        player.animationTime = 0;
        player.sprite = player.sprite == sprites[0] ? sprites[1] : sprites[0];
    }
}

export function reset(player: Player): void {
    player.x = Settings.playerWidth;
    player.y = Settings.worldHeight / 2;
    player.dx = 0;
    player.dy = 0;
    let powerUps = getPowerUpStatus();
    player.shootSpeed = powerUps[PowerUp.Speed];
    player.shootF = Settings.playerShootF * (powerUps[PowerUp.Speed] + 1);
    player.shieldCount = powerUps[PowerUp.Shield];
    if (player.shieldCount == Settings.powerUpMaxCount) {
        player.bullets.shielded = true;
    }
    if (powerUps[PowerUp.Multishot] == Settings.powerUpMaxCount) {
        player.bulletsPattern = BulletsPattern.Straight;
    } else {
        player.bulletsPattern = powerUps[PowerUp.Multishot];
    }

    onCurrentShieldChanged(player.shieldCount);
}

export function bulletHit(player: Player): number {
    if (player.invincibleTime == 0) {
        player.shieldCount -= 1;
        playPlayerHit();
        player.invincibleTime = Settings.playerInvincibleTime;
    }
    onCurrentShieldChanged(player.shieldCount);
    return player.shieldCount;
}

export function awardMoney(player: Player, money: any, onlyCheck: boolean = false): boolean {
    if (player.money + money < 0) {
        return false;
    } else if (onlyCheck) {
        return true;
    }
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

    if (player.shieldCount != 0) {
        drawSprite(renderer, {
            ...player,
            sprite: "shield",
            x: player.x - 4,
            y: player.y - 4,
        });
    }
}
