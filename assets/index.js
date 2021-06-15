import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector("video");
const go = document.getElementById("playButton");
const pause = document.getElementById("muteButton");

const player = new MediaPlayer({rp: video});

go.onclick = () => player.play();
pause.onclick = () => player.silencio();