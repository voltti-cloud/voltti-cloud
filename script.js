const DB = {
    filmes: [
        // ROMANCE
        { t: "Crepusculo 1", i: "crepusculo1.webp", u: "https://motor.voltti.cloud/stream/18?hash=c08e43", g: "romance" },
        { t: "Lua Nova", i: "luanova.webp", u: "https://motor.voltti.cloud/stream/19?hash=32c817", g: "romance" },
        { t: "Eclipse", i: "eclipse.webp", u: "https://motor.voltti.cloud/stream/20?hash=4d8896", g: "romance" },
        { t: "Amanhecer Parte 1", i: "amanhecer1.webp", u: "https://motor.voltti.cloud/stream/22?hash=d297e2", g: "romance" },
        { t: "Amanhecer Parte 2", i: "amanhecer2.webp", u: "https://motor.voltti.cloud/stream/21?hash=a7a7fc", g: "romance" },
        { t: "5 Passos de Você", i: "5passos.webp", u: "https://motor.voltti.cloud/stream/12?hash=1e921d", g: "romance" },
        { t: "10 Coisas que Eu Odeio em Você", i: "10coisas.webp", u: "https://motor.voltti.cloud/stream/40?hash=b10ea8", g: "romance" },
        
        // AÇÃO / AVENTURA
        { t: "The Batman", i: "the_batman.webp", u: "https://motor.voltti.cloud/stream/44?hash=24a8f1", g: "acao" },
        { t: "Homem Aranha 1", i: "homemaranha1.webp", u: "https://motor.voltti.cloud/stream/14?hash=b15349", g: "acao" },
        { t: "Homem Aranha 2", i: "homemaranha2.webp", u: "https://motor.voltti.cloud/stream/15?hash=43e939", g: "acao" },
        { t: "Homem Aranha 3", i: "homemaranha3.webp", u: "https://motor.voltti.cloud/stream/16?hash=0a10b3", g: "acao" },
        { t: "Guardião da Galáxia 1", i: "guardioes1.webp", u: "https://motor.voltti.cloud/stream/39?hash=1b295a", g: "acao" },
        { t: "Cão de Briga", i: "cao_briga.webp", u: "https://motor.voltti.cloud/stream/48?hash=177e49", g: "acao" },
        { t: "Missão Impossível Acerto Final", i: "missao_impossivel.webp", u: "https://motor.voltti.cloud/stream/54?hash=5d6fd9", g: "acao" },

        // FICÇÃO CIENTÍFICA
        { t: "Avatar 1", i: "avatar1.webp", u: "https://motor.voltti.cloud/stream/46?hash=dc96d7", g: "ficcao" },
        { t: "Avatar 2", i: "avatar2.webp", u: "https://motor.voltti.cloud/stream/34?hash=19f4de", g: "ficcao" },
        { t: "Círculo de Fogo", i: "circulodefogo1.webp", u: "https://motor.voltti.cloud/stream/9?hash=a51334", g: "ficcao" },
        { t: "Círculo de Fogo 2", i: "circulodefogo2.webp", u: "https://motor.voltti.cloud/stream/10?hash=3ca7e5", g: "ficcao" },
        { t: "Jogos Vorazes", i: "jogos_vorazes1.webp", u: "https://motor.voltti.cloud/stream/28?hash=837065", g: "ficcao" },
        { t: "A Chegada", i: "capa_padrao.webp", u: "https://motor.voltti.cloud/stream/37?hash=83485d", g: "ficcao" },

        // SUSPENSE / TERROR
        { t: "Verdade ou Consequência", i: "verdade_consequencia.webp", u: "https://motor.voltti.cloud/stream/35?hash=b8b917", g: "terror" },
        { t: "Resident Evil 2", i: "resident_evil2.webp", u: "https://motor.voltti.cloud/stream/51?hash=2b0cd8", g: "terror" },
        { t: "A Morte Pede Carona", i: "morte_pedecarona.webp", u: "https://motor.voltti.cloud/stream/50?hash=a8c4d8", g: "terror" },
        { t: "Doce Vingança", i: "doce_vinganca.webp", u: "https://motor.voltti.cloud/stream/38?hash=0610c0", g: "terror" },

        // COMÉDIA
        { t: "As Branquelas", i: "as_branquelas.webp", u: "https://motor.voltti.cloud/stream/53?hash=13403f", g: "comedia" }
    ]
};

function render(filterGenre = 'todos') {
    const grid = document.getElementById('movie-grid');
    const title = document.getElementById('cat-title');
    
    let filteredData = DB.filmes;
    if (filterGenre !== 'todos') {
        filteredData = DB.filmes.filter(f => f.g === filterGenre);
        title.innerText = filterGenre.toUpperCase();
    } else {
        title.innerText = "MAIS POPULARES";
    }
    
    grid.innerHTML = filteredData.map(f => `
        <div class="card" style="background-image: url('${f.i}');" onclick="play('${f.t}', '${f.u}')">
            <div class="card-title">${f.t}</div>
        </div>
    `).join('');
}

// Funções de controle do player e menu continuam as mesmas...
function toggleMenu() { document.getElementById('side-menu').classList.toggle('active'); }
function play(t, u) {
    if(!u) { alert('Link indisponível'); return; }
    document.getElementById('playing-title').innerText = t;
    document.getElementById('player-wrap').innerHTML = '<video controls autoplay style="width:100%"><source src="'+u+'" type="video/mp4"></video>';
    document.getElementById('video-overlay').style.display = 'flex';
}
function closeVid() { document.getElementById('video-overlay').style.display = 'none'; }
window.onload = () => render();
