import * as Background from "./background";
import * as Border from "./border";
import * as Boss from "./boss";
import * as Enemies from "./enemies";
import * as Player from "./player";
import { Renderer, setCurrentCanvas } from "./renderer";
import * as UI from "./ui";
import { toggleShop } from "./ui";

export enum Scene {
    Shop,
    Game,
    Quest,
}

export type World = {
    player: Player.Player;
    enemies: Enemies.Enemies;
    background: Background.Background;
    scene: Scene;
};

export function create(): World {
    const player = Player.create();
    const enemies = Enemies.create(player);
    const background = Background.create();
    const world = {
        background,
        player,
        enemies,
        scene: Scene.Shop,
    };
    UI.create(world);
    return world;
}

export function update(world: World): void {
    if (world.scene == Scene.Game) {
        Background.update();
        Border.update();
        Player.update(world.player);
        Enemies.update(world.enemies);
        // Physics.update(world);
    }
}

export function render(renderer: Renderer, world: World) {
    setCurrentCanvas(renderer, renderer.backgroundCanvas);
    Background.render(renderer, world.background);
    if (world.scene == Scene.Game) {
        setCurrentCanvas(renderer, renderer.gameCanvas);
        Player.render(renderer, world.player);
        Enemies.render(renderer, world.enemies);
    }
    setCurrentCanvas(renderer, renderer.foregroundCanvas);
    Border.render(renderer);
}

export function changeScene(scene: Scene, world: World) {
    Player.reset(world.player);
    Enemies.reset(world.enemies);
    Boss.reset(world.enemies.boss);
    world.scene = scene;
    if (scene == Scene.Shop) {
        toggleShop(true);
    }
    if (scene == Scene.Game) {
        toggleShop(false);
    }
}
