export const input = {
    up: false,
    down: false,
    left: false,
    right: false,
    space: false,
    shift: false,
    m: false,
};

export type Input = typeof input;

onkeydown = onkeyup = (event) => setKey(event.keyCode, event.type[5] != undefined);

function setKey(keyCode: number, value: boolean) {
    // Up (up / W / Z)
    if (keyCode == 38 || keyCode == 90 || keyCode == 87) input.up = value;
    // Right (right / D)
    if (keyCode == 39 || keyCode == 68) input.right = value;
    // Down (down / S)
    if (keyCode == 40 || keyCode == 83) input.down = value;
    // Left (left / A / Q)
    if (keyCode == 37 || keyCode == 65 || keyCode == 81) input.left = value;
    // Shift (left / right)
    if (keyCode == 16) input.shift = value;
    // Space
    if (keyCode == 32) input.space = value;
    // m
    if (keyCode == 77) input.m = value;
}

export function update(): void {}

export function createReleasedKeyPress(key: keyof Input): () => boolean {
    let released = true;
    return () => {
        if (input[key] && released) {
            released = false;
            return true;
        }
        if (!input[key]) released = true;
        return false;
    };
}
