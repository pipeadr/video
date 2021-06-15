"use strict";
// exports.__esModule = true;
// https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API Documentacion del tema
var AutoPause = /** @class */ (function () {
    class AutoPause {
        constructor() {
            this.threshold = 0.25;
            this.handlerIntersection = this.handlerIntersection.bind(this);
        }
        run(player) {
            this.player = player;
            var obser = new IntersectionObserver(this.handlerIntersection, {
                threshold: this.threshold
            });
            obser.observe(this.player.media);
        }
    }
    AutoPause.prototype.handlerIntersection = function (entries) {
        var entry = entries[0];
        // console.log(entry);
        var isVisible = entry.intersectionRatio >= this.threshold;
        console.log(isVisible);
        isVisible ? this.player.play() : this.player.pause();
    };
    return AutoPause;
}());
// exports["default"] = AutoPause;
export default AutoPause;
