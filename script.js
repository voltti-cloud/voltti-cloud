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
        el.innerHTML = data.length ? data.map(i => `
            <div class="movie-card" style="background-image: url('${i.capa}')" onclick="abrirFilme('${i.titulo}', '${i.url}')"></div>
        `).join('') : '<p style="color:#444; padding-left:20px;">Em breve...</p>';
    };
    renderRow('lista-filmes', VOLTTI_DATA.filmes);
    renderRow('lista-series', VOLTTI_DATA.series);
}

function abrirFilme(titulo, url) {
    const playerBox = document.getElementById('vlt-player-box');
    const anchor = document.getElementById('vlt-anchor');
    const header = document.getElementById('vlt-header');
    
    document.getElementById('vlt-title').innerText = titulo;
    
    // Injeta o vídeo na tora
    anchor.innerHTML = `
        <video id="vlt-main-video" controls autoplay playsinline>
            <source src="${url}" type="video/mp4">
        </video>`;
    
    playerBox.style.display = 'block';
    header.style.display = 'none';
    
    window.scrollTo({top: 0, behavior: 'smooth'});
    
    // Força o volume
    const v = document.getElementById('vlt-main-video');
    v.volume = 1.0;
}

function closePlayer() {
    document.getElementById('vlt-player-box').style.display = 'none';
    document.getElementById('vlt-header').style.display = 'flex';
    document.getElementById('vlt-anchor').innerHTML = '';
}

window.onload = render;
