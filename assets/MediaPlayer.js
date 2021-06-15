"use strict";
// exports.__esModule = true;
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.rp;
    }
    MediaPlayer.prototype.play = function () {
        this.media.paused ? this.media.play() : this.media.pause();
    };
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    MediaPlayer.prototype.silencio = function () {
        this.media.muted ? this.media.muted = false : this.media.muted = true;
    };
    return MediaPlayer;
}());
// exports["default"] = MediaPlayer;
export default MediaPlayer;