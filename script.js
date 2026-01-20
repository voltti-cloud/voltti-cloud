const DB = {
    filmes: [
        { 
            t: "A Culpa é das Estrelas", 
            i: "https://lh3.googleusercontent.com/u/0/d/1xkA2xCy76G8P0O7vEt4lBkeU9DklDak1", 
            u: "https://motor.voltti.cloud/stream/7?hash=52d003" 
        },
        { 
            t: "Uma Noite no Museu 1", 
            i: "https://lh3.googleusercontent.com/u/0/d/12DPh9Ck0vDK0y-wsghKgO0V5ALOjPERz", 
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
    
    grid.innerHTML = data.map(f => `
        <div class="card" 
             style="background-image: url('${f.i}'); background-color: #111; position: relative; background-size: cover; background-position: center;" 
             onclick="play('${f.t}', '${f.u}')">
             <div style="position: absolute; bottom: 0; background: rgba(0,0,0,0.8); width: 100%; padding: 8px; font-size: 11px; text-align: center; border-radius: 0 0 8px 8px;">
                ${f.t}
             </div>
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
