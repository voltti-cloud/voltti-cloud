const conteudos = [
    { titulo: "The Batman", capa: "the_batman.webp", url: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "Ação" },
    { titulo: "Crepusculo 1", capa: "crepusculo1.webp", url: "https://motor.voltti.cloud/stream/18?hash=c08e43", tipo: "filme", genero: "Romance" },
    { titulo: "Lua Nova", capa: "luanova.webp", url: "https://motor.voltti.cloud/stream/19?hash=32c817", tipo: "filme", genero: "Romance" },
    { titulo: "Eclipse", capa: "eclipse.webp", url: "https://motor.voltti.cloud/stream/20?hash=4d8896", tipo: "filme", genero: "Romance" },
    { titulo: "Amanhecer Parte 1", capa: "amanhecer1.webp", url: "https://motor.voltti.cloud/stream/22?hash=d297e2", tipo: "filme", genero: "Romance" },
    { titulo: "Amanhecer Parte 2", capa: "amanhecer2.webp", url: "https://motor.voltti.cloud/stream/21?hash=a7a7fc", tipo: "filme", genero: "Romance" },
    { titulo: "5 Passos de Você", capa: "5passos.webp", url: "https://motor.voltti.cloud/stream/12?hash=1e921d", tipo: "filme", genero: "Romance" },
    { titulo: "10 Coisas que Eu Odeio em Você", capa: "10coisas.webp", url: "https://motor.voltti.cloud/stream/40?hash=b10ea8", tipo: "filme", genero: "Romance" },
    { titulo: "Homem Aranha 1", capa: "homemaranha1.webp", url: "https://motor.voltti.cloud/stream/14?hash=b15349", tipo: "filme", genero: "Ação" },
    { titulo: "Vingadores 1", capa: "vingadores1.webp", url: "https://motor.voltti.cloud/stream/55?hash=271e64", tipo: "filme", genero: "Ação" },
    { titulo: "Avatar 1", capa: "avatar1.webp", url: "https://motor.voltti.cloud/stream/46?hash=dc96d7", tipo: "filme", genero: "Ficção" },
    { titulo: "Avatar 2", capa: "avatar2.webp", url: "https://motor.voltti.cloud/stream/34?hash=19f4de", tipo: "filme", genero: "Ficção" },
    { titulo: "Resident Evil 2", capa: "resident_evil2.webp", url: "https://motor.voltti.cloud/stream/51?hash=2b0cd8", tipo: "filme", genero: "Terror" },
    { titulo: "As Branquelas", capa: "as_branquelas.webp", url: "https://motor.voltti.cloud/stream/53?hash=13403f", tipo: "filme", genero: "Comédia" },
    { 
        titulo: "A Má Mãe", capa: "https://drive.google.com/thumbnail?id=1_NY-gbUM21gbOdsBf56zVjNtm8KUDYoi", 
        tipo: "dorama", genero: "Dorama",
        episodios: [{ nome: "Episódio 01", url: "1_tOC-zRf2hIDxrmZiHd3gpImrj0yIWzV" }]
    }
];

const grid = document.getElementById('movie-grid');
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.onclick = () => navMenu.classList.toggle('active');

function renderizar(lista) {
    grid.innerHTML = "";
    lista.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="${item.capa}" onerror="this.src='capa_padrao.webp'"><p>${item.titulo}</p>`;
        card.onclick = () => {
            if (item.episodios) {
                gerarEps(item);
            } else {
                darPlay(item.url, item.titulo);
            }
        };
        grid.appendChild(card);
    });
}

function darPlay(url, titulo) {
    const player = document.getElementById('main-player');
    document.getElementById('video-title').innerText = titulo;
    document.getElementById('lista-eps').innerHTML = "";
    
    // Se for link do Drive (ID curto), monta o preview. Se for URL completa, usa direto.
    if (!url.includes('http')) {
        player.src = "https://drive.google.com/file/d/" + url + "/preview";
    } else {
        player.src = url;
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function gerarEps(serie) {
    const container = document.getElementById('lista-eps');
    document.getElementById('video-title').innerText = serie.titulo;
    container.innerHTML = "";
    serie.episodios.forEach(ep => {
        const btn = document.createElement('button');
        btn.innerText = ep.nome;
        btn.className = "btn-episodio";
        btn.onclick = () => darPlay(ep.url, serie.titulo + " - " + ep.nome);
        container.appendChild(btn);
    });
}

function filtrar(tipo) {
    navMenu.classList.remove('active');
    renderizar(tipo === 'todos' ? conteudos : conteudos.filter(i => i.tipo === tipo));
}

window.onload = () => renderizar(conteudos);
