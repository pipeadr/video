import MediaPlayer from '../MediaPlayer';
// https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API Documentacion del tema
class AutoPause {
    private threshold: number;
    player: MediaPlayer;
  constructor() {
   this.threshold = 0.25
   this.handlerIntersection = this.handlerIntersection.bind(this);
  }
  run(player) {
    this.player = player;
    const obser = new IntersectionObserver(this.handlerIntersection, {
        threshold: this.threshold
    })
      obser.observe(this.player.media)
  }
  private handlerIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    // console.log(entry);
    const isVisible = entry.intersectionRatio >= this.threshold;
    console.log(isVisible);
    isVisible ? this.player.play() : this.player.pause();
  }
}
export default AutoPause;