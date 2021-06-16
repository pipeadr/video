"use strict";
// exports.__esModule = true;
// https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API Documentacion del tema
var AutoPause = /** @class */ (function () {
    function AutoPause() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this); //con call da error
    }
    AutoPause.prototype.run = function (player) {
        this.player = player;
        var obser = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        });
        obser.observe(this.player.media);
        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    };
    AutoPause.prototype.handlerIntersection = function (entries) {
        var entry = entries[0];
        // console.log(entry);
        var isVisible = entry.intersectionRatio >= this.threshold;
        console.log(isVisible);
        isVisible ? this.player.play() : this.player.pause();
    };
    AutoPause.prototype.handleVisibilityChange = function () {
        var isVisible = document.visibilityState === "visible";
        isVisible ? this.player.play() : this.player.pause();
    };
    return AutoPause;
}());
// exports["default"] = AutoPause;
export default AutoPause;