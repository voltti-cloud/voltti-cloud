const DB = {
    filmes: [
        { 
            t: "A Culpa é das Estrelas", 
            i: "capa1.webp", 
            u: "https://motor.voltti.cloud/stream/7?hash=52d003",
            d: "Dois adolescentes pacientes de câncer se conhecem em um grupo de apoio."
        },
        { 
            t: "Uma Noite no Museu 1", 
            i: "capa2.webp", 
            u: "https://motor.voltti.cloud/stream/8?hash=b328e3",
            d: "Um guarda noturno descobre que as exibições ganham vida à noite."
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
    
    grid.innerHTML = data.map(f => `
        <div class="card" 
             style="background-image: url('${f.i}');" 
             onclick="play('${f.t}', '${f.u}')">
             <div class="card-info">
                ${f.t}
             </div>
        </div>
    `).join('');
}

function play(title, url) {
    document.getElementById('playing-title').innerText = title;
    document.getElementById('player-wrap').innerHTML = `
        <video controls autoplay playsinline style="width:100%; border-radius: 8px;">
            <source src="${url}" type="video/mp4">
        </video>`;
    document.getElementById('video-overlay').style.display = 'flex';
}

function playDefault() {
    const principal = DB.filmes[0];
    play(principal.t, principal.u);
}

function closeVid() {
    document.getElementById('player-wrap').innerHTML = '';
    document.getElementById('video-overlay').style.display = 'none';
}

function filter(cat) {
    if(document.getElementById('side-menu').classList.contains('active')) toggleMenu();
    render(cat);
}

window.onload = () => render();
