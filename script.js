const API_KEY = '014f3cfb4ad4f513360cfdf57f0f30c0';

const conteudos = [
    // MARVEL
    { titulo: "Homem-Aranha", videoID: "https://motor.voltti.cloud/stream/14?hash=b15349", tipo: "filme", genero: "Marvel" },
    { titulo: "The Avengers: Os Vingadores", videoID: "https://motor.voltti.cloud/stream/55?hash=271e64", tipo: "filme", genero: "Marvel" },
    { titulo: "Deadpool & Wolverine", videoID: "https://motor.voltti.cloud/stream/60?hash=3334f1", tipo: "filme", genero: "Marvel" },
    // DC
    { titulo: "The Batman", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "DC" },
    { titulo: "Coringa", videoID: "https://motor.voltti.cloud/stream/62?hash=496cb3", tipo: "filme", genero: "DC" },
    // GUERRA
    { titulo: "Tanque de Guerra", videoID: "https://motor.voltti.cloud/stream/116?hash=d3e098", tipo: "filme", genero: "Guerra" },
    { titulo: "Corações de Ferro", videoID: "https://motor.voltti.cloud/stream/74?hash=e15450", tipo: "filme", genero: "Guerra" },
    // ADICIONE OS OUTROS 43 FILMES SEGUINDO O PADRÃO ACIMA
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
            
            // A MÁGICA ACONTECE AQUI:
            card.onclick = () => {
                // Monta a URL do seu player oficial passando o vídeo como parâmetro
                const playerOficial = "https://voltti-cloud.github.io/voltti-player/?v=" + encodeURIComponent(item.videoID);
                
                // No APK, isso abrirá o seu player customizado sem sair do app
                window.location.href = playerOficial;
            };
            
            container.appendChild(card);
        }
    }
}

function filtrar(tipo) {
    const filtrados = tipo === 'todos' ? conteudos : conteudos.filter(c => c.tipo === tipo);
    renderizar(filtrados);
}

window.onload = () => renderizar(conteudos);
