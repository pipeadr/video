"use strict";
// exports.__esModule = true;
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.rp;
        this.vol = config.vl;
        this.plugins = config.plugins || [];
        this.initplugins();
    }
    MediaPlayer.prototype.initplugins = function () {
        var _this = this;
        this.plugins.forEach(function (plugin) {
            plugin.run(_this);
        });
    };
    MediaPlayer.prototype.play = function () {
        this.media.paused ? this.media.play() : this.media.pause();
        console.log(this.media.muted);
    };
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    MediaPlayer.prototype.silencio = function () {
        this.media.muted ? this.media.muted = false : this.media.muted = true;
        console.log(this.media.muted);
    };
    MediaPlayer.prototype.volume = function () {
        var volumen = this.vol.value;
        var v = Number(volumen);
        this.media.volume = v;
    };
    return MediaPlayer;
}());
// exports["default"] = MediaPlayer;
export default MediaPlayer;