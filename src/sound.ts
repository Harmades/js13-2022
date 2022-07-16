declare global {
    var zzfxX: AudioContext;
}
declare function zzfxM(...arg: any): void;
declare function zzfxP(...arg: any): void;
const u = undefined;

const cowboy = [[[.5, 0, 196, .05, .5, .6, 1], [.8, u, 24.5, .2, .3, .7, u, .5, u, u, 5, u, .1, u, u, u, u, .8, u, .2], [2, 0, 196, .02, .1, .4, 1], [, 0, 49, u, u, .2, 3, 5]], [[[, -1, 6, u, u, u, u, u, u, u, 8, u, u, u, u, u, u, u, 10, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u], [, 1, 10, u, u, u, u, u, u, u, 12, u, u, u, u, u, u, u, 17, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u], [, u, 3, u, u, u, u, u, u, u, 5, u, u, u, u, u, u, u, 6, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u], [2, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, 15, 15, u, 13, u, 10, u]], [[, -1, 6, u, u, u, u, u, u, u, 8, u, u, u, u, u, u, u, 10, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u], [, 1, 10, u, u, u, u, u, u, u, 12, u, u, u, u, u, u, u, 17, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u], [, u, 3, u, u, u, u, u, u, u, 5, u, u, u, u, u, u, u, 6, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u], [2, u, 8, u, u, u, u, u, u, u, 3, u, 3, u, 10, u, u, u, 8, u, 6, u, u, u, u, u, u, 15, 15, u, 13, u, 10, u], [3, u, 8, u, u, u, 8, u, 10, u, u, u, u, u, u, u, u, u, u, u, u, u, 1, u, 3, u, u, 15, 15, u, 13, u, 10, u]], [[, -1, 6, u, u, u, u, u, u, u, 8, u, u, u, u, u, u, u, 10, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u], [, 1, 10, u, u, u, u, u, u, u, 12, u, u, u, u, u, u, u, 17, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u], [, u, 3, u, u, u, u, u, u, u, 5, u, u, u, u, u, u, u, 6, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u], [2, u, 8, u, u, u, u, u, u, u, 3, u, 3, u, 10, u, u, u, 8, u, 6, u, u, u, u, u, u, 15, 15, u, 13, u, 10, u], [3, u, 8, u, u, u, 8, u, 10, u, u, u, 1, 3, u, u, 8, u, 1, 3, u, u, 1, u, 3, u, u, 15, 15, u, 13, u, 10, u]]], [0, 1, 2, 1, 2], 110, u];

let cowboy_song: any;
let audio_node: any;

export function load() {
    zzfxX = new window.AudioContext;
    cowboy_song = zzfxM(...cowboy);
}

export function play_cowboy() {
    zzfxX.resume();
    audio_node = zzfxP(...cowboy_song);
    audio_node.loop = true;
}

export function stop_song() {
    audio_node.stop();
}