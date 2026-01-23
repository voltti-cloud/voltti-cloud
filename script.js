const API_KEY = '014f3cfb4ad4f513360cfdf57f0f30c0';

const conteudos = [
    { titulo: "Homem-Aranha", videoID: "https://motor.voltti.cloud/stream/14?hash=b15349", tipo: "filme", genero: "Marvel" },
    { titulo: "The Batman", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "DC" },
    { titulo: "Tanque de Guerra", videoID: "https://motor.voltti.cloud/stream/116?hash=d3e098", tipo: "filme", genero: "Ação" },
    { titulo: "A Saga Crepúsculo", videoID: "https://motor.voltti.cloud/stream/18?hash=c08e43", tipo: "filme", genero: "Romance" },
    // Adicione os outros 46 itens aqui mantendo o tipo: 'filme', 'serie' ou 'dorama'
];

async function buscarCapa(titulo) {
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(titulo)}&language=pt-BR`);
    const data = await resp.json();
    return data.results?.[0]?.poster_path ? `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}` : 'V.png';
}

function darPlay(url, titulo) {
    const iframe = document.getElementById('voltti-iframe');
    const placeholder = document.getElementById('placeholder');
    document.getElementById('video-title').innerText = "Assistindo: " + titulo;
    placeholder.style.display = 'none';
    iframe.style.display = 'block';
    iframe.src = "https://player.voltti.cloud/?v=" + encodeURIComponent(url);
    window.scrollTo({top: 0, behavior: 'smooth'});
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
            const capa = await buscarCapa(item.titulo);
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<img src="${capa}"><p>${item.titulo}</p>`;
            card.onclick = () => darPlay(item.videoID, item.titulo);
            container.appendChild(card);
        }
    }
}

// FUNÇÃO DE FILTRO PARA O MENU
function filtrar(categoria) {
    if (categoria === 'todos') {
        renderizar(conteudos);
    } else {
        const filtrados = conteudos.filter(item => item.tipo === categoria);
        renderizar(filtrados);
    }
}

window.onload = () => renderizar(conteudos);
