import { getElementById } from "./alias";
import { awardMoney } from "./player";
import { Settings } from "./settings";
import { changeScene, Scene, World } from "./world";

export enum PowerUp {
    Speed,
    Shield,
    Multishot,
}

let speed = 0;
let shield = 0;
let currentShield = 0;
let multishot = 0;
let world: World | null = null;
let progress = 0;
let firstRun = true;

export function create(worldRef: World): void {
    world = worldRef;
    syncUi();
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
    if (speed > Settings.powerUpMaxCount) {
        speed = Settings.powerUpMaxCount;
        awardMoney(player, amount);
    }
    if (shield < 0) {
        shield = 0;
        awardMoney(player, amount);
    }
    if (shield > Settings.powerUpMaxCount) {
        shield = Settings.powerUpMaxCount;
        awardMoney(player, amount);
    }
    if (multishot < 0) {
        multishot = 0;
        awardMoney(player, amount);
    }
    if (multishot > Settings.powerUpMaxCount) {
        multishot = Settings.powerUpMaxCount;
        awardMoney(player, amount);
    }
    syncUi();
}

export function onMoneyChanged(money: number) {
    getElementById("current-money")!.innerText = money.toString();
}

export function onProgressChanged(value: number) {
    progress = value;
    syncUi();
}

export function onCurrentShieldChanged(value: number): void {
    currentShield = value;
    syncUi();
}

export function play(): void {
    changeScene(Scene.Game, world!);
    firstRun = false;
}

export function gg(): void {
    changeScene(Scene.End, world!);
}

export function displayEnd(): void {
    toggleShop(true);
    getElementById("shop-label")!.innerText = "Thank you for playing!";
    getElementById("shop")!.style.display = "none";
    getElementById("play")!.style.display = "none";
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
    getElementById("current-player-shield")!.innerText = currentShield.toString();
    getElementById("speed-plus")!.style.color =
        speed == Settings.powerUpMaxCount ? "gray" : "black";
    getElementById("shield-plus")!.style.color =
        shield == Settings.powerUpMaxCount ? "gray" : "black";
    getElementById("multishot-plus")!.style.color =
        multishot == Settings.powerUpMaxCount ? "gray" : "black";
    getElementById("speed-minus")!.style.color = speed == 0 ? "gray" : "black";
    getElementById("shield-minus")!.style.color = shield == 0 ? "gray" : "black";
    getElementById("multishot-minus")!.style.color = multishot == 0 ? "gray" : "black";
    getElementById("current-progress")!.style.width = `${progress}%`;
    getElementById("shop")!.style.display = firstRun ? "none" : "flex";
    // getElementById("shop-label")!.style.display = firstRun ? "none" : "block";
}

(window as any).onPowerUpChanged = onPowerUpChanged;
(window as any).play = play;
