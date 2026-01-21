const DB = [
    { t: "Crepusculo 1", i: "crepusculo1.webp", u: "https://motor.voltti.cloud/stream/18?hash=c08e43", g: "romance" },
    { t: "Lua Nova", i: "luanova.webp", u: "https://motor.voltti.cloud/stream/19?hash=32c817", g: "romance" },
    { t: "Eclipse", i: "eclipse.webp", u: "https://motor.voltti.cloud/stream/20?hash=4d8896", g: "romance" },
    { t: "Amanhecer Parte 1", i: "amanhecer1.webp", u: "https://motor.voltti.cloud/stream/22?hash=d297e2", g: "romance" },
    { t: "Amanhecer Parte 2", i: "amanhecer2.webp", u: "https://motor.voltti.cloud/stream/21?hash=a7a7fc", g: "romance" },
    { t: "5 Passos de Você", i: "5passos.webp", u: "https://motor.voltti.cloud/stream/12?hash=1e921d", g: "romance" },
    { t: "10 Coisas que Eu Odeio em Você", i: "10coisas.webp", u: "https://motor.voltti.cloud/stream/40?hash=b10ea8", g: "romance" },
    { t: "The Batman", i: "the_batman.webp", u: "https://motor.voltti.cloud/stream/44?hash=24a8f1", g: "acao" },
    { t: "Homem Aranha 1", i: "homemaranha1.webp", u: "https://motor.voltti.cloud/stream/14?hash=b15349", g: "acao" },
    { t: "Homem Aranha 2", i: "homemaranha2.webp", u: "https://motor.voltti.cloud/stream/15?hash=43e939", g: "acao" },
    { t: "Homem Aranha 3", i: "homemaranha3.webp", u: "https://motor.voltti.cloud/stream/16?hash=0a10b3", g: "acao" },
    { t: "Vingadores 1", i: "vingadores1.webp", u: "https://motor.voltti.cloud/stream/55?hash=271e64", g: "acao" },
    { t: "Cão de Briga", i: "cao_briga.webp", u: "https://motor.voltti.cloud/stream/48?hash=177e49", g: "acao" },
    { t: "Missão Impossível", i: "missao_impossivel.webp", u: "https://motor.voltti.cloud/stream/54?hash=5d6fd9", g: "acao" },
    { t: "Avatar 1", i: "avatar1.webp", u: "https://motor.voltti.cloud/stream/46?hash=dc96d7", g: "ficcao" },
    { t: "Avatar 2", i: "avatar2.webp", u: "https://motor.voltti.cloud/stream/34?hash=19f4de", g: "ficcao" },
    { t: "Círculo de Fogo 1", i: "circulodefogo.webp", u: "https://motor.voltti.cloud/stream/9?hash=a51334", g: "ficcao" },
    { t: "Círculo de Fogo 2", i: "circulodefogo2.webp", u: "https://motor.voltti.cloud/stream/10?hash=3ca7e5", g: "ficcao" },
    { t: "Jogos Vorazes 1", i: "jogos_vorazes1.webp", u: "https://motor.voltti.cloud/stream/28?hash=837065", g: "ficcao" },
    { t: "Jogos Vorazes 2", i: "jogos_vorazes2.webp", u: "https://motor.voltti.cloud/stream/29?hash=84123f", g: "ficcao" },
    { t: "Esperança Parte 1", i: "esperanca1.webp", u: "https://motor.voltti.cloud/stream/31?hash=f268cb", g: "ficcao" },
    { t: "Esperança Parte 2", i: "esperanca2.webp", u: "https://motor.voltti.cloud/stream/32?hash=2450d5", g: "ficcao" },
    { t: "A Chegada", i: "a_chegada.webp", u: "https://motor.voltti.cloud/stream/37?hash=83485d", g: "ficcao" },
    { t: "Percy Jackson 1", i: "percy_jackson1.webp", u: "https://motor.voltti.cloud/stream/26?hash=962375", g: "ficcao" },
    { t: "Guardiões da Galáxia", i: "guardioes1.webp", u: "https://motor.voltti.cloud/stream/39?hash=1b295a", g: "ficcao" },
    { t: "Verdade ou Consequência", i: "verdade_consequencia.webp", u: "https://motor.voltti.cloud/stream/35?hash=b8b917", g: "terror" },
    { t: "Resident Evil 2", i: "resident_evil2.webp", u: "https://motor.voltti.cloud/stream/51?hash=2b0cd8", g: "terror" },
    { t: "A Morte Pede Carona", i: "morte_pedecarona.webp", u: "https://motor.voltti.cloud/stream/50?hash=a8c4d8", g: "terror" },
    { t: "Doce Vingança", i: "doce_vinganca.webp", u: "https://motor.voltti.cloud/stream/38?hash=0610c0", g: "terror" },
    { t: "As Branquelas", i: "as_branquelas.webp", u: "https://motor.voltti.cloud/stream/53?hash=13403f", g: "comedia" },
    { t: "Menino do Pijama", i: "menino_pijama.webp", u: "https://motor.voltti.cloud/stream/43?hash=ce7537", g: "ficcao" }
];

function render(data) {
    const grid = document.getElementById('movie-grid');
    grid.innerHTML = data.map(f => `
        <div class="card" onclick="play('${f.t}', '${f.u}')">
            <img src="${f.i}" onerror="this.src='capa_padrao.webp'">
            <div class="card-info">${f.t}</div>
        </div>`).join('');
}

function filter(genre, el) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    const filtered = genre === 'todos' ? DB : DB.filter(f => f.g === genre);
    render(filtered);
}

function search() {
    const q = document.getElementById('search-input').value.toLowerCase();
    render(DB.filter(f => f.t.toLowerCase().includes(q)));
}

function toggleSearch() {
    const bar = document.getElementById('search-bar');
    bar.style.display = bar.style.display === 'block' ? 'none' : 'block';
}

function play(t, u) {
    document.getElementById('playing-title').innerText = t;
    document.getElementById('video-content').innerHTML = `<video controls autoplay src="${u}" style="width:100%"></video>`;
    document.getElementById('player-overlay').style.display = 'flex';
}

function closeVid() {
    document.getElementById('video-content').innerHTML = '';
    document.getElementById('player-overlay').style.display = 'none';
}

function userStatus() { alert("💎 Premium: Mateus Santos"); }
window.onload = () => render(DB);
