import { getElementById } from "./alias";
import { awardMoney } from "./player";
import { changeScene, Scene, World } from "./world";

export enum PowerUp {
    Speed,
    Shield,
    Multishot,
}

let speed = 0;
let shield = 0;
let multishot = 0;
let world: World | null = null;

export function create(worldRef: World): void {
    world = worldRef;
}

export function toggleShop(display: boolean): void {
    getElementById("ui-shop")!.style.display = display ? "flex" : "none";
}

export function onPowerUpChanged(powerUp: PowerUp, amount: number) {
    const player = world!.player;
    if (!awardMoney(player, -amount)) return;
    if (powerUp == PowerUp.Speed) {
        speed += amount;
    }
    if (powerUp == PowerUp.Shield) {
        shield += amount;
    }
    if (powerUp == PowerUp.Multishot) {
        multishot += amount;
    }
    if (speed < 0) {
        speed = 0;
        awardMoney(player, amount);
    }
    if (shield < 0) {
        shield = 0;
        awardMoney(player, amount);
    }
    if (multishot < 0) {
        multishot = 0;
        awardMoney(player, amount);
    }
    syncUi();
}

export function onMoneyChanged(money: number) {
    getElementById("current-money")!.innerText = money.toString();
}

export function play(): void {
    changeScene(Scene.Game, world!);
}

/* Vu que t'avais pas fait de type PowerUp avec des proprietes, je retourne direct les variables locales
 * On pourra changer ça*/
export function getPowerUpStatus(): number[] {
    return [speed, shield, multishot];
}

function syncUi(): void {
    getElementById("current-speed")!.innerText = speed.toString();
    getElementById("current-shield")!.innerText = shield.toString();
    getElementById("current-multishot")!.innerText = multishot.toString();
}

(window as any).onPowerUpChanged = onPowerUpChanged;
(window as any).play = play;
