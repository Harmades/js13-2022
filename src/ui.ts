import { getElementById } from "./alias";
import { Enemies } from "./enemies";
import { Player } from "./player";
import { changeScene, Scene } from "./scenes";

export enum PowerUp {
    Speed,
    Shield,
    Multishot,
}

let speed = 0;
let shield = 0;
let multishot = 0;
let player: Player | null = null;
let enemies: Enemies | null = null;

export function create(playerRef: Player, enemiesRef: Enemies): void {
    player = playerRef;
    enemies = enemiesRef;
}

export function toggleShop(): void {
    const element = getElementById("ui") as HTMLElement;
    element.style.display = element.style.display != "flex" ? "flex" : "none";
}

export function onPowerUpChanged(powerUp: PowerUp, amount: number) {
    if (powerUp == PowerUp.Speed) {
        speed += amount;
    }
    if (powerUp == PowerUp.Shield) {
        shield += amount;
    }
    if (powerUp == PowerUp.Multishot) {
        multishot += amount;
    }
    if (speed < 0) speed = 0;
    if (shield < 0) shield = 0;
    if (multishot < 0) multishot = 0;
    syncUi();
}

export function play(): void {
    changeScene(Scene.Game, player!, enemies!);
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
