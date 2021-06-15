class MediaPlayer {
    media: HTMLMediaElement;
    constructor(config) {
       this.media = config.rp;
    }
  play() {
   this.media.paused ? this.media.play() : this.media.pause();
  }
  pause() {
      this.media.pause();
  }
  silencio() {
    this.media.muted ? this.media.muted = false : this.media.muted = true;
  }
  
} 

export default MediaPlayer;