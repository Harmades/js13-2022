import { createElement, getElementById } from "./alias";
import { Settings } from "./settings";

class RendererEngine {
    private canvas: CanvasRenderingContext2D;

    constructor() {
        this.canvas = this.createCanvas(Settings.width, Settings.height, "gameCanvas");
    }

    loadImage(path: string, onload: () => void): HTMLImageElement {
        const image = new Image(151, 151);
        image.src = path;
        image.onload = onload;
        return image;
    }

    createCanvas(w: number, h: number, id: string | null = null): CanvasRenderingContext2D {
        const canvas = (id == null ? createElement("canvas") : getElementById(id)) as HTMLCanvasElement;
        canvas.width = w;
        canvas.height = h;
        const context = canvas.getContext("2d") as CanvasRenderingContext2D;
        return context;
    }

    drawImage(image: HTMLImageElement, x: number, y: number): void {
        this.canvas.drawImage(image, x, y);
    }

    rotate(angle: number): void {
        this.canvas.translate(Settings.width / 2, Settings.height / 2);
        this.canvas.rotate(angle);
    }

    save(): void {
        this.canvas.save();
    }

    restore(): void {
        this.canvas.restore();
    }

    clear(): void {
        this.canvas.clearRect(0, 0, Settings.width, Settings.height);
    }
}

export const Renderer = new RendererEngine();