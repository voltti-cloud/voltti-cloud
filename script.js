const filmes = [
    { 
        titulo: "A Culpa é das Estrelas", 
        capa: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", 
        url: "https://motor.voltti.cloud/stream/7?hash=52d003" 
    }
];

function render() {
    const container = document.getElementById('lista-filmes');
    if(container) {
        container.innerHTML = filmes.map(f => `
            <div class="movie-card" style="background-image: url('${f.capa}')" onclick="openPlayer('${f.titulo}', '${f.url}')"></div>
        `).join('');
    }
}

function openPlayer(title, url) {
    document.getElementById('video-title').innerText = title;
    
    // Adicionamos 'crossorigin' e removemos o autoplay agressivo
    // Isso ajuda o navegador a carregar todos os 'tracks' de áudio
    document.getElementById('player-container').innerHTML = `
        <video id="main-video" controls crossorigin="anonymous" style="width:100%; border-radius:10px; background: #000;">
            <source src="${url}" type="video/mp4">
            Seu navegador não suporta este formato de áudio/vídeo.
        </video>`;
    
    document.getElementById('video-overlay').classList.add('active');
    
    const v = document.getElementById('main-video');
    v.volume = 1.0;
    
    // Tenta carregar explicitamente
    v.load();
}

function closePlayer() {
    const v = document.getElementById('main-video');
    if(v) v.pause();
    document.getElementById('player-container').innerHTML = '';
    document.getElementById('video-overlay').classList.remove('active');
}

window.onload = render;
