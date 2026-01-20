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
            <div class="movie-card" style="background-image: url('${i.capa}')" onclick="openPlayer('${i.titulo}', '${i.url}')"></div>
        `).join('') : '<p style="color:#555; font-size:0.8rem; padding-left:15px;">Em breve...</p>';
    };
    renderRow('lista-filmes', VOLTTI_DATA.filmes);
    renderRow('lista-series', VOLTTI_DATA.series);
    renderRow('lista-doramas', VOLTTI_DATA.doramas);
}

function openPlayer(title, url) {
    document.getElementById('video-title').innerText = title;
    // Adicionei playsinline e mudei a forma de carregar para garantir o áudio no mobile
    const container = document.getElementById('player-container');
    container.innerHTML = `
        <video id="main-video" controls autoplay playsinline style="width:100%; border-radius:8px; background:#000;">
            <source src="${url}" type="video/mp4">
            Seu navegador não suporta o áudio/vídeo da VOLTTI.
        </video>`;
    
    const video = document.getElementById('main-video');
    video.volume = 1.0; // Força o volume no máximo ao iniciar
    
    document.getElementById('video-overlay').classList.add('active');
}

function closePlayer() {
    const container = document.getElementById('player-container');
    container.innerHTML = ''; 
    document.getElementById('video-overlay').classList.remove('active');
}

window.onload = render;
