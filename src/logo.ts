import logo from "../assets/logo.png";
import * as Renderer from "./renderer";
import { PI } from "./alias";
import { createReleasedKeyPress } from "./input";
import { load, play_cowboy, stop_song } from "./sound";

let image: HTMLImageElement | null = null;
let rotation: number = 0;
let width = 151;
let height = 151;
let input = createReleasedKeyPress("space");
let isPlaying = false;
let isAudioInitialized = false;

export function create(): void {
    image = Renderer.loadImage(logo);
}

export function update(delta: number) {
    rotation -= PI / 1080;
    if (!isAudioInitialized) {
        load();
        isAudioInitialized = true;
    }
    if (isAudioInitialized && input()) {
        if (isPlaying) {
            stop_song();
        } else {
            play_cowboy();
        }
        isPlaying = !isPlaying;
    }
}

export function render(): void {
    if (!image?.complete) return;
    Renderer.save();
    Renderer.rotate(rotation);
    Renderer.drawImage(image, - width / 2, - height / 2);
    Renderer.restore();
}