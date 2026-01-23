const API_KEY = '014f3cfb4ad4f513360cfdf57f0f30c0';

const conteudos = [
    { titulo: "A Saga Crepúsculo", videoID: "https://motor.voltti.cloud/stream/18?hash=c08e43", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Lua Nova", videoID: "https://motor.voltti.cloud/stream/19?hash=32c817", tipo: "filme", genero: "Romance" },
    { titulo: "Velozes & Furiosos", videoID: "https://motor.voltti.cloud/stream/57?hash=b3eb50", tipo: "filme", genero: "Ação" },
    { titulo: "The Batman", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "Ação" },
    { titulo: "Deadpool & Wolverine", videoID: "https://motor.voltti.cloud/stream/60?hash=3334f1", tipo: "filme", genero: "Ação" },
    { titulo: "A Morte Pede Carona", videoID: "https://motor.voltti.cloud/stream/50?hash=a8c4d8", tipo: "filme", genero: "Terror" }
    // Adicione os outros da sua planilha aqui...
];

const grid = document.getElementById('movie-grid');

async function buscarCapa(titulo) {
    try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(titulo)}&language=pt-BR`;
        const resp = await fetch(url);
        const data = await resp.json();
        return data.results && data.results[0] ? `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}` : 'capa_padrao.webp';
    } catch (e) { return 'capa_padrao.webp'; }
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

function darPlay(url, titulo) {
    const player = document.getElementById('main-player');
    const placeholder = document.getElementById('placeholder-player');
    const titleElem = document.getElementById('video-title');

    titleElem.innerText = "Carregando: " + titulo;
    
    // Esconde o ícone e mostra o player
    placeholder.style.display = 'none';
    player.style.display = 'block';
    
    // Força o carregamento no iframe para rodar dentro do app
    player.src = url;

    // Rola a tela para o topo para o cliente ver o vídeo
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function buscar() {
    const termo = document.getElementById('input-busca').value.toLowerCase();
    const filtrados = conteudos.filter(c => c.titulo.toLowerCase().includes(termo));
    renderizar(filtrados);
}

window.onload = () => renderizar(conteudos);
