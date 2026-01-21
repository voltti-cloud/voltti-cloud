const DB = [
    // --- ROMANCE ---
    { t: "Crepusculo 1", i: "crepusculo1.webp", u: "https://motor.voltti.cloud/stream/18?hash=c08e43", g: "romance", type: "filme" },
    { t: "Lua Nova", i: "luanova.webp", u: "https://motor.voltti.cloud/stream/19?hash=32c817", g: "romance", type: "filme" },
    { t: "Eclipse", i: "eclipse.webp", u: "https://motor.voltti.cloud/stream/20?hash=4d8896", g: "romance", type: "filme" },
    { t: "Amanhecer Parte 1", i: "amanhecer1.webp", u: "https://motor.voltti.cloud/stream/22?hash=d297e2", g: "romance", type: "filme" },
    { t: "Amanhecer Parte 2", i: "amanhecer2.webp", u: "https://motor.voltti.cloud/stream/21?hash=a7a7fc", g: "romance", type: "filme" },
    { t: "5 Passos de Você", i: "5passos.webp", u: "https://motor.voltti.cloud/stream/12?hash=1e921d", g: "romance", type: "filme" },
    { t: "10 Coisas que Eu Odeio em Você", i: "10coisas.webp", u: "https://motor.voltti.cloud/stream/40?hash=b10ea8", g: "romance", type: "filme" },

    // --- AÇÃO ---
    { t: "The Batman", i: "the_batman.webp", u: "https://motor.voltti.cloud/stream/44?hash=24a8f1", g: "acao", type: "filme" },
    { t: "Homem Aranha 1", i: "homemaranha1.webp", u: "https://motor.voltti.cloud/stream/14?hash=b15349", g: "acao", type: "filme" },
    { t: "Homem Aranha 2", i: "homemaranha2.webp", u: "https://motor.voltti.cloud/stream/15?hash=43e939", g: "acao", type: "filme" },
    { t: "Homem Aranha 3", i: "homemaranha3.webp", u: "https://motor.voltti.cloud/stream/16?hash=0a10b3", g: "acao", type: "filme" },
    { t: "Vingadores 1", i: "vingadores1.webp", u: "https://motor.voltti.cloud/stream/55?hash=271e64", g: "acao", type: "filme" },
    { t: "Cão de Briga", i: "cao_briga.webp", u: "https://motor.voltti.cloud/stream/48?hash=177e49", g: "acao", type: "filme" },
    { t: "Missão Impossível Acerto Final", i: "missao_impossivel.webp", u: "https://motor.voltti.cloud/stream/54?hash=5d6fd9", g: "acao", type: "filme" },

    // --- FICÇÃO CIENTÍFICA ---
    { t: "Avatar 1", i: "avatar1.webp", u: "https://motor.voltti.cloud/stream/46?hash=dc96d7", g: "ficcao", type: "filme" },
    { t: "Avatar 2", i: "avatar2.webp", u: "https://motor.voltti.cloud/stream/34?hash=19f4de", g: "ficcao", type: "filme" },
    { t: "Círculo de Fogo", i: "circulodefogo.webp", u: "https://motor.voltti.cloud/stream/9?hash=a51334", g: "ficcao", type: "filme" },
    { t: "Círculo de Fogo 2", i: "circulodefogo2.webp", u: "https://motor.voltti.cloud/stream/10?hash=3ca7e5", g: "ficcao", type: "filme" },
    { t: "Jogos Vorazes", i: "jogos_vorazes1.webp", u: "https://motor.voltti.cloud/stream/28?hash=837065", g: "ficcao", type: "filme" },
    { t: "Jogos Vorazes 2", i: "jogos_vorazes2.webp", u: "https://motor.voltti.cloud/stream/29?hash=84123f", g: "ficcao", type: "filme" },
    { t: "Jogos Vorazes A Esperança 1", i: "esperanca1.webp", u: "https://motor.voltti.cloud/stream/31?hash=f268cb", g: "ficcao", type: "filme" },
    { t: "Jogos Vorazes A Esperança 2", i: "esperanca2.webp", u: "https://motor.voltti.cloud/stream/32?hash=2450d5", g: "ficcao", type: "filme" },
    { t: "A Chegada", i: "a_chegada.webp", u: "https://motor.voltti.cloud/stream/37?hash=83485d", g: "ficcao", type: "filme" },
    { t: "Percy Jackson 1", i: "percy_jackson1.webp", u: "https://motor.voltti.cloud/stream/26?hash=962375", g: "ficcao", type: "filme" },
    { t: "Guardião da Galáxia 1", i: "guardioes1.webp", u: "https://motor.voltti.cloud/stream/39?hash=1b295a", g: "ficcao", type: "filme" },

    // --- TERROR / SUSPENSE ---
    { t: "Verdade ou Consequência", i: "verdade_consequencia.webp", u: "https://motor.voltti.cloud/stream/35?hash=b8b917", g: "terror", type: "filme" },
    { t: "Resident Evil 2", i: "resident_evil2.webp", u: "https://motor.voltti.cloud/stream/51?hash=2b0cd8", g: "terror", type: "filme" },
    { t: "A Morte Pede Carona", i: "morte_pedecarona.webp", u: "https://motor.voltti.cloud/stream/50?hash=a8c4d8", g: "terror", type: "filme" },
    { t: "Doce Vingança", i: "doce_vinganca.webp", u: "https://motor.voltti.cloud/stream/38?hash=0610c0", g: "terror", type: "filme" },

    // --- COMÉDIA / OUTROS ---
    { t: "As Branquelas", i: "as_branquelas.webp", u: "https://motor.voltti.cloud/stream/53?hash=13403f", g: "comedia", type: "filme" },
    { t: "Menino do Pijama Listrado", i: "menino_pijama.webp", u: "https://motor.voltti.cloud/stream/43?hash=ce7537", g: "drama", type: "filme" }
];

function render(data = DB) {
    const grid = document.getElementById('movie-grid');
    grid.innerHTML = data.map(f => `
        <div class="card" onclick="play('${f.t}', '${f.u}')">
            <img src="${f.i}" alt="${f.t}" onerror="this.src='capa_padrao.webp'">
            <div class="card-title">${f.t}</div>
        </div>`).join('');
}

function renderByGenre(genre) {
    const filtered = genre === 'todos' ? DB : DB.filter(f => f.g === genre);
    document.getElementById('cat-title').innerText = genre === 'todos' ? "MAIS POPULARES" : genre.toUpperCase();
    render(filtered);
}

function filterType(type) {
    const filtered = DB.filter(f => f.type === type);
    document.getElementById('cat-title').innerText = type.toUpperCase() + "S";
    render(filtered);
    if(document.getElementById('side-menu').classList.contains('active')) toggleMenu();
}

function toggleMenu() { document.getElementById('side-menu').classList.toggle('active'); }
function userStatus() { alert("💎 Usuário Premium: Mateus Santos"); }

function play(t, u) {
    if(!u) return alert("Vídeo indisponível");
    document.getElementById('playing-title').innerText = t;
    document.getElementById('player-wrap').innerHTML = `<video controls autoplay style="width:100%; border-radius:8px;"><source src="${u}" type="video/mp4"></video>`;
    document.getElementById('video-overlay').style.display = 'flex';
}

function closeVid() {
    document.getElementById('player-wrap').innerHTML = '';
    document.getElementById('video-overlay').style.display = 'none';
}

window.onload = () => render();
