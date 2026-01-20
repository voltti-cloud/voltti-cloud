const filmes = [
    { 
        titulo: "A Culpa é das Estrelas", 
        capa: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", 
        url: "https://motor.voltti.cloud/stream/7?hash=52d003" 
    }
];

function render() {
    const container = document.getElementById('lista-filmes');
    container.innerHTML = filmes.map(f => `
        <div class="movie-card" style="background-image: url('${f.capa}')" onclick="openPlayer('${f.titulo}', '${f.url}')"></div>
    `).join('');
}

function openPlayer(title, url) {
    document.getElementById('video-title').innerText = title;
    // Removi o 'autoplay' para o navegador não bloquear o áudio
    document.getElementById('player-container').innerHTML = `
        <video id="main-video" controls style="width:100%; border-radius:10px;">
            <source src="${url}" type="video/mp4">
            Seu navegador não suporta o player.
        </video>`;
    document.getElementById('video-overlay').classList.add('active');
    
    // Tenta dar play com som após interação
    const v = document.getElementById('main-video');
    v.volume = 1.0; 
}

function closePlayer() {
    document.getElementById('player-container').innerHTML = '';
    document.getElementById('video-overlay').classList.remove('active');
}

window.onload = render;
