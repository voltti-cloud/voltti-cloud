let vltPlayer;

const DB = {
    filmes: [{ t: "A Culpa é das Estrelas", c: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", u: "http://motor.voltti.cloud/stream/6?hash=9555df" }]
};

function initApp() {
    // Renderiza as capas
    const list = document.getElementById('list-movies');
    if(list) list.innerHTML = DB.filmes.map(i => `
        <div class="movie-card" style="background-image: url('${i.c}')" onclick="openPlayer('${i.t}', '${i.u}')"></div>
    `).join('');

    // Inicializa o Player Premium
    vltPlayer = new Plyr('#player', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
        tooltips: { controls: true, seek: true }
    });
}

function openPlayer(title, url) {
    document.getElementById('v-title').innerText = title;
    document.getElementById('player-overlay').style.display = 'flex';
    
    vltPlayer.source = {
        type: 'video',
        sources: [{ src: url, type: 'video/mp4' }]
    };
    
    vltPlayer.play();
}

function closePlayer() {
    vltPlayer.stop();
    document.getElementById('player-overlay').style.display = 'none';
}

window.onload = initApp;
