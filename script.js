let vltPlayer;

function initPlayer() {
    vltPlayer = new Plyr('#player', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
    });
}

const DB = {
    filmes: [{ 
        t: "Teste de Sinal (Vídeo Seguro)", 
        c: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", 
        // VÍDEO DE TESTE EM HTTPS (PARA VER SE O PLAYER RODA)
        u: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
    }]
};

function render() {
    const list = document.getElementById('list-movies');
    if(list) {
        list.innerHTML = DB.filmes.map(i => `
            <div class="movie-card" style="background-image: url('${i.c}')" onclick="openPlayer('${i.t}', '${i.u}')"></div>
        `).join('');
    }
    initPlayer();
}

function openPlayer(title, url) {
    document.getElementById('v-title').innerText = title;
    document.getElementById('player-overlay').style.display = 'flex';
    vltPlayer.source = { type: 'video', sources: [{ src: url, type: 'video/mp4' }] };
    vltPlayer.play();
}

function closePlayer() {
    vltPlayer.stop();
    document.getElementById('player-overlay').style.display = 'none';
}
window.onload = render;
