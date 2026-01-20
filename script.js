const DB = {
    filmes: [
        { t: "A Culpa é das Estrelas", i: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", u: "https://motor.voltti.cloud/stream/7?hash=52d003" },
        { t: "Uma Noite no Museu", i: "https://image.tmdb.org/t/p/w500/v9Qp8A058R5R0oP0vLpA6IunY2R.jpg", u: "https://motor.voltti.cloud/stream/8?hash=b328e3" }
    ],
    series: [], doramas: []
};

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

function render(cat = 'filmes') {
    const grid = document.getElementById('movie-grid');
    const data = DB[cat] || [];
    document.getElementById('cat-title').innerText = cat.charAt(0).toUpperCase() + cat.slice(1);
    
    grid.innerHTML = data.length ? data.map(f => `
        <div class="card" style="background-image: url('${f.i}')" onclick="play('${f.t}', '${f.u}')"></div>
    `).join('') : '<p style="color:#444; grid-column: 1/4; text-align:center;">Nenhum conteúdo disponível.</p>';
}

function play(title, url) {
    document.getElementById('playing-title').innerText = title;
    document.getElementById('player-wrap').innerHTML = `
        <video controls autoplay playsinline><source src="${url}" type="video/mp4"></video>`;
    document.getElementById('video-overlay').style.display = 'flex';
}

function closeVid() {
    document.getElementById('player-wrap').innerHTML = '';
    document.getElementById('video-overlay').style.display = 'none';
}

function filter(cat) {
    toggleMenu();
    render(cat);
}

window.onload = () => render();
