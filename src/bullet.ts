import { floor, min, PI, pow, sin } from "./alias";
import { Bullets } from "./bullets";
import { AtlasSprite, drawImageRepeated, drawSprite, Renderer } from "./renderer";
import { Settings } from "./settings";
import { Speed } from "./speed";
import { Sprite } from "./sprite";
import { create as createVector, Vector } from "./vector";

export type Bullet = Sprite &
    Speed & {
        isActive: boolean;
        bullets?: Bullets;
        dh: number;
        dhDirection: number;
        explodeTick: number;
        shielded: boolean;
    };

export function create(
    h: number = Settings.bulletHeight,
    w: number = Settings.bulletWidth,
    shielded: boolean = false,
    isPlayerBullet: boolean
): Bullet {
    return {
        x: 0,
        y: 0,
        w: w,
        h: h,
        dx: 0,
        dy: 0,
        isActive: false,
        dh: 0,
        dhDirection: 0,
        explodeTick: 0,
        shielded: shielded,
        sprite: isPlayerBullet ? "friendly_bullet" : "enemie_bullet",
        ox: Settings.bulletOx,
        oy: Settings.bulletOy,
    };
}

export function update(bullet: Bullet): void {
    if (!bullet.isActive) return;
    bullet.x += bullet.dx * Settings.delta;
    const old_h = bullet.h;
    bullet.h = min(bullet.h + bullet.dh, Settings.bulletMaxHeight);
    if (bullet.h == Settings.bulletMaxHeight)
        bullet.dy = -15 * sin((bullet.x / Settings.worldWidth) * 6 * PI);
    bullet.y += bullet.dy * Settings.delta - (bullet.h - old_h) * bullet.dhDirection;
    if (bullet.explodeTick != 0) {
        bullet.explodeTick -= 1;
        if (bullet.explodeTick == 0) {
            if (bullet.bullets == undefined) {
                free(bullet);
                return;
            }
            const speed = bullet.dx / 2;
            for (let i: number = 0; i < 4; i++) {
                let new_bullet = bullet.bullets.bullets.find((b: Bullet) => !b.isActive);
                if (new_bullet == undefined) {
                    free(bullet);
                    return;
                }
                fire(
                    bullet.bullets,
                    new_bullet,
                    bullet,
                    createVector(pow(-1, i) * speed, pow(-1, floor(i / 2)) * speed + bullet.dy)
                );
            }
            free(bullet);
        }
    }
    if (bullet.x < 0 || bullet.x > Settings.width) {
        free(bullet);
    }
    if (bullet.h == Settings.bulletHeight) {
        if (bullet.y + bullet.h / 2 < 0 || bullet.y > Settings.worldHeight + bullet.h / 2)
            free(bullet);
    }
}

export function render(renderer: Renderer, bullet: Bullet): void {
    if (!bullet.isActive) return;
    drawSprite(renderer, bullet);
    if (bullet.bullets && bullet.explodeTick == 0) {
        if (bullet.bullets.bh != bullet.h) {
            const verticalSprite: AtlasSprite =
                bullet.sprite == "friendly_bullet" ? "friendly_vertical_laser" : "vertical_laser";
            drawImageRepeated(renderer, verticalSprite, bullet, false);
        }
    }
}

export function fire(bullets: Bullets, bullet: Bullet, dest: Vector, speed: Vector) {
    bullet.x = dest.x;
    bullet.y = dest.y;
    bullet.dx = speed.x;
    bullet.dy = speed.y;
    bullet.isActive = true;
    bullet.bullets = bullets;
}

export function free(bullet: Bullet): void {
    bullet.isActive = false;
    bullet.dx = 0;
    bullet.dy = 0;
    bullet.x = 0;
    bullet.y = 0;
    if (bullet.bullets != undefined) {
        bullet.h = bullet.bullets.bh;
        bullet.w = bullet.bullets.bw;
        bullet.shielded = bullet.bullets.shielded;
    }
    bullet.dh = 0;
}
