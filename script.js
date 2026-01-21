const DB = {
    filmes: [
        { t: "A Culpa é das Estrelas", i: "capa1.webp", u: "https://motor.voltti.cloud/stream/7?hash=52d003" },
        { t: "Uma Noite no Museu 1", i: "capa2.webp", u: "https://motor.voltti.cloud/stream/8?hash=b328e3" }
    ],
    series: [], doramas: []
};

function render(cat = 'filmes') {
    const grid = document.getElementById('movie-grid');
    const data = DB[cat] || [];
    
    grid.innerHTML = data.map(f => `
        <div class="card" style="background-image: url('${f.i}');" onclick="play('${f.t}', '${f.u}')">
            <div class="card-title">${f.t}</div>
        </div>
    `).join('');
}

function play(title, url) {
    document.getElementById('playing-title').innerText = title;
    document.getElementById('player-wrap').innerHTML = `
        <video controls autoplay style="width:100%; border-radius:8px;">
            <source src="${url}" type="video/mp4">
        </video>`;
    document.getElementById('video-overlay').style.display = 'flex';
}

function playDefault() {
    play(DB.filmes[0].t, DB.filmes[0].u);
}

function closeVid() {
    document.getElementById('player-wrap').innerHTML = '';
    document.getElementById('video-overlay').style.display = 'none';
}

window.onload = () => render();
