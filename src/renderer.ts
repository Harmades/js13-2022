import { createElement, getElementById, round } from "./alias";
import { Rectangle } from "./rectangle";
import { Settings } from "./settings";
import { Vector } from "./vector";

export type Renderer = {
    canvas: CanvasRenderingContext2D;
};

export function create() {
    return {
        canvas: createCanvas(Settings.width, Settings.height, "gameCanvas"),
    };
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

export function drawImage({ canvas }: Renderer, image: HTMLImageElement, { x, y }: Vector): void {
    canvas.drawImage(image, x, y);
}

export function drawRect({ canvas }: Renderer, { x, y, w, h }: Rectangle, color = "#FF0000") {
    if (canvas) canvas.fillStyle = color;
    canvas.fillRect(round(x), round(y), w, h);
}

export function translate({ canvas }: Renderer, { x, y }: Vector) {
    canvas.translate(x, y);
}

export function rotate({ canvas }: Renderer, angle: number): void {
    canvas.translate(Settings.width / 2, Settings.height / 2);
    canvas.rotate(angle);
}

export function save({ canvas }: Renderer): void {
    canvas.save();
}

export function restore({ canvas }: Renderer): void {
    canvas.restore();
}

export function clear({ canvas }: Renderer): void {
    canvas.clearRect(0, 0, Settings.width, Settings.height);
}
