const filmes = [
    { 
        titulo: "A Culpa é das Estrelas", 
        capa: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", 
        url: "https://motor.voltti.cloud/stream/7?hash=52d003" 
    },
    { 
        titulo: "Uma Noite no Museu", 
        capa: "https://image.tmdb.org/t/p/w500/v9Qp8A058R5R0oP0vLpA6IunY2R.jpg", 
        url: "https://motor.voltti.cloud/stream/8?hash=b328e3" 
    }
];

function render() {
    const container = document.getElementById('lista-filmes');
    if (!container) return;
    
    container.innerHTML = filmes.map(f => `
        <div class="movie-card" 
             style="background-image: url('${f.capa}'); width: 160px; height: 240px; background-size: cover; border-radius: 10px; flex-shrink: 0; cursor: pointer; border: 2px solid #333;" 
             onclick="openPlayer('${f.titulo}', '${f.url}')">
        </div>
    `).join('');
}

function openPlayer(title, url) {
    document.getElementById('video-title').innerText = title;
    document.getElementById('player-container').innerHTML = `
        <video id="main-video" controls autoplay style="width:100%; border-radius:10px;">
            <source src="${url}" type="video/mp4">
        </video>`;
    document.getElementById('video-overlay').classList.add('active');
}

function closePlayer() {
    document.getElementById('player-container').innerHTML = '';
    document.getElementById('video-overlay').classList.remove('active');
}

window.onload = render;
