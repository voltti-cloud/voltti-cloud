let vltPlayer;

function initPlayer() {
    vltPlayer = new Plyr('#player', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
        autoplay: false
    });
}

const DB = {
    filmes: [{ 
        t: "A Culpa é das Estrelas", 
        c: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", 
        u: "http://motor.voltti.cloud/stream/6?hash=9555df" 
    }],
    series: []
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
    const overlay = document.getElementById('player-overlay');
    document.getElementById('v-title').innerText = title;
    overlay.style.display = 'flex';

    vltPlayer.source = {
        type: 'video',
        title: title,
        sources: [{ src: url, type: 'video/mp4' }]
    };

    setTimeout(() => {
        vltPlayer.play().catch(e => console.log("Play bloqueado:", e));
    }, 500);
}

function closePlayer() {
    vltPlayer.stop();
    document.getElementById('player-overlay').style.display = 'none';
}

window.onload = render;
