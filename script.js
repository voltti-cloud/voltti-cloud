const API_KEY = '014f3cfb4ad4f513360cfdf57f0f30c0';

const conteudos = [
    { titulo: "A Saga Crepúsculo", videoID: "https://motor.voltti.cloud/stream/18?hash=c08e43", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Lua Nova", videoID: "https://motor.voltti.cloud/stream/19?hash=32c817", tipo: "filme", genero: "Romance" },
    { titulo: "The Batman", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "Ação" },
    { titulo: "Deadpool & Wolverine", videoID: "https://motor.voltti.cloud/stream/60?hash=3334f1", tipo: "filme", genero: "Ação" },
    { titulo: "Five Nights at Freddy's 2", videoID: "https://motor.voltti.cloud/stream/70?hash=7c66b9", tipo: "filme", genero: "Terror" }
    // O resto dos 49 filmes seguem aqui...
];

async function buscarCapa(titulo) {
    try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(titulo)}&language=pt-BR`;
        const resp = await fetch(url);
        const data = await resp.json();
        return data.results && data.results[0] ? `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}` : 'capa_padrao.webp';
    } catch (e) { return 'capa_padrao.webp'; }
}

async function renderizar(lista) {
    const grid = document.getElementById('movie-grid');
    grid.innerHTML = "";
    const generos = [...new Set(lista.map(i => i.genero))];
    for (const gen of generos) {
        const secao = document.createElement('div');
        secao.className = 'genero-secao';
        secao.innerHTML = `<h3 class="genero-titulo">${gen}</h3><div class="genero-linha"></div>`;
        const linha = secao.querySelector('.genero-linha');
        const itens = lista.filter(i => i.genero === gen);

        for (const item of itens) {
            const capaURL = await buscarCapa(item.titulo);
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<img src="${capaURL}"><p>${item.titulo}</p>`;
            // Função para abrir o player
            card.onclick = () => {
                location.href = item.videoID;
            };
            linha.appendChild(card);
        }
        grid.appendChild(secao);
    }
}

window.onload = () => renderizar(conteudos);
