import { Enemies, reset as resetEnemies } from "./enemies";
import { Player, reset as resetPlayer } from "./player";
import { toggleShop } from "./ui";
import { Boss, reset as resetBoss } from "./boss"

export enum Scene {
    Shop,
    Game,
    Quest,
}

export function changeScene(scene: Scene, player: Player, enemies: Enemies, boss: Boss) {
    resetPlayer(player);
    resetEnemies(enemies);
    resetBoss(boss);
    if (scene == Scene.Shop || scene == Scene.Game) {
        toggleShop();
    }
}
