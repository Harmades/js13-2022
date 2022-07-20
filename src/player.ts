import { input } from "./input";
import { Rectangle } from "./rectangle";
import logo from "../assets/logo.png";
import * as Renderer from "./renderer";
import { PI } from "./alias";
import { createReleasedKeyPress } from "./input";
import { load, play_cowboy, stop_song } from "./sound";
import { Settings } from "./settings";

let image: HTMLImageElement | null = null;
let speed = 100;
let spaceInput = createReleasedKeyPress("space");
let isPlaying = false;
let isAudioInitialized = false;

export type Player = Rectangle & {
    dx: number;
    dy: number;
};

export const player: Player = {
    x: 50,
    dx: 0,
    y: 50,
    dy: 0,
    w: 50,
    h: 50,
};

export function create() {
    image = Renderer.loadImage(logo);
}

export function update() {
    if (input.left) player.dx = -speed;
    if (input.right) player.dx = speed;
    if (input.up) player.dy = -speed;
    if (input.down) player.dy = speed;
    if (!input.left && !input.right) player.dx = 0;
    if (!input.up && !input.down) player.dy = 0;

    if (!isAudioInitialized) {
        load();
        isAudioInitialized = true;
    }
    if (isAudioInitialized && spaceInput()) {
        if (isPlaying) {
            stop_song();
        } else {
            play_cowboy();
        }
        isPlaying = !isPlaying;
    }

    player.x += player.dx * Settings.delta;
    player.y += player.dy * Settings.delta;
}

export function render() {
    if (!image?.complete) return;
    Renderer.drawRect(player.x, player.y, player.w, player.h);
}