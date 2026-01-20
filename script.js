let vltPlayer;

const DB = {
    filmes: [{ t: "A Culpa é das Estrelas", c: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", u: "http://motor.voltti.cloud/stream/6?hash=9555df" }],
    series: []
};

function initApp() {
    const list = document.getElementById('list-movies');
    if(list) list.innerHTML = DB.filmes.map(i => `
        <div class="movie-card" style="background-image: url('${i.c}')" onclick="openPlayer('${i.t}', '${i.u}')"></div>
    `).join('');

    vltPlayer = new Plyr('#player', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen']
    });
}

function openPlayer(title, url) {
    const overlay = document.getElementById('player-overlay');
    document.getElementById('v-title').innerText = title;
    overlay.style.display = 'flex';
    vltPlayer.source = { type: 'video', sources: [{ src: url, type: 'video/mp4' }] };
    vltPlayer.play();
}

function closePlayer() {
    vltPlayer.stop();
    document.getElementById('player-overlay').style.display = 'none';
}

window.onload = initApp;
