import * as Boss from "./boss";
import * as Enemies from "./enemies";
import * as Physics from "./physics";
import * as Player from "./player";
import { Renderer } from "./renderer";
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
    scene: Scene;
};

export function create(): World {
    const player = Player.create();
    const enemies = Enemies.create(player);
    const world = {
        player,
        enemies,
        scene: Scene.Shop,
    };
    UI.create(world);
    return world;
}

export function update(world: World): void {
    if (world.scene == Scene.Game) {
        Player.update(world.player);
        Enemies.update(world.enemies);
        Physics.update(world);
    }
}

export function render(renderer: Renderer, world: World) {
    if (world.scene == Scene.Game) {
        Player.render(renderer, world.player);
        Enemies.render(renderer, world.enemies);
    }
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
