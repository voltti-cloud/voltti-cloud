const API_KEY = '014f3cfb4ad4f513360cfdf57f0f30c0';

const conteudos = [
    { titulo: "Homem-Aranha", videoID: "https://motor.voltti.cloud/stream/14?hash=b15349", tipo: "filme", genero: "Marvel" },
    { titulo: "A Saga Crepúsculo: Lua Nova", videoID: "https://motor.voltti.cloud/stream/19?hash=32c817", tipo: "filme", genero: "Romance" },
    { titulo: "Tanque de Guerra", videoID: "https://motor.voltti.cloud/stream/116?hash=d3e098", tipo: "filme", genero: "Guerra" }
    // Adicione os outros 47 aqui seguindo o mesmo padrão
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
            card.innerHTML = `<img src="${capa}" style="width:120px; height:180px; border-radius:8px; border:1px solid #222;"><p style="color:white; font-size:12px; text-align:center;">${item.titulo}</p>`;
            card.onclick = () => {
                // Abre o player oficial passando o link do vídeo
                window.location.href = "player.html?v=" + encodeURIComponent(item.videoID);
            };
            container.appendChild(card);
        }
    }
}
window.onload = () => renderizar(conteudos);
