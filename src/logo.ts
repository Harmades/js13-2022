import logo from "../assets/logo.png";
import { PI } from "./alias";
import { Renderer } from "./renderer";

export class Logo implements Entity {
    private image: HTMLImageElement | null = null;
    private rotation: number = 0;

    constructor() {
        this.image = Renderer.loadImage(logo, () => { });
    }

    update(delta: number) {
        this.rotation -= PI / 1080;
    }

    render(): void {
        if (!this.image?.complete) return;
        Renderer.save();
        Renderer.rotate(this.rotation);
        Renderer.drawImage(this.image, -151 / 2, -151 / 2);
        Renderer.restore();
    }
}