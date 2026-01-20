// Banco de dados organizado (Eu vou gerenciar isso para você)
const VOLTTI_DATABASE = {
    filmes: [
        { 
            titulo: "A Culpa é das Estrelas", 
            capa: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", 
            url: "http://motor.voltti.cloud/stream/6?hash=9555df" 
        }
    ],
    series: [],
    doramas: []
};

function renderCatalogo() {
    // Renderiza Filmes
    const listaFilmes = document.getElementById('lista-filmes');
    if(listaFilmes) {
        listaFilmes.innerHTML = VOLTTI_DATABASE.filmes.map(item => `
            <div class="movie-card" style="background-image: url('${item.capa}')" onclick="openPlayer('${item.titulo}', '${item.url}')"></div>
        `).join('');
    }

    // Renderiza Séries
    const listaSeries = document.getElementById('lista-series');
    if(listaSeries) {
        listaSeries.innerHTML = VOLTTI_DATABASE.series.map(item => `
            <div class="movie-card" style="background-image: url('${item.capa}')" onclick="openPlayer('${item.titulo}', '${item.url}')"></div>
        `).join('');
    }
}

function openPlayer(title, url) {
    const overlay = document.getElementById('video-overlay');
    const container = document.getElementById('player-container');
    document.getElementById('video-title').innerText = title;
    
    container.innerHTML = `
        <video id="vlt-video" controls autoplay style="width:100%; border-radius:12px; border: 2px solid var(--accent); box-shadow: 0 0 20px var(--accent);">
            <source src="${url}" type="video/mp4">
            Seu navegador não suporta o player da VOLTTI.
        </video>`;
    
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePlayer() {
    document.getElementById('player-container').innerHTML = '';
    document.getElementById('video-overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

window.onload = renderCatalogo;
