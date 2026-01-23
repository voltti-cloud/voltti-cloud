const API_KEY = '014f3cfb4ad4f513360cfdf57f0f30c0';
// Lista de filmes (conforme já temos)
const conteudos = [
    { titulo: "Homem-Aranha", videoID: "https://motor.voltti.cloud/stream/14?hash=b15349", tipo: "filme", genero: "Marvel" },
    { titulo: "The Batman", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "DC" },
    { titulo: "Tanque de Guerra", videoID: "https://motor.voltti.cloud/stream/74?hash=e15450", tipo: "filme", genero: "Guerra" }
    // ... adicione os outros aqui
];

function darPlay(url, titulo) {
    const video = document.getElementById('main-player');
    const source = document.getElementById('video-source');
    const placeholder = document.getElementById('placeholder');
    
    document.getElementById('video-title').innerText = "Assistindo: " + titulo;
    placeholder.style.display = 'none';
    video.style.display = 'block';
    
    source.src = url;
    video.load(); // Força o player a carregar o novo link
    video.play().catch(e => console.log("O player aguarda interação"));
    
    window.scrollTo({top: 0, behavior: 'smooth'});
}

async function buscarCapa(titulo) {
    try {
        const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(titulo)}&language=pt-BR`);
        const data = await resp.json();
        return data.results?.[0]?.poster_path ? `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}` : 'https://via.placeholder.com/500x750?text=VOLTTI';
    } catch (e) { return 'https://via.placeholder.com/500x750?text=VOLTTI'; }
}

async function renderizar(lista) {
    const grid = document.getElementById('movie-grid');
    grid.innerHTML = "";
    const generos = [...new Set(lista.map(i => i.genero))];
    for (const gen of generos) {
        const row = document.createElement('div');
        row.className = 'genre-row';
        row.innerHTML = `<h3 class="genre-title">${gen}</h3><div class="cards-container" id="row-${gen}"></div>`;
        grid.appendChild(row);
        const container = document.getElementById(`row-${gen}`);
        const itens = lista.filter(i => i.genero === gen);
        for (const item of itens) {
            const capaURL = await buscarCapa(item.titulo);
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<img src="${capaURL}"><p>${item.titulo}</p>`;
            card.onclick = () => darPlay(item.videoID, item.titulo);
            container.appendChild(card);
        }
    }
}

function filtrar(tipo) { renderizar(conteudos.filter(c => c.tipo === tipo)); }
window.onload = () => renderizar(conteudos);
