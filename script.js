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
        { t: "Amanhecer Parte 1", i: "amanhecer1.webp", u: "https://motor.voltti.cloud/stream/22?hash=d297e2" },
        { t: "Amanhecer Parte 2", i: "amanhecer2.webp", u: "https://motor.voltti.cloud/stream/21?hash=a7a7fc" },
        { t: "Menino do Pijama Listrado", i: "menino_pijama.webp", u: "https://motor.voltti.cloud/stream/43?hash=ce7537" },
        { t: "The Batman", i: "the_batman.webp", u: "https://motor.voltti.cloud/stream/44?hash=24a8f1" },
        { t: "Cão de Briga", i: "cao_briga.webp", u: "https://motor.voltti.cloud/stream/48?hash=177e49" },
        { t: "Avatar 1", i: "avatar1.webp", u: "https://motor.voltti.cloud/stream/46?hash=dc96d7" },
        { t: "Avatar 2", i: "avatar2.webp", u: "https://motor.voltti.cloud/stream/34?hash=19f4de" },
        { t: "Verdade ou Consequência", i: "verdade_consequencia.webp", u: "https://motor.voltti.cloud/stream/35?hash=b8b917" },
        { t: "Resident Evil 2", i: "resident_evil2.webp", u: "https://motor.voltti.cloud/stream/51?hash=2b0cd8" },
        { t: "A Morte Pede Carona", i: "morte_pedecarona.webp", u: "https://motor.voltti.cloud/stream/50?hash=a8c4d8" },
        { t: "Guardião da Galáxia 1", i: "guardioes1.webp", u: "https://motor.voltti.cloud/stream/39?hash=1b295a" },
        { t: "10 Coisas que Eu Odeio em Você", i: "10coisas.webp", u: "https://motor.voltti.cloud/stream/40?hash=b10ea8" },
        { t: "Vingadores 1", i: "capa_padrao.webp", u: "" },
        { t: "Percy Jackson 1", i: "capa_padrao.webp", u: "https://motor.voltti.cloud/stream/26?hash=962375" },
        { t: "As Branquelas", i: "as_branquelas.webp", u: "https://motor.voltti.cloud/stream/53?hash=13403f" },
        { t: "A Chegada", i: "capa_padrao.webp", u: "https://motor.voltti.cloud/stream/37?hash=83485d" },
        { t: "Jogos Vorazes", i: "jogos_vorazes1.webp", u: "https://motor.voltti.cloud/stream/28?hash=837065" },
        { t: "Jogos Vorazes 2", i: "jogos_vorazes2.webp", u: "https://motor.voltti.cloud/stream/29?hash=84123f" },
        { t: "Jogos Vorazes A Esperança 1", i: "esperanca1.webp", u: "https://motor.voltti.cloud/stream/31?hash=f268cb" },
        { t: "Jogos Vorazes A Esperança 2", i: "esperanca2.webp", u: "https://motor.voltti.cloud/stream/32?hash=2450d5" },
        { t: "Doce Vingança", i: "doce_vinganca.webp", u: "https://motor.voltti.cloud/stream/38?hash=0610c0" },
        { t: "Missão Impossível Acerto Final", i: "missao_impossivel.webp", u: "https://motor.voltti.cloud/stream/54?hash=5d6fd9" }
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
    if(!url) { alert('Link de vídeo não encontrado!'); return; }
    document.getElementById('playing-title').innerText = title;
    document.getElementById('player-wrap').innerHTML = `
        <video controls autoplay style="width:100%; border-radius:8px;">
            <source src="${url}" type="video/mp4">
        </video>`;
    document.getElementById('video-overlay').style.display = 'flex';
}

window.onload = () => render();
