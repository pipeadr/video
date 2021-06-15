import MediaPlayer from '../MediaPlayer';
class AutoPlay {
    player: MediaPlayer;
    constructor() {}
    run(player: MediaPlayer) {
        if(!player.media.muted) {
           player.media.muted = true;
           player.play();
        } else {
            player.play;
        }
    }
}
export default AutoPlay;