const DB = {
    filmes: [
        { 
            t: "A Culpa é das Estrelas", 
            i: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", 
            u: "https://motor.voltti.cloud/stream/7?hash=52d003" 
        },
        { 
            t: "Uma Noite no Museu", 
            i: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v9Qp8A058R5R0oP0vLpA6IunY2R.jpg", 
            u: "https://motor.voltti.cloud/stream/8?hash=b328e3" 
        }
    ],
    series: [], doramas: []
};

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

function render(cat = 'filmes') {
    const grid = document.getElementById('movie-grid');
    const data = DB[cat] || [];
    document.getElementById('cat-title').innerText = cat;
    
    // Aqui forçamos a imagem a aparecer ou mostrar um erro no console
    grid.innerHTML = data.map(f => `
        <div class="card" 
             style="background-image: url('${f.i}'); background-color: #222;" 
             onclick="play('${f.t}', '${f.u}')">
        </div>
    `).join('');
}

function play(title, url) {
    document.getElementById('playing-title').innerText = title;
    document.getElementById('player-wrap').innerHTML = `
        <video controls autoplay playsinline style="width:100%;">
            <source src="${url}" type="video/mp4">
        </video>`;
    document.getElementById('video-overlay').style.display = 'flex';
}

function closeVid() {
    document.getElementById('player-wrap').innerHTML = '';
    document.getElementById('video-overlay').style.display = 'none';
}

function filter(cat) {
    toggleMenu();
    render(cat);
}

window.onload = () => render();
