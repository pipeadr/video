"use strict";
// exports.__esModule = true;
var AutoPlay = /** @class */ (function () {
    class AutoPlay {
        constructor() {
        }
        run(player) {
            if (!player.media.muted) {
                player.media.muted = true;
                !player.play() ? player.play() : player.play();
            }
            else {
                !player.play() ? player.play() : player.play();
            }
        }
    }
    return AutoPlay;
}());
// exports["default"] = AutoPlay;
export default AutoPlay;
