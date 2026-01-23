const API_KEY = '014f3cfb4ad4f513360cfdf57f0f30c0';

const conteudos = [
    // --- ROMANCE ---
    { titulo: "A Saga Crepúsculo", videoID: "https://motor.voltti.cloud/stream/18?hash=c08e43", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Lua Nova", videoID: "https://motor.voltti.cloud/stream/19?hash=32c817", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Eclipse", videoID: "https://motor.voltti.cloud/stream/20?hash=4d8896", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Amanhecer - Parte 1", videoID: "https://motor.voltti.cloud/stream/22?hash=d297e2", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Amanhecer - Parte 2", videoID: "https://motor.voltti.cloud/stream/21?hash=a7a7fc", tipo: "filme", genero: "Romance" },
    { titulo: "A Cinco Passos de Você", videoID: "https://motor.voltti.cloud/stream/12?hash=1e921d", tipo: "filme", genero: "Romance" },
    { titulo: "10 Coisas que Eu Odeio em Você", videoID: "https://motor.voltti.cloud/stream/40?hash=b10ea8", tipo: "filme", genero: "Romance" },
    // --- AÇÃO ---
    { titulo: "Velozes & Furiosos", videoID: "https://motor.voltti.cloud/stream/57?hash=b3eb50", tipo: "filme", genero: "Ação" },
    { titulo: "The Batman", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "Ação" },
    { titulo: "Boca de Fumo", videoID: "https://motor.voltti.cloud/stream/59?hash=c83fc7", tipo: "filme", genero: "Ação" },
    { titulo: "Deadpool & Wolverine", videoID: "https://motor.voltti.cloud/stream/60?hash=3334f1", tipo: "filme", genero: "Ação" },
    { titulo: "Batman: O Cavaleiro das Trevas", videoID: "https://motor.voltti.cloud/stream/61?hash=8aabb1", tipo: "filme", genero: "Ação" },
    { titulo: "Vingança Brutal", videoID: "https://motor.voltti.cloud/stream/65?hash=7738f9", tipo: "filme", genero: "Ação" },
    { titulo: "Treinamento Brutal", videoID: "https://motor.voltti.cloud/stream/67?hash=0f147d", tipo: "filme", genero: "Ação" },
    // --- TERROR ---
    { titulo: "A Morte Pede Carona", videoID: "https://motor.voltti.cloud/stream/50?hash=a8c4d8", tipo: "filme", genero: "Terror" },
    { titulo: "O Massacre da Serra Elétrica", videoID: "https://motor.voltti.cloud/stream/70?hash=7c66b9", tipo: "filme", genero: "Terror" },
    { titulo: "Five Nights at Freddy's 2", videoID: "https://motor.voltti.cloud/stream/70?hash=7c66b9", tipo: "filme", genero: "Terror" },
    // ... Aqui você pode continuar adicionando os links da sua planilha seguindo o padrão
];

async function buscarCapa(titulo) {
    try {
        const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(titulo)}&language=pt-BR`);
        const data = await resp.json();
        return data.results && data.results[0] ? `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}` : 'https://via.placeholder.com/500x750?text=VOLTTI';
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

function darPlay(url, titulo) {
    const player = document.getElementById('main-player');
    const placeholder = document.getElementById('placeholder');
    document.getElementById('video-title').innerText = "Assitindo agora: " + titulo;
    placeholder.style.display = 'none';
    player.style.display = 'block';
    player.src = url;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function filtrar(tipo) {
    const filtrados = tipo === 'todos' ? conteudos : conteudos.filter(c => c.tipo === tipo);
    renderizar(filtrados);
}

window.onload = () => renderizar(conteudos);
