import MediaPlayer from './MediaPlayer';

const video: HTMLElement = document.querySelector("video");
const go: HTMLElement = document.getElementById("playButton");
const pause: HTMLElement = document.getElementById("muteButton");

const player = new MediaPlayer({rp: video});

go.onclick = () => player.play();
