const video = document.getElementById('mainVideo');
const videoContainer = document.getElementById('videoContainer');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const timeDisplay = document.getElementById('timeDisplay');

// Carregar vídeo via URL ?v=
const urlParams = new URLSearchParams(window.location.search);
const videoUrl = urlParams.get('v');
if (videoUrl) {
    video.src = videoUrl;
    video.load();
}

function formatTime(time) {
    let m = Math.floor(time / 60);
    let s = Math.floor(time % 60);
    return `${m}:${s < 10 ? '0'+s : s}`;
}

video.addEventListener('timeupdate', () => {
    if (!isNaN(video.duration)) {
        const p = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${p}%`;
        timeDisplay.innerText = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
    }
});

function togglePlay() {
    if (video.paused) { video.play(); playPauseBtn.classList.add('paused'); }
    else { video.pause(); playPauseBtn.classList.remove('paused'); }
}

playPauseBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

// Auto-hide controles
let timer;
function showControls() {
    videoContainer.classList.remove('hide-controls');
    clearTimeout(timer);
    if (!video.paused) timer = setTimeout(() => videoContainer.classList.add('hide-controls'), 3000);
}
videoContainer.addEventListener('mousemove', showControls);
videoContainer.addEventListener('touchstart', showControls);

document.getElementById('fullScreenBtn').addEventListener('click', () => {
    if (!document.fullscreenElement) videoContainer.requestFullscreen();
    else document.exitFullscreen();
});

document.getElementById('volumeSlider').addEventListener('input', (e) => {
    video.volume = e.target.value;
});
