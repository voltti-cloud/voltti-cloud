// Inicializa o Player Premium
const player = new Plyr('#player', {
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    tooltips: { controls: true, seek: true }
});

const VOLTTI_DATA = {
    filmes: [
        { titulo: "A Culpa é das Estrelas", capa: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", url: "http://motor.voltti.cloud/stream/6?hash=9555df" }
    ],
    series: []
};

function render() {
    const renderRow = (id, data) => {
        const el = document.getElementById(id);
        if(!el) return;
        el.innerHTML = data.map(i => `
            <div class="movie-card" style="background-image: url('${i.capa}')" onclick="startMovie('${i.titulo}', '${i.url}')"></div>
        `).join('');
    };
    renderRow('lista-filmes', VOLTTI_DATA.filmes);
    renderRow('lista-series', VOLTTI_DATA.series);
}

function startMovie(title, url) {
    const wrapper = document.getElementById('player-wrapper');
    document.getElementById('current-title').innerText = title;
    
    // Troca a fonte do vídeo e dá play
    player.source = {
        type: 'video',
        title: title,
        sources: [{ src: url, type: 'video/mp4' }]
    };
    
    wrapper.style.display = 'block';
    document.getElementById('main-header').style.display = 'none';
    player.play();
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function closePlayer() {
    player.pause();
    document.getElementById('player-wrapper').style.display = 'none';
    document.getElementById('main-header').style.display = 'flex';
}

window.onload = render;
