const DB = [
    { t: "Crepusculo 1", i: "crepusculo1.webp", u: "https://motor.voltti.cloud/stream/18?hash=c08e43", g: "romance", type: "filme" },
    { t: "Lua Nova", i: "luanova.webp", u: "https://motor.voltti.cloud/stream/19?hash=32c817", g: "romance", type: "filme" },
    { t: "Homem Aranha 1", i: "homemaranha1.webp", u: "https://motor.voltti.cloud/stream/14?hash=b15349", g: "acao", type: "filme" },
    { t: "The Batman", i: "the_batman.webp", u: "https://motor.voltti.cloud/stream/44?hash=24a8f1", g: "acao", type: "filme" },
    { t: "As Branquelas", i: "as_branquelas.webp", u: "https://motor.voltti.cloud/stream/53?hash=13403f", g: "comedia", type: "filme" }
    // Adicione os outros aqui mantendo o padrão...
];

let currentView = [...DB];

function render(data = currentView) {
    const grid = document.getElementById('movie-grid');
    grid.innerHTML = data.map(f => `
        <div class="card" style="background-image: url('${f.i}');" onclick="play('${f.t}', '${f.u}')">
            <div class="card-title">${f.t}</div>
        </div>`).join('');
}

function filterType(type) {
    currentView = DB.filter(f => f.type === type);
    document.getElementById('cat-title').innerText = type.toUpperCase() + "S";
    render();
    toggleMenu();
}

function renderByGenre(genre) {
    currentView = genre === 'todos' ? [...DB] : DB.filter(f => f.g === genre);
    document.getElementById('cat-title').innerText = genre.toUpperCase();
    render();
}

function search() {
    const term = document.getElementById('search-input').value.toLowerCase();
    const results = currentView.filter(f => f.t.toLowerCase().includes(term));
    render(results);
}

function toggleSearch() {
    const input = document.getElementById('search-input');
    input.style.display = input.style.display === 'none' ? 'block' : 'none';
}

function userStatus() { alert("💎 Status: Usuário Premium \nBem-vindo, Mateus Santos!"); }
function toggleMenu() { document.getElementById('side-menu').classList.toggle('active'); }
function play(t, u) {
    if(!u) return alert("Link off");
    document.getElementById('playing-title').innerText = t;
    document.getElementById('player-wrap').innerHTML = `<video controls autoplay style="width:100%"><source src="${u}" type="video/mp4"></video>`;
    document.getElementById('video-overlay').style.display = 'flex';
}
function closeVid() { document.getElementById('video-overlay').style.display = 'none'; }
window.onload = () => render();
