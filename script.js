const DB = [
    { t: "The Batman", i: "the_batman.webp", u: "https://motor.voltti.cloud/stream/44?hash=24a8f1", g: "acao", type: "filme" },
    { t: "Crepusculo 1", i: "crepusculo1.webp", u: "https://motor.voltti.cloud/stream/18?hash=c08e43", g: "romance", type: "filme" },
    { t: "Lua Nova", i: "luanova.webp", u: "https://motor.voltti.cloud/stream/19?hash=32c817", g: "romance", type: "filme" },
    { t: "Eclipse", i: "eclipse.webp", u: "https://motor.voltti.cloud/stream/20?hash=4d8896", g: "romance", type: "filme" },
    { t: "Amanhecer Parte 1", i: "amanhecer1.webp", u: "https://motor.voltti.cloud/stream/22?hash=d297e2", g: "romance", type: "filme" },
    { t: "Amanhecer Parte 2", i: "amanhecer2.webp", u: "https://motor.voltti.cloud/stream/21?hash=a7a7fc", g: "romance", type: "filme" },
    { t: "Homem Aranha 1", i: "homemaranha1.webp", u: "https://motor.voltti.cloud/stream/14?hash=b15349", g: "acao", type: "filme" },
    { t: "Homem Aranha 2", i: "homemaranha2.webp", u: "https://motor.voltti.cloud/stream/15?hash=43e939", g: "acao", type: "filme" },
    { t: "Homem Aranha 3", i: "homemaranha3.webp", u: "https://motor.voltti.cloud/stream/16?hash=0a10b3", g: "acao", type: "filme" },
    { t: "As Branquelas", i: "as_branquelas.webp", u: "https://motor.voltti.cloud/stream/53?hash=13403f", g: "comedia", type: "filme" },
    { t: "Avatar 1", i: "avatar1.webp", u: "https://motor.voltti.cloud/stream/46?hash=dc96d7", g: "ficcao", type: "filme" },
    { t: "Avatar 2", i: "avatar2.webp", u: "https://motor.voltti.cloud/stream/34?hash=19f4de", g: "ficcao", type: "filme" }
];

function render(data = DB) {
    const grid = document.getElementById('movie-grid');
    grid.innerHTML = data.map(f => `
        <div class="card" onclick="play('${f.t}', '${f.u}')">
            <img src="${f.i}" alt="${f.t}">
            <div class="card-title">${f.t}</div>
        </div>`).join('');
}

function renderByGenre(genre) {
    const filtered = genre === 'todos' ? DB : DB.filter(f => f.g === genre);
    document.getElementById('cat-title').innerText = genre === 'todos' ? "Mais Populares" : genre;
    render(filtered);
}

function filterType(type) {
    const filtered = DB.filter(f => f.type === type);
    document.getElementById('cat-title').innerText = type + "s";
    render(filtered);
    toggleMenu();
}

function toggleMenu() { document.getElementById('side-menu').classList.toggle('active'); }
function userStatus() { alert("💎 Usuário Premium: Mateus Santos"); }

function play(t, u) {
    if(!u) return alert("Vídeo indisponível");
    document.getElementById('playing-title').innerText = t;
    document.getElementById('player-wrap').innerHTML = `<video controls autoplay style="width:100%"><source src="${u}" type="video/mp4"></video>`;
    document.getElementById('video-overlay').style.display = 'flex';
}

function closeVid() {
    document.getElementById('player-wrap').innerHTML = '';
    document.getElementById('video-overlay').style.display = 'none';
}

window.onload = () => render();
