class MediaPlayer {
    media: HTMLMediaElement;
    vol: HTMLLabelElement;
    constructor(config) {
       this.media = config.rp;
       this.vol = config.vl;
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
  volume() {
    //   this.media.volume = 0.5;
    // this.media.volume = value;
    // console.log(this.vol);
    // console.log(this.vol.value);
    // console.log(this.media.volume);
    // this.media.volume = this.vol.value;
  }
} 

export default MediaPlayer;