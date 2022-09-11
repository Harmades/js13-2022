import atlasJson from "../assets/texture.json";
import * as atlasPng from "../assets/texture.png";
import { getElementById } from "./alias";
import { Rectangle } from "./rectangle";
import { Settings } from "./settings";
import { Sprite } from "./sprite";

export type Renderer = {
    gameCanvas: CanvasRenderingContext2D;
    backgroundCanvas: CanvasRenderingContext2D;
    offscreenCanvas: CanvasRenderingContext2D;
    image: HTMLImageElement;
};

let ratioX = Settings.width / Settings.worldWidth;
let ratioY = Settings.height / Settings.worldHeight;

export type AtlasSprite = keyof typeof atlasJson.frames;

export function create(): Renderer {
    return {
        image: loadImage(atlasPng),
        gameCanvas: getCanvas("game-canvas", Settings.width, Settings.height),
        backgroundCanvas: getCanvas("background-canvas", Settings.width, Settings.height),
        offscreenCanvas: getCanvas(
            "offscreen-canvas",
            Settings.tileSize * ratioX,
            Settings.tileSize * ratioY
        ),
    };
}

export function loadImage(path: string, onload?: () => void): HTMLImageElement {
    const image = new Image(atlasJson.meta.size.w, atlasJson.meta.size.h);
    image.src = path;
    if (onload) image.onload = onload;
    return image;
}

export function getCanvas(id: string, width: number, height: number): CanvasRenderingContext2D {
    const canvas = getElementById(id) as HTMLCanvasElement;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.imageSmoothingEnabled = false;
    return context;
}

export function drawImage({ gameCanvas, image }: Renderer, { x, y, ox, oy, sprite }: Sprite): void {
    if (!image.complete) return;
    const frame = atlasJson.frames[sprite].frame;
    gameCanvas.drawImage(
        image,
        frame.x,
        frame.y,
        frame.w,
        frame.h,
        (x - ox) * ratioX,
        (y - oy) * ratioY,
        frame.w * ratioX,
        frame.h * ratioY
    );
}

export function drawRect({ gameCanvas }: Renderer, { x, y, w, h, color }: Sprite) {
    if (gameCanvas) gameCanvas.fillStyle = color ?? "rgba(255, 165, 0, 0.5)";
    gameCanvas.fillRect(x * ratioX, y * ratioY, w * ratioX, h * ratioY);
}

export function drawSprite(renderer: Renderer, sprite: Sprite) {
    drawImage(renderer, sprite);
    if (Settings.debug) {
        drawRect(renderer, sprite);
    }
}

export function drawImageRepeated(
    { offscreenCanvas, image }: Renderer,
    destinationCanvas: CanvasRenderingContext2D,
    sprite: AtlasSprite,
    { x, y, w, h }: Rectangle,
    flipH: boolean
): void {
    if (!image.complete) return;
    const frame = atlasJson.frames[sprite].frame;
    clearCanvas(offscreenCanvas);
    offscreenCanvas.save();
    let height = offscreenCanvas.canvas.height;
    if (flipH) {
        offscreenCanvas.scale(1, -1);
        height = frame.h - height;
    }
    offscreenCanvas.drawImage(
        image,
        frame.x,
        frame.y,
        frame.w,
        frame.h,
        0,
        0,
        offscreenCanvas.canvas.width,
        height
    );
    offscreenCanvas.restore();
    const pattern = destinationCanvas.createPattern(
        offscreenCanvas.canvas,
        "repeat"
    ) as CanvasPattern;
    destinationCanvas.fillStyle = pattern;
    destinationCanvas.fillRect(x * ratioX, y * ratioY, w * ratioX, h * ratioY);
}

export function clear({ gameCanvas, backgroundCanvas, offscreenCanvas }: Renderer): void {
    clearCanvas(gameCanvas);
    clearCanvas(backgroundCanvas);
    clearCanvas(offscreenCanvas);
}

function clearCanvas(canvas: CanvasRenderingContext2D): void {
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
}
