const filmes = [
    { n: "A Culpa é das Estrelas", i: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", u: "https://motor.voltti.cloud/stream/7?hash=52d003" },
    { n: "Uma Noite no Museu", i: "https://image.tmdb.org/t/p/w500/v9Qp8A058R5R0oP0vLpA6IunY2R.jpg", u: "https://motor.voltti.cloud/stream/8?hash=b328e3" }
];

function init() {
    const list = document.getElementById('movie-list');
    list.innerHTML = filmes.map(f => `
        <div class="card" style="background-image: url('${f.i}')" onclick="play('${f.u}')"></div>
    `).join('');
}

function play(url) {
    document.getElementById('player-wrap').innerHTML = `
        <video controls autoplay playsinline><source src="${url}" type="video/mp4"></video>`;
    document.getElementById('video-overlay').style.display = 'flex';
}

function closeVid() {
    document.getElementById('player-wrap').innerHTML = '';
    document.getElementById('video-overlay').style.display = 'none';
}

window.onload = init;
