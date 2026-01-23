const API_KEY = '014f3cfb4ad4f513360cfdf57f0f30c0';

const conteudos = [
    // --- MARVEL ---
    { titulo: "Homem-Aranha", videoID: "https://motor.voltti.cloud/stream/14?hash=b15349", tipo: "filme", genero: "Marvel" },
    { titulo: "Homem-Aranha 2", videoID: "https://motor.voltti.cloud/stream/15?hash=43e939", tipo: "filme", genero: "Marvel" },
    { titulo: "Homem-Aranha 3", videoID: "https://motor.voltti.cloud/stream/16?hash=0a10b3", tipo: "filme", genero: "Marvel" },
    { titulo: "The Avengers: Os Vingadores", videoID: "https://motor.voltti.cloud/stream/55?hash=271e64", tipo: "filme", genero: "Marvel" },
    { titulo: "Guardiões da Galáxia", videoID: "https://motor.voltti.cloud/stream/39?hash=1b295a", tipo: "filme", genero: "Marvel" },
    { titulo: "Deadpool & Wolverine", videoID: "https://motor.voltti.cloud/stream/60?hash=3334f1", tipo: "filme", genero: "Marvel" },

    // --- DC ---
    { titulo: "The Batman", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "DC" },
    { titulo: "Batman: O Cavaleiro das Trevas", videoID: "https://motor.voltti.cloud/stream/61?hash=8aabb1", tipo: "filme", genero: "DC" },
    { titulo: "Coringa", videoID: "https://motor.voltti.cloud/stream/62?hash=496cb3", tipo: "filme", genero: "DC" },

    // --- GUERRA ---
    { titulo: "Tanque de Guerra", videoID: "https://motor.voltti.cloud/stream/116?hash=d3e098", tipo: "filme", genero: "Guerra" },
    { titulo: "Corações de Ferro", videoID: "https://motor.voltti.cloud/stream/74?hash=e15450", tipo: "filme", genero: "Guerra" },

    // --- ROMANCE ---
    { titulo: "A Saga Crepúsculo", videoID: "https://motor.voltti.cloud/stream/18?hash=c08e43", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Lua Nova", videoID: "https://motor.voltti.cloud/stream/19?hash=32c817", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Eclipse", videoID: "https://motor.voltti.cloud/stream/20?hash=4d8896", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Amanhecer - Parte 1", videoID: "https://motor.voltti.cloud/stream/22?hash=d297e2", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Amanhecer - Parte 2", videoID: "https://motor.voltti.cloud/stream/21?hash=a7a7fc", tipo: "filme", genero: "Romance" },

    // --- TERROR ---
    { titulo: "A Morte Pede Carona", videoID: "https://motor.voltti.cloud/stream/50?hash=a8c4d8", tipo: "filme", genero: "Terror" },
    { titulo: "Five Nights at Freddy's 2", videoID: "https://motor.voltti.cloud/stream/70?hash=7c66b9", tipo: "filme", genero: "Terror" }
    // Adicione os outros conforme o padrão
];

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
            
            card.onclick = () => {
                // Em vez de carregar no topo, vamos forçar o link a abrir de forma que o APK não bugue
                window.location.href = item.videoID;
            };
            container.appendChild(card);
        }
    }
}

window.onload = () => renderizar(conteudos);
