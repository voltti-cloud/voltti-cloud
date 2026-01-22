const API_KEY = '014f3cfb4ad4f513360cfdf57f0f30c0';

const conteudos = [
    { titulo: "Crepúsculo", videoID: "https://motor.voltti.cloud/stream/18?hash=c08e43", tipo: "filme", genero: "Romance" },
    { titulo: "Lua Nova", videoID: "https://motor.voltti.cloud/stream/19?hash=32c817", tipo: "filme", genero: "Romance" },
    { titulo: "The Batman", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "Ação" },
    { titulo: "Avatar: O Caminho da Água", videoID: "https://motor.voltti.cloud/stream/34?hash=19f4de", tipo: "filme", genero: "Ficção" },
    { titulo: "Deadpool & Wolverine", videoID: "https://motor.voltti.cloud/stream/60?hash=3334f1", tipo: "filme", genero: "Ação" },
    { titulo: "Boca de Fumo", videoID: "https://motor.voltti.cloud/stream/59?hash=c83fc7", tipo: "filme", genero: "Ação" },
    { titulo: "Vingança Brutal", videoID: "https://motor.voltti.cloud/stream/65?hash=7738f9", tipo: "filme", genero: "Ação" },
    { titulo: "John Wick 3", videoID: "https://motor.voltti.cloud/stream/66?hash=0fde0a", tipo: "filme", genero: "Ação" },
    { titulo: "Coringa", videoID: "https://motor.voltti.cloud/stream/62?hash=496cb3", tipo: "filme", genero: "Drama" },
    { titulo: "Five Nights at Freddy's 2", videoID: "https://motor.voltti.cloud/stream/70?hash=7c66b9", tipo: "filme", genero: "Terror" }
    // É só seguir colocando o nome do filme aqui e pronto.
];

const grid = document.getElementById('movie-grid');

async function buscarCapa(titulo) {
    try {
        // Agora forçamos a busca apenas na categoria 'movie' (filme) para não vir lixo
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(titulo)}&language=pt-BR&include_adult=false`;
        
        const resp = await fetch(url);
        const data = await resp.json();
        
        // Pegamos o primeiro resultado que tenha uma capa disponível
        if (data.results && data.results.length > 0) {
            const filmeCerto = data.results.find(f => f.poster_path) || data.results[0];
            return `https://image.tmdb.org/t/p/w500${filmeCerto.poster_path}`;
        }
    } catch (e) { console.error("Erro na busca de: " + titulo); }
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

        const itens = lista.filter(i => i.genero === gen);
        const cards = await Promise.all(itens.map(async (item) => {
            const capaURL = await buscarCapa(item.titulo);
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<img src="${capaURL}"><p>${item.titulo}</p>`;
            card.onclick = () => darPlay(item.videoID, item.titulo);
            return card;
        }));

        cards.forEach(c => linha.appendChild(c));
        grid.appendChild(secao);
    }
}

function darPlay(url, titulo) {
    const player = document.getElementById('main-player');
    document.getElementById('video-title').innerText = titulo;
    player.src = url;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

window.onload = () => renderizar(conteudos);
