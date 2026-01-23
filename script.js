const API_KEY = '014f3cfb4ad4f513360cfdf57f0f30c0';
const conteudos = [
    { titulo: "A Saga Crepúsculo", videoID: "https://motor.voltti.cloud/stream/18?hash=c08e43", tipo: "filme", genero: "Romance" },
    { titulo: "Velozes & Furiosos", videoID: "https://motor.voltti.cloud/stream/57?hash=b3eb50", tipo: "filme", genero: "Ação" },
    { titulo: "The Batman", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "Ação" }
    // ... os outros 46 filmes aqui ...
];

async function buscarCapa(titulo) {
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(titulo)}&language=pt-BR`);
    const data = await resp.json();
    return data.results && data.results[0] ? `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}` : 'capa_padrao.webp';
}

function darPlay(url, titulo) {
    const video = document.getElementById('player-voltti');
    const source = document.getElementById('video-source');
    const title = document.getElementById('video-title');

    title.innerText = "Assistindo: " + titulo;
    source.src = url;
    video.load(); // Importante para o player carregar o novo link
    video.play();
    window.scrollTo({top: 0, behavior: 'smooth'});
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
            card.onclick = () => darPlay(item.videoID, item.titulo);
            linha.appendChild(card);
        }
        grid.appendChild(secao);
    }
}
window.onload = () => renderizar(conteudos);
