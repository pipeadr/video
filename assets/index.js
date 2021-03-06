import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const go = document.getElementById("playButton");
const pause = document.getElementById("muteButton");
const volume = document.getElementById("volume");

const player = new MediaPlayer({ rp: video, vl: volume, plugins: [new AutoPlay(), new AutoPause() ]});

go.onclick = () => player.play();
pause.onclick = () => player.silencio();
volume.onclick = () => player.volume();
// volume.mousemove = () => player.volume();