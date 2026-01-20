const plyrPlayer = new Plyr('#player', {
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
    settings: ['quality', 'speed']
});

const DB = {
    filmes: [{ t: "A Culpa é das Estrelas", c: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", u: "http://motor.voltti.cloud/stream/6?hash=9555df" }]
};

function render() {
    const list = document.getElementById('list-movies');
    if(list) list.innerHTML = DB.filmes.map(i => `
        <div class="movie-card" style="background-image: url('${i.c}')" onclick="openPlayer('${i.t}', '${i.u}')"></div>
    `).join('');
}

function openPlayer(title, url) {
    document.getElementById('v-title').innerText = title;
    document.getElementById('player-overlay').style.display = 'flex';
    
    plyrPlayer.source = {
        type: 'video',
        sources: [{ src: url, type: 'video/mp4' }]
    };
    
    plyrPlayer.play();
}

function closePlayer() {
    plyrPlayer.stop();
    document.getElementById('player-overlay').style.display = 'none';
}
window.onload = render;
