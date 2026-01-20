const VOLTTI_DATA = {
    filmes: [{ titulo: "A Culpa é das Estrelas", capa: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", url: "http://motor.voltti.cloud/stream/6?hash=9555df" }],
    series: []
};

let vjsPlayer = null;

function render() {
    const renderRow = (id, data) => {
        const el = document.getElementById(id);
        if(!el) return;
        el.innerHTML = data.map(i => `<div class="movie-card" style="background-image: url('${i.capa}')" onclick="playPremium('${i.titulo}', '${i.url}')"></div>`).join('');
    };
    renderRow('lista-filmes', VOLTTI_DATA.filmes);
    renderRow('lista-series', VOLTTI_DATA.series);
}

function playPremium(titulo, url) {
    document.getElementById('player-container').style.display = 'block';
    document.getElementById('vlt-header').style.display = 'none';
    document.getElementById('video-title').innerText = titulo;
    const placeholder = document.getElementById('video-placeholder');
    placeholder.innerHTML = '<video id="my-video" class="video-js vjs-big-play-centered" controls preload="auto" playsinline></video>';
    if (vjsPlayer) { vjsPlayer.dispose(); }
    vjsPlayer = videojs('my-video', { fluid: true, autoplay: true });
    vjsPlayer.src({ type: 'video/mp4', src: url });
    vjsPlayer.volume(1.0);
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function closePlayer() {
    if (vjsPlayer) { vjsPlayer.pause(); }
    document.getElementById('player-container').style.display = 'none';
    document.getElementById('vlt-header').style.display = 'flex';
}
window.onload = render;
