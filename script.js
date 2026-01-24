const API_KEY = '014f3cfb4ad4f513360cfdf57f0f30c0';

const conteudos = [
    // --- FILMES ---
    { titulo: "Crepusculo 1", videoID: "https://motor.voltti.cloud/stream/18?hash=c08e43", tipo: "filme", genero: "Romance" },
    { titulo: "Lua Nova", videoID: "https://motor.voltti.cloud/stream/19?hash=32c817", tipo: "filme", genero: "Romance" },
    { titulo: "homem aranha 1", videoID: "https://motor.voltti.cloud/stream/14?hash=b15349", tipo: "filme", genero: "Ação" },
    { titulo: "the batman", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "Ação" },

    // --- SÉRIES (Links do Drive Convertidos para Direto) ---
    { 
        titulo: "La Casa de Papel - T1 EP01", 
        buscaCapa: "La Casa de Papel", 
        videoID: "https://drive.google.com/uc?export=download&id=174MmfBTzoWA5ScMYwvvEqKdc-xHdsFNK", 
        tipo: "serie", 
        genero: "Suspense" 
    },
    { 
        titulo: "La Casa de Papel - T1 EP02", 
        buscaCapa: "La Casa de Papel", 
        videoID: "https://drive.google.com/uc?export=download&id=1xEyIvLExOrza7hbOTaZ8jyc_QIZyyJdU", 
        tipo: "serie", 
        genero: "Suspense" 
    }
];

async function buscarCapa(item) {
    const termo = item.buscaCapa || item.titulo;
    try {
        const resp = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(termo)}&language=pt-BR`);
        const data = await resp.json();
        const path = data.results?.[0]?.poster_path || data.results?.[0]?.backdrop_path;
        return path ? `https://image.tmdb.org/t/p/w500${path}` : 'V.png';
    } catch (e) { return 'V.png'; }
}

function darPlay(url, titulo) {
    const iframe = document.getElementById('voltti-iframe');
    const placeholder = document.getElementById('placeholder');
    document.getElementById('video-title').innerText = "Assistindo: " + titulo;
    placeholder.style.display = 'none';
    iframe.style.display = 'block';
    // Se for link do Drive, enviamos direto, se for motor, usamos seu player
    const finalUrl = url.includes('drive.google') ? url : "https://player.voltti.cloud/?v=" + encodeURIComponent(url);
    iframe.src = finalUrl;
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
            const capa = await buscarCapa(item);
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<img src="${capa}"><p>${item.titulo}</p>`;
            card.onclick = () => darPlay(item.videoID, item.titulo);
            container.appendChild(card);
        }
    }
}

function filtrar(cat) {
    if(cat === 'todos') renderizar(conteudos);
    else renderizar(conteudos.filter(i => i.tipo === cat));
}

window.onload = () => renderizar(conteudos);
