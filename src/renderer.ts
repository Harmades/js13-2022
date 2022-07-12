import { createElement, getElementById } from "./alias";

export function loadImage(path: string, onload: () => void): HTMLImageElement {
    const image = new Image(151, 151);
    image.src = path;
    image.onload = onload;
    return image;
}

export function createCanvas(w: number, h: number, id: string | null = null) {
    const canvas = (id == null ? createElement("canvas") : getElementById(id)) as HTMLCanvasElement;
    canvas.width = w;
    canvas.height = h;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    return context;
}
