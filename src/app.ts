import { createCanvas, loadImage } from "./renderer";
import { Settings } from "./settings";
import logo from "../assets/logo.png";

const context = createCanvas(Settings.width, Settings.height, "gameCanvas");
const logoImage = loadImage(logo, () => {
    context.drawImage(logoImage, Settings.width / 2 - 151 / 2, Settings.height / 2 - 151 / 2);
    context.drawImage()
});
