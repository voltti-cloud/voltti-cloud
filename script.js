const API_KEY = '014f3cfb4ad4f513360cfdf57f0f30c0';

const conteudos = [
    // MARVEL
    { titulo: "Homem-Aranha", videoID: "https://motor.voltti.cloud/stream/14?hash=b15349", tipo: "filme", genero: "Marvel" },
    { titulo: "The Avengers: Os Vingadores", videoID: "https://motor.voltti.cloud/stream/55?hash=271e64", tipo: "filme", genero: "Marvel" },
    { titulo: "Deadpool & Wolverine", videoID: "https://motor.voltti.cloud/stream/60?hash=3334f1", tipo: "filme", genero: "Marvel" },
    // DC
    { titulo: "The Batman", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", tipo: "filme", genero: "DC" },
    { titulo: "Batman: O Cavaleiro das Trevas", videoID: "https://motor.voltti.cloud/stream/61?hash=8aabb1", tipo: "filme", genero: "DC" },
    { titulo: "Coringa", videoID: "https://motor.voltti.cloud/stream/62?hash=496cb3", tipo: "filme", genero: "DC" },
    // GUERRA
    { titulo: "Tanque de Guerra", videoID: "https://motor.voltti.cloud/stream/116?hash=d3e098", tipo: "filme", genero: "Guerra" },
    { titulo: "Corações de Ferro", videoID: "https://motor.voltti.cloud/stream/74?hash=e15450", tipo: "filme", genero: "Guerra" },
    // ROMANCE
    { titulo: "A Saga Crepúsculo", videoID: "https://motor.voltti.cloud/stream/18?hash=c08e43", tipo: "filme", genero: "Romance" },
    { titulo: "A Saga Crepúsculo: Lua Nova", videoID: "https://motor.voltti.cloud/stream/19?hash=32c817", tipo: "filme", genero: "Romance" }
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
        const div = document.createElement('div');
        div.innerHTML = `<h3 style="color:white; border-left:4px solid #E60000; padding-left:10px; margin:20px 10px;">${gen}</h3><div id="row-${gen}" style="display:flex; overflow-x:auto; gap:10px; padding:10px;"></div>`;
        grid.appendChild(div);
        
        const container = document.getElementById(`row-${gen}`);
        const itens = lista.filter(i => i.genero === gen);

        for (const item of itens) {
            const capa = await buscarCapa(item.titulo);
            const card = document.createElement('div');
            card.style.cursor = "pointer";
            card.innerHTML = `<img src="${capa}" style="width:120px; height:180px; border-radius:8px; border:1px solid #222;"><p style="color:white; font-size:11px; text-align:center; margin-top:5px; width:120px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.titulo}</p>`;
            
            card.onclick = () => {
                // Forçamos a URL para o player.html com o link do vídeo como parâmetro
                const destino = "player.html?v=" + encodeURIComponent(item.videoID);
                window.location.assign(destino); 
            };
            container.appendChild(card);
        }
    }
}

window.onload = () => renderizar(conteudos);
