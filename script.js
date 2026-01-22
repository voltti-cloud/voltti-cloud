const API_KEY = '014f3cfb4ad4f513360cfdf57f0f30c0';
const conteudos = [
    { titulo: "The Batman", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "Ação" },
    { titulo: "Crepusculo", videoID: "https://motor.voltti.cloud/stream/18?hash=c08e43", tipo: "filme", genero: "Romance" },
    { titulo: "Lua Nova", videoID: "https://motor.voltti.cloud/stream/19?hash=32c817", tipo: "filme", genero: "Romance" },
    { titulo: "Homem Aranha 1", videoID: "https://motor.voltti.cloud/stream/14?hash=b15349", tipo: "filme", genero: "Ação" },
    { titulo: "Vingadores", videoID: "https://motor.voltti.cloud/stream/55?hash=271e64", tipo: "filme", genero: "Ação" },
    { titulo: "Avatar", videoID: "https://motor.voltti.cloud/stream/46?hash=dc96d7", tipo: "filme", genero: "Ficção" },
    { titulo: "As Branquelas", videoID: "https://motor.voltti.cloud/stream/53?hash=13403f", tipo: "filme", genero: "Comédia" },
    { 
        titulo: "A Má Mãe", tipo: "dorama", genero: "Dorama",
        episodios: [{ nome: "Episódio 01", videoID: "1_tOC-zRf2hIDxrmZiHd3gpImrj0yIWzV" }]
    }
];

const grid = document.getElementById('movie-grid');

// Função Mágica que busca a capa no TMDB pelo título
async function buscarCapa(titulo) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(titulo)}&language=pt-BR`);
        const data = await response.json();
        if (data.results && data.results[0].poster_path) {
            return `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
        }
    } catch (e) { console.error("Erro ao buscar capa", e); }
    return 'capa_padrao.webp';
}

async function renderizar(lista) {
    grid.innerHTML = "";
    const generos = [...new Set(lista.map(i => i.genero))];

    for (const gen of generos) {
        const secao = document.createElement('div');
        secao.className = 'genero-secao';
        secao.innerHTML = `<h3 class="genero-titulo">${gen}</h3><div class="genero-linha"></div>`;
        const linha = secao.querySelector('.genero-linha');

        const itensDoGenero = lista.filter(i => i.genero === gen);
        for (const item of itensDoGenero) {
            const capaURL = await buscarCapa(item.titulo);
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<img src="${capaURL}"><p>${item.titulo}</p>`;
            card.onclick = () => item.episodios ? gerarEps(item) : darPlay(item.videoID, item.titulo);
            linha.appendChild(card);
        }
        grid.appendChild(secao);
    }
}

function darPlay(url, titulo) {
    const player = document.getElementById('main-player');
    document.getElementById('video-title').innerText = titulo;
    player.src = url.includes('http') ? url : "https://drive.google.com/file/d/" + url + "/preview";
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function filtrar(tipo) {
    renderizar(tipo === 'todos' ? conteudos : conteudos.filter(i => i.tipo === tipo));
}

window.onload = () => renderizar(conteudos);
