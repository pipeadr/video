"use strict";
// exports.__esModule = true;
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.rp;
        this.vol = config.vl;
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
    MediaPlayer.prototype.volume = function () {
        //   this.media.volume = 0.5;
        // this.media.volume = value;
        // console.log(this.vol);
        // console.log(this.vol.value);
        // console.log(this.media.volume);
        this.media.volume = this.vol.value;

    };
    return MediaPlayer;
}());
export default MediaPlayer;
