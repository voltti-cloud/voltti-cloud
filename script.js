const VOLTTI_DATA = {
    filmes: [
        { titulo: "A Culpa é das Estrelas", capa: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", url: "http://motor.voltti.cloud/stream/6?hash=9555df" }
    ],
    series: [],
    doramas: []
};

function render() {
    const renderRow = (id, data) => {
        const el = document.getElementById(id);
        if(!el) return;
        el.innerHTML = data.length ? data.map(i => `
            <div class="movie-card" style="background-image: url('${i.capa}')" onclick="playEmbutido('${i.titulo}', '${i.url}')"></div>
        `).join('') : '<p style="color:#555; padding-left:15px;">Em breve...</p>';
    };
    renderRow('lista-filmes', VOLTTI_DATA.filmes);
    renderRow('lista-series', VOLTTI_DATA.series);
    renderRow('lista-doramas', VOLTTI_DATA.doramas);
}

function playEmbutido(title, url) {
    const videoSection = document.getElementById('video-section');
    const playerTarget = document.getElementById('player-target');
    
    document.getElementById('current-title').innerText = title;
    
    // Mostra a seção primeiro
    videoSection.style.display = 'block';
    
    // Injeta o player
    playerTarget.innerHTML = `
        <video controls autoplay playsinline>
            <source src="${url}" type="video/mp4">
        </video>`;
    
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function closePlayer() {
    document.getElementById('video-section').style.display = 'none';
    document.getElementById('player-target').innerHTML = '';
}

window.onload = render;
