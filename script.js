const conteudos = [
    { titulo: "The Batman", capaID: "the_batman.webp", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "Ação" },
    { titulo: "Crepusculo 1", capaID: "crepusculo1.webp", videoID: "https://motor.voltti.cloud/stream/18?hash=c08e43", tipo: "filme", genero: "Romance" },
    { titulo: "Lua Nova", capaID: "luanova.webp", videoID: "https://motor.voltti.cloud/stream/19?hash=32c817", tipo: "filme", genero: "Romance" },
    { titulo: "Eclipse", capaID: "eclipse.webp", videoID: "https://motor.voltti.cloud/stream/20?hash=4d8896", tipo: "filme", genero: "Romance" },
    { titulo: "Amanhecer Parte 1", capaID: "amanhecer1.webp", videoID: "https://motor.voltti.cloud/stream/22?hash=d297e2", tipo: "filme", genero: "Romance" },
    { titulo: "Amanhecer Parte 2", capaID: "amanhecer2.webp", videoID: "https://motor.voltti.cloud/stream/21?hash=a7a7fc", tipo: "filme", genero: "Romance" },
    { titulo: "5 Passos de Você", capaID: "5passos.webp", videoID: "https://motor.voltti.cloud/stream/12?hash=1e921d", tipo: "filme", genero: "Romance" },
    { titulo: "10 Coisas que Eu Odeio em Você", capaID: "10coisas.webp", videoID: "https://motor.voltti.cloud/stream/40?hash=b10ea8", tipo: "filme", genero: "Romance" },
    { titulo: "Homem Aranha 1", capaID: "homemaranha1.webp", videoID: "https://motor.voltti.cloud/stream/14?hash=b15349", tipo: "filme", genero: "Ação" },
    { titulo: "Vingadores 1", capaID: "vingadores1.webp", videoID: "https://motor.voltti.cloud/stream/55?hash=271e64", tipo: "filme", genero: "Ação" },
    { titulo: "Avatar 1", capaID: "avatar1.webp", videoID: "https://motor.voltti.cloud/stream/46?hash=dc96d7", tipo: "filme", genero: "Ficção" },
    { titulo: "Verdade ou Consequência", capaID: "verdade_consequencia.webp", videoID: "https://motor.voltti.cloud/stream/35?hash=b8b917", tipo: "filme", genero: "Terror" },
    { titulo: "As Branquelas", capaID: "as_branquelas.webp", videoID: "https://motor.voltti.cloud/stream/53?hash=13403f", tipo: "filme", genero: "Comédia" },
    { 
        titulo: "A Má Mãe", 
        capaID: "https://drive.google.com/thumbnail?id=1_NY-gbUM21gbOdsBf56zVjNtm8KUDYoi", 
        tipo: "dorama", genero: "Dorama",
        episodios: [{ nome: "Episódio 01", videoID: "1_tOC-zRf2hIDxrmZiHd3gpImrj0yIWzV" }]
    }
];

const grid = document.getElementById('movie-grid');
const navMenu = document.getElementById('nav-menu');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenu.onclick = () => navMenu.classList.toggle('active');

function renderizar(lista) {
    grid.innerHTML = "";
    const generos = [...new Set(lista.map(i => i.genero))];

    generos.forEach(gen => {
        const secao = document.createElement('div');
        secao.className = 'genero-secao';
        secao.innerHTML = `<h3 class="genero-titulo">${gen}</h3><div class="genero-linha"></div>`;
        const linha = secao.querySelector('.genero-linha');

        lista.filter(i => i.genero === gen).forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            const thumb = item.capaID.includes('http') ? item.capaID : item.capaID;
            card.innerHTML = `<img src="${thumb}" onerror="this.src='capa_padrao.webp'"><p>${item.titulo}</p>`;
            card.onclick = () => item.episodios ? gerarEps(item) : darPlay(item.videoID, item.titulo);
            linha.appendChild(card);
        });
        grid.appendChild(secao);
    });
}

function darPlay(id, titulo) {
    const player = document.getElementById('main-player');
    document.getElementById('video-title').innerText = titulo;
    document.getElementById('lista-eps').innerHTML = "";
    player.src = id.includes('http') ? id : "https://drive.google.com/file/d/" + id + "/preview";
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function gerarEps(serie) {
    const container = document.getElementById('lista-eps');
    document.getElementById('video-title').innerText = serie.titulo;
    container.innerHTML = serie.episodios.map(ep => 
        `<button class="btn-episodio" onclick="darPlay('${ep.videoID}', '${serie.titulo} - ${ep.nome}')">${ep.nome}</button>`
    ).join('');
}

function filtrar(tipo) {
    navMenu.classList.remove('active');
    renderizar(tipo === 'todos' ? conteudos : conteudos.filter(i => i.tipo === tipo));
}

window.onload = () => renderizar(conteudos);
