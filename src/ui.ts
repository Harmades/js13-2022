import { getElementById } from "./alias";

export enum PowerUp {
    Speed,
    Shield,
    Multishot,
}

let speed = 0;
let shield = 0;
let multishot = 0;

export function create(): void {}

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

function syncUi(): void {
    const currentSpeedElement = getElementById("current-speed");
    const currentShieldElement = getElementById("current-shield");
    const currentMultishotElement = getElementById("current-multishot");
    if (
        currentSpeedElement == null ||
        currentShieldElement == null ||
        currentMultishotElement == null
    ) {
        return;
    }
    currentSpeedElement.innerText = speed.toString();
    currentShieldElement.innerText = shield.toString();
    currentMultishotElement.innerText = multishot.toString();
}

(window as any).onPowerUpChanged = onPowerUpChanged;
