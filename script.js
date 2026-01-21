const DB = [
    { t: "Crepusculo 1", i: "crepusculo1.webp", u: "https://motor.voltti.cloud/stream/18?hash=c08e43", g: "Romance" },
    { t: "Lua Nova", i: "luanova.webp", u: "https://motor.voltti.cloud/stream/19?hash=32c817", g: "Romance" },
    { t: "Eclipse", i: "eclipse.webp", u: "https://motor.voltti.cloud/stream/20?hash=4d8896", g: "Romance" },
    { t: "Amanhecer Parte 1", i: "amanhecer1.webp", u: "https://motor.voltti.cloud/stream/22?hash=d297e2", g: "Romance" },
    { t: "Amanhecer Parte 2", i: "amanhecer2.webp", u: "https://motor.voltti.cloud/stream/21?hash=a7a7fc", g: "Romance" },
    { t: "5 Passos de Você", i: "5passos.webp", u: "https://motor.voltti.cloud/stream/12?hash=1e921d", g: "Romance" },
    { t: "10 Coisas que Eu Odeio em Você", i: "10coisas.webp", u: "https://motor.voltti.cloud/stream/40?hash=b10ea8", g: "Romance" },
    { t: "The Batman", i: "the_batman.webp", u: "https://motor.voltti.cloud/stream/44?hash=24a8f1", g: "Ação" },
    { t: "Homem Aranha 1", i: "homemaranha1.webp", u: "https://motor.voltti.cloud/stream/14?hash=b15349", g: "Ação" },
    { t: "Homem Aranha 2", i: "homemaranha2.webp", u: "https://motor.voltti.cloud/stream/15?hash=43e939", g: "Ação" },
    { t: "Homem Aranha 3", i: "homemaranha3.webp", u: "https://motor.voltti.cloud/stream/16?hash=0a10b3", g: "Ação" },
    { t: "Vingadores 1", i: "vingadores1.webp", u: "https://motor.voltti.cloud/stream/55?hash=271e64", g: "Ação" },
    { t: "Cão de Briga", i: "cao_briga.webp", u: "https://motor.voltti.cloud/stream/48?hash=177e49", g: "Ação" },
    { t: "Missão Impossível", i: "missao_impossivel.webp", u: "https://motor.voltti.cloud/stream/54?hash=5d6fd9", g: "Ação" },
    { t: "Avatar 1", i: "avatar1.webp", u: "https://motor.voltti.cloud/stream/46?hash=dc96d7", g: "Ficção" },
    { t: "Avatar 2", i: "avatar2.webp", u: "https://motor.voltti.cloud/stream/34?hash=19f4de", g: "Ficção" },
    { t: "Círculo de Fogo 1", i: "circulodefogo.webp", u: "https://motor.voltti.cloud/stream/9?hash=a51334", g: "Ficção" },
    { t: "Círculo de Fogo 2", i: "circulodefogo2.webp", u: "https://motor.voltti.cloud/stream/10?hash=3ca7e5", g: "Ficção" },
    { t: "Jogos Vorazes 1", i: "jogos_vorazes1.webp", u: "https://motor.voltti.cloud/stream/28?hash=837065", g: "Ficção" },
    { t: "Jogos Vorazes 2", i: "jogos_vorazes2.webp", u: "https://motor.voltti.cloud/stream/29?hash=84123f", g: "Ficção" },
    { t: "Esperança Parte 1", i: "esperanca1.webp", u: "https://motor.voltti.cloud/stream/31?hash=f268cb", g: "Ficção" },
    { t: "Esperança Parte 2", i: "esperanca2.webp", u: "https://motor.voltti.cloud/stream/32?hash=2450d5", g: "Ficção" },
    { t: "A Chegada", i: "a_chegada.webp", u: "https://motor.voltti.cloud/stream/37?hash=83485d", g: "Ficção" },
    { t: "Percy Jackson 1", i: "percy_jackson1.webp", u: "https://motor.voltti.cloud/stream/26?hash=962375", g: "Ficção" },
    { t: "Guardiões da Galáxia", i: "guardioes1.webp", u: "https://motor.voltti.cloud/stream/39?hash=1b295a", g: "Ficção" },
    { t: "Verdade ou Consequência", i: "verdade_consequencia.webp", u: "https://motor.voltti.cloud/stream/35?hash=b8b917", g: "Terror" },
    { t: "Resident Evil 2", i: "resident_evil2.webp", u: "https://motor.voltti.cloud/stream/51?hash=2b0cd8", g: "Terror" },
    { t: "A Morte Pede Carona", i: "morte_pedecarona.webp", u: "https://motor.voltti.cloud/stream/50?hash=a8c4d8", g: "Terror" },
    { t: "Doce Vingança", i: "doce_vinganca.webp", u: "https://motor.voltti.cloud/stream/38?hash=0610c0", g: "Terror" },
    { t: "As Branquelas", i: "as_branquelas.webp", u: "https://motor.voltti.cloud/stream/53?hash=13403f", g: "Comédia" },
    { t: "Menino do Pijama", i: "menino_pijama.webp", u: "https://motor.voltti.cloud/stream/43?hash=ce7537", g: "Ficção" }
];

const grid = document.getElementById('movie-grid');
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.onclick = () => navMenu.classList.toggle('active');

function renderizar(lista) {
    grid.innerHTML = "";
    const generos = [...new Set(lista.map(item => item.g))];
    
    generos.forEach(gen => {
        const secao = document.createElement('div');
        secao.className = 'genero-secao';
        secao.innerHTML = `<h3 class="genero-titulo">${gen}</h3><div class="genero-linha"></div>`;
        const linha = secao.querySelector('.genero-linha');
        
        lista.filter(i => i.g === gen).forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<img src="${item.i}" onerror="this.src='capa_padrao.webp'"><p>${item.t}</p>`;
            card.onclick = () => darPlay(item.u, item.t);
            linha.appendChild(card);
        });
        grid.appendChild(secao);
    });
}

function darPlay(url, titulo) {
    document.getElementById('video-title').innerText = titulo;
    document.getElementById('video-content').innerHTML = `<video controls autoplay src="${url}"></video>`;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function filtrar(g) {
    navMenu.classList.remove('active');
    renderizar(g === 'todos' ? DB : DB.filter(i => i.g.toLowerCase() === g));
}

window.onload = () => renderizar(DB);
