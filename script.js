const API_KEY = '014f3cfb4ad4f513360cfdf57f0f30c0';

const conteudos = [
    // --- LISTA COMPLETA E ORGANIZADA ---
    { titulo: "A Saga Crepúsculo", videoID: "https://motor.voltti.cloud/stream/18?hash=c08e43", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Lua Nova", videoID: "https://motor.voltti.cloud/stream/19?hash=32c817", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Eclipse", videoID: "https://motor.voltti.cloud/stream/20?hash=4d8896", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Amanhecer - Parte 1", videoID: "https://motor.voltti.cloud/stream/22?hash=d297e2", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Amanhecer - Parte 2", videoID: "https://motor.voltti.cloud/stream/21?hash=a7a7fc", tipo: "filme", genero: "Romance" },
    { titulo: "Velozes & Furiosos", videoID: "https://motor.voltti.cloud/stream/57?hash=b3eb50", tipo: "filme", genero: "Ação" },
    { titulo: "The Batman", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "Ação" },
    { titulo: "Boca de Fumo", videoID: "https://motor.voltti.cloud/stream/59?hash=c83fc7", tipo: "filme", genero: "Ação" },
    { titulo: "Deadpool & Wolverine", videoID: "https://motor.voltti.cloud/stream/60?hash=3334f1", tipo: "filme", genero: "Ação" },
    { titulo: "Vingança Brutal", videoID: "https://motor.voltti.cloud/stream/65?hash=7738f9", tipo: "filme", genero: "Ação" },
    { titulo: "A Morte Pede Carona", videoID: "https://motor.voltti.cloud/stream/50?hash=a8c4d8", tipo: "filme", genero: "Terror" },
    { titulo: "Five Nights at Freddy's 2", videoID: "https://motor.voltti.cloud/stream/70?hash=7c66b9", tipo: "filme", genero: "Terror" },
    { titulo: "Oppenheimer", videoID: "https://motor.voltti.cloud/stream/56?hash=611132", tipo: "filme", genero: "Drama" },
    { titulo: "Coringa", videoID: "https://motor.voltti.cloud/stream/62?hash=496cb3", tipo: "filme", genero: "Drama" }
    // Adicione os links da planilha conforme o padrão acima
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
    // Remove duplicados visuais garantindo IDs únicos se necessário
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
    document.getElementById('video-title').innerText = "Carregando Player: " + titulo;
    
    placeholder.style.display = 'none';
    player.style.display = 'block';
    
    // CORREÇÃO PARA O APK: Alguns links precisam de refresh no iframe
    player.src = ""; 
    setTimeout(() => {
        player.src = url;
    }, 100);

    window.scrollTo({top: 0, behavior: 'smooth'});
}

window.onload = () => renderizar(conteudos);
