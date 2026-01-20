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
        if(el) el.innerHTML = data.map(i => `
            <div class="movie-card" style="background-image: url('${i.capa}'); width:160px; height:240px; background-size:cover; border-radius:8px; flex-shrink:0; cursor:pointer;" onclick="openPlayer('${i.titulo}', '${i.url}')"></div>
        `).join('');
    };
    renderRow('lista-filmes', VOLTTI_DATA.filmes);
    renderRow('lista-series', VOLTTI_DATA.series);
    renderRow('lista-doramas', VOLTTI_DATA.doramas);
}

function openPlayer(title, url) {
    document.getElementById('video-title').innerText = title;
    document.getElementById('player-container').innerHTML = `
        <video controls autoplay style="width:100%; border-radius:12px; border:2px solid #00e5ff;">
            <source src="${url}" type="video/mp4">
        </video>`;
    document.getElementById('video-overlay').classList.add('active');
}

function closePlayer() {
    document.getElementById('player-container').innerHTML = '';
    document.getElementById('video-overlay').classList.remove('active');
}

window.onload = render;
