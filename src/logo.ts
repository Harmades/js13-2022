import logo from "../assets/logo.png";
import * as Renderer from "./renderer";
import { PI } from "./alias";

let image: HTMLImageElement | null = null;
let rotation: number = 0;
let width = 151;
let height = 151;

export function create(): void {
    image = Renderer.loadImage(logo);
}

export function update(delta: number) {
    rotation -= PI / 1080;
}

export function render(): void {
    if (!this.image?.complete) return;
    Renderer.save();
    Renderer.rotate(this.rotation);
    Renderer.drawImage(this.image, - width / 2, - height / 2);
    Renderer.restore();
}