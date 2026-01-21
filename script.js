const DB = {
    filmes: [
        { t: "Crepusculo 1", i: "crepusculo1.webp", u: "https://motor.voltti.cloud/stream/18?hash=c08e43" },
        { t: "Lua Nova", i: "luanova.webp", u: "https://motor.voltti.cloud/stream/19?hash=32c817" },
        { t: "Homem Aranha 1", i: "homemaranha1.webp", u: "https://motor.voltti.cloud/stream/14?hash=b15349" },
        { t: "Homem Aranha 2", i: "homemaranha2.webp", u: "https://motor.voltti.cloud/stream/15?hash=43e939" },
        { t: "Homem Aranha 3", i: "homemaranha3.webp", u: "https://motor.voltti.cloud/stream/16?hash=0a10b3" },
        { t: "Círculo de Fogo", i: "circulodefogo1.webp", u: "https://motor.voltti.cloud/stream/9?hash=a51334" },
        { t: "Círculo de Fogo 2", i: "circulodefogo2.webp", u: "https://motor.voltti.cloud/stream/10?hash=3ca7e5" },
        { t: "5 Passos de Você", i: "5passos.webp", u: "https://motor.voltti.cloud/stream/12?hash=1e921d" },
        { t: "Eclipse", i: "eclipse.webp", u: "https://motor.voltti.cloud/stream/20?hash=4d8896" },
        { t: "Amanhecer Parte 1", i: "amanhecer1.webp", u: "" },
        { t: "Amanhecer Parte 2", i: "amanhecer2.webp", u: "https://motor.voltti.cloud/stream/21?hash=a7a7fc" }
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
    if(!url) { alert('Link de streaming não encontrado para este filme!'); return; }
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
