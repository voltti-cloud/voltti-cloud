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

    // --- ROMANCE (SAGA CREPÚSCULO) ---
    { titulo: "A Saga Crepúsculo", videoID: "https://motor.voltti.cloud/stream/18?hash=c08e43", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Lua Nova", videoID: "https://motor.voltti.cloud/stream/19?hash=32c817", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Eclipse", videoID: "https://motor.voltti.cloud/stream/20?hash=4d8896", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Amanhecer - Parte 1", videoID: "https://motor.voltti.cloud/stream/22?hash=d297e2", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Amanhecer - Parte 2", videoID: "https://motor.voltti.cloud/stream/21?hash=a7a7fc", tipo: "filme", genero: "Romance" },
    { titulo: "A Cinco Passos de Você", videoID: "https://motor.voltti.cloud/stream/12?hash=1e921d", tipo: "filme", genero: "Romance" },
    { titulo: "10 Coisas que Eu Odeio em Você", videoID: "https://motor.voltti.cloud/stream/40?hash=b10ea8", tipo: "filme", genero: "Romance" },

    // --- AÇÃO / GUERRA ---
    { titulo: "Velozes e Furiosos", videoID: "https://motor.voltti.cloud/stream/57?hash=b3eb50", tipo: "filme", genero: "Ação" },
    { titulo: "Tanque de Guerra", videoID: "https://motor.voltti.cloud/stream/74?hash=e15450", tipo: "filme", genero: "Guerra" },
    { titulo: "Corações de Ferro", videoID: "https://motor.voltti.cloud/stream/74?hash=e15450", tipo: "filme", genero: "Guerra" },
    { titulo: "Cão de Briga", videoID: "https://motor.voltti.cloud/stream/48?hash=177e49", tipo: "filme", genero: "Ação" },
    { titulo: "Missão: Impossível - Acerto de Contas", videoID: "https://motor.voltti.cloud/stream/54?hash=5d6fd9", tipo: "filme", genero: "Ação" },
    { titulo: "Boca de Fumo", videoID: "https://motor.voltti.cloud/stream/59?hash=c83fc7", tipo: "filme", genero: "Ação" },
    { titulo: "Vingança Brutal", videoID: "https://motor.voltti.cloud/stream/65?hash=7738f9", tipo: "filme", genero: "Ação" },
    { titulo: "Treinamento Brutal", videoID: "https://motor.voltti.cloud/stream/67?hash=0f147d", tipo: "filme", genero: "Ação" },
    { titulo: "Bailarina: Do Universo de John Wick", videoID: "https://motor.voltti.cloud/stream/63?hash=7172a3", tipo: "filme", genero: "Ação" },
    { titulo: "John Wick 3: Parabellum", videoID: "https://motor.voltti.cloud/stream/66?hash=0fde0a", tipo: "filme", genero: "Ação" },
    { titulo: "Transformers", videoID: "https://motor.voltti.cloud/stream/73?hash=9be088", tipo: "filme", genero: "Ação" },

    // --- FICÇÃO ---
    { titulo: "Avatar", videoID: "https://motor.voltti.cloud/stream/46?hash=dc96d7", tipo: "filme", genero: "Ficção" },
    { titulo: "Avatar: O Caminho da Água", videoID: "https://motor.voltti.cloud/stream/34?hash=19f4de", tipo: "filme", genero: "Ficção" },
    { titulo: "Círculo de Fogo", videoID: "https://motor.voltti.cloud/stream/9?hash=a51334", tipo: "filme", genero: "Ficção" },
    { titulo: "Círculo de Fogo: A Revolta", videoID: "https://motor.voltti.cloud/stream/10?hash=3ca7e5", tipo: "filme", genero: "Ficção" },
    { titulo: "Jogos Vorazes", videoID: "https://motor.voltti.cloud/stream/28?hash=837065", tipo: "filme", genero: "Ficção" },
    { titulo: "Jogos Vorazes: Em Chamas", videoID: "https://motor.voltti.cloud/stream/29?hash=84123f", tipo: "filme", genero: "Ficção" },
    { titulo: "Jogos Vorazes: A Esperança - Parte 1", videoID: "https://motor.voltti.cloud/stream/31?hash=f268cb", tipo: "filme", genero: "Ficção" },
    { titulo: "Jogos Vorazes: A Esperança - Parte 2", videoID: "https://motor.voltti.cloud/stream/32?hash=2450d5", tipo: "filme", genero: "Ficção" },
    { titulo: "A Chegada", videoID: "https://motor.voltti.cloud/stream/37?hash=83485d", tipo: "filme", genero: "Ficção" },
    { titulo: "Percy Jackson e o Ladrão de Raios", videoID: "https://motor.voltti.cloud/stream/26?hash=962375", tipo: "filme", genero: "Ficção" },
    { titulo: "Tron: Ares", videoID: "https://motor.voltti.cloud/stream/72?hash=0548f8", tipo: "filme", genero: "Ficção" },

    // --- TERROR ---
    { titulo: "Five Nights at Freddy's 2", videoID: "https://motor.voltti.cloud/stream/70?hash=7c66b9", tipo: "filme", genero: "Terror" },
    { titulo: "A Morte Pede Carona", videoID: "https://motor.voltti.cloud/stream/50?hash=a8c4d8", tipo: "filme", genero: "Terror" },
    { titulo: "O Massacre da Serra Elétrica", videoID: "https://motor.voltti.cloud/stream/70?hash=7c66b9", tipo: "filme", genero: "Terror" },
    { titulo: "Verdade ou Desafio", videoID: "https://motor.voltti.cloud/stream/35?hash=b8b917", tipo: "filme", genero: "Terror" },
    { titulo: "Resident Evil 2: Apocalipse", videoID: "https://motor.voltti.cloud/stream/51?hash=2b0cd8", tipo: "filme", genero: "Terror" },
    { titulo: "Doce Vingança", videoID: "https://motor.voltti.cloud/stream/38?hash=0610c0", tipo: "filme", genero: "Terror" },
    { titulo: "Temporada de Sangue", videoID: "https://motor.voltti.cloud/stream/68?hash=231b9f", tipo: "filme", genero: "Terror" },

    // --- DRAMA / COMÉDIA ---
    { titulo: "O Menino do Pijama Listrado", videoID: "https://motor.voltti.cloud/stream/43?hash=ce7537", tipo: "filme", genero: "Drama" },
    { titulo: "Oppenheimer", videoID: "https://motor.voltti.cloud/stream/56?hash=611132", tipo: "filme", genero: "Drama" },
    { titulo: "As Branquelas", videoID: "https://motor.voltti.cloud/stream/53?hash=13403f", tipo: "filme", genero: "Comédia" },
    { titulo: "Planos em Família 2", videoID: "https://motor.voltti.cloud/stream/71?hash=d2a5b1", tipo: "filme", genero: "Comédia" },
    { titulo: "Dinheiro Suspeito", videoID: "https://motor.voltti.cloud/stream/64?hash=0577c6", tipo: "filme", genero: "Suspense" },
    { titulo: "Seita Virtual", videoID: "https://motor.voltti.cloud/stream/69?hash=89b828", tipo: "filme", genero: "Suspense" }
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
            card.onclick = () => darPlay(item.videoID, item.titulo);
            container.appendChild(card);
        }
    }
}

function darPlay(url, titulo) {
    const video = document.getElementById('main-player');
    const source = document.getElementById('video-source');
    const placeholder = document.getElementById('placeholder');
    document.getElementById('video-title').innerText = "Assistindo: " + titulo;
    placeholder.style.display = 'none';
    video.style.display = 'block';
    source.src = url;
    video.load();
    video.play();
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function filtrar(tipo) {
    const filtrados = tipo === 'todos' ? conteudos : conteudos.filter(c => c.tipo === tipo);
    renderizar(filtrados);
}

window.onload = () => renderizar(conteudos);
