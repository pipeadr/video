class MediaPlayer {
    media: HTMLMediaElement;
    vol: HTMLInputElement;
    plugins: Array<any>;
    
    constructor(config) {
       this.media = config.rp;
       this.vol = config.vl;
       this.plugins = config.plugins;
       this.initplugins();
    }
    private initplugins() {
      this.plugins.forEach(plugin => {
        plugin.run(this)
      });
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
    let volumen = this.vol.value;
    let v = Number(volumen);
    this.media.volume = v;
  }
} 

export default MediaPlayer;