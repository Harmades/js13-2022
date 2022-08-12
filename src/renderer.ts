import { createElement, getElementById, round } from "./alias";
import { Settings } from "./settings";

let canvas: CanvasRenderingContext2D | null = null;

export function create() {
    canvas = createCanvas(Settings.width, Settings.height, "gameCanvas");
}

export function loadImage(path: string, onload?: () => void): HTMLImageElement {
    const image = new Image(151, 151);
    image.src = path;
    if (onload) image.onload = onload;
    return image;
}

export function createCanvas(
    w: number,
    h: number,
    id: string | null = null
): CanvasRenderingContext2D {
    const canvas = (id == null ? createElement("canvas") : getElementById(id)) as HTMLCanvasElement;
    canvas.width = w;
    canvas.height = h;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    return context;
}

export function drawImage(image: HTMLImageElement, x: number, y: number): void {
    canvas?.drawImage(image, x, y);
}

export function drawRect(x: number, y: number, w: number, h: number, color = "#FF0000") {
    if (canvas) canvas.fillStyle = color;
    canvas?.fillRect(round(x), round(y), w, h);
}

export function translate(x: number, y: number) {
    canvas?.translate(x, y);
}

export function rotate(angle: number): void {
    canvas?.translate(Settings.width / 2, Settings.height / 2);
    canvas?.rotate(angle);
}

export function save(): void {
    canvas?.save();
}

export function restore(): void {
    canvas?.restore();
}

export function clear(): void {
    canvas?.clearRect(0, 0, Settings.width, Settings.height);
}
