import { Rectangle } from "./rectangle";
import { AtlasSprite } from "./renderer";

export type Sprite = Rectangle & {
    sprite: AtlasSprite;
    color?: string;
    ox: number;
    oy: number;
};
