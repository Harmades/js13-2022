import { getElementById } from "./alias";
import { awardMoney } from "./player";
import { Settings } from "./settings";
import { changeScene, Scene, World } from "./world";

export enum PowerUp {
    Speed,
    Shield,
    Multishot,
}

let powerUpList = [0, 0, 0];
let currentShield = 0;
let world: World | null = null;
let progress = 0;
let firstRun = false;

export function create(worldRef: World): void {
    world = worldRef;
    syncUi();
}

export function toggleShop(display: boolean): void {
    getElementById("ui-shop")!.style.display = display ? "flex" : "none";
}

export function onPowerUpChanged(powerUp: PowerUp, amount: number) {
    const player = world!.player;
    let costIndex = powerUpList[powerUp];
    if (amount > 0) costIndex += 1;
    let cost = Settings.powerUpCost[costIndex];

    if (!awardMoney(player, -amount * cost, true)) return;
    powerUpList[powerUp] += amount;
    if (powerUpList[powerUp] > Settings.powerUpMaxCount) {
        powerUpList[powerUp] = Settings.powerUpMaxCount;
    } else if (powerUpList[powerUp] < 0) {
        powerUpList[powerUp] = 0;
    } else {
        awardMoney(player, -amount * cost);
    }
    currentShield = powerUpList[PowerUp.Shield];
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

export function getPowerUpStatus(): number[] {
    return powerUpList;
}

function gray_or_black(powerUp: PowerUp): string {
    const player = world!.player;
    const powerUpCount = powerUpList[powerUp];
    if (powerUpCount == Settings.powerUpMaxCount ||
        !awardMoney(player, Settings.powerUpCost[powerUpCount], true)) {
        return "gray";
    }
    return "black;"
}

function syncUi(): void {
    getElementById("current-speed")!.innerText = powerUpList[PowerUp.Speed].toString();
    getElementById("current-shield")!.innerText = powerUpList[PowerUp.Shield].toString();
    getElementById("current-multishot")!.innerText = powerUpList[PowerUp.Multishot].toString();
    getElementById("current-player-shield")!.innerText = currentShield.toString();
    getElementById("speed-plus")!.style.color = gray_or_black(PowerUp.Speed)
    getElementById("shield-plus")!.style.color = gray_or_black(PowerUp.Shield)
    getElementById("multishot-plus")!.style.color = gray_or_black(PowerUp.Multishot)
    getElementById("speed-minus")!.style.color = powerUpList[PowerUp.Speed] == 0 ? "gray" : "black";
    getElementById("shield-minus")!.style.color = powerUpList[PowerUp.Shield] == 0 ? "gray" : "black";
    getElementById("multishot-minus")!.style.color = powerUpList[PowerUp.Multishot] == 0 ? "gray" : "black";
    getElementById("current-progress")!.style.width = `${progress}%`;
    getElementById("shop")!.style.display = firstRun ? "none" : "flex";
    getElementById("speed-cost")!.innerText = Settings.powerUpCost[powerUpList[PowerUp.Speed] + 1]
    getElementById("shield-cost")!.innerText = Settings.powerUpCost[powerUpList[PowerUp.Shield] + 1]
    getElementById("multishot-cost")!.innerText = Settings.powerUpCost[powerUpList[PowerUp.Multishot] + 1]
    // getElementById("shop-label")!.style.display = firstRun ? "none" : "block";
}

(window as any).onPowerUpChanged = onPowerUpChanged;
(window as any).play = play;
