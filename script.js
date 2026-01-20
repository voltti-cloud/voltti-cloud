const VOLTTI_DATA = {
    filmes: [
        { 
            titulo: "A Culpa é das Estrelas", 
            capa: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", 
            url: "https://motor.voltti.cloud/stream/7?hash=52d003" 
        }
    ],
    series: [],
    doramas: []
};

function render() {
    const list = document.getElementById('lista-filmes');
    if (list) {
        list.innerHTML = VOLTTI_DATA.filmes.map(f => `
            <div class="movie-card" style="background-image: url('${f.capa}')" onclick="openPlayer('${f.titulo}', '${f.url}')"></div>
        `).join('');
    }
}

function openPlayer(title, url) {
    document.getElementById('video-title').innerText = title;
    document.getElementById('player-container').innerHTML = `
        <video id="v-player" controls autoplay>
            <source src="${url}" type="video/mp4">
        </video>`;
    document.getElementById('video-overlay').classList.add('active');
}

function closePlayer() {
    const vp = document.getElementById('v-player');
    if(vp) vp.pause();
    document.getElementById('video-overlay').classList.remove('active');
}

window.onload = render;
