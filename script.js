const DATA = {
    filmes: [
        { t: "A Culpa é das Estrelas", c: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", u: "https://motor.voltti.cloud/stream/7?hash=52d003" },
        { t: "Uma Noite no Museu", c: "https://image.tmdb.org/t/p/w500/v9Qp8A058R5R0oP0vLpA6IunY2R.jpg", u: "https://motor.voltti.cloud/stream/8?hash=b328e3" }
    ],
    series: [],
    doramas: []
};

function render(cat = 'filmes') {
    const grid = document.getElementById('grid-content');
    grid.innerHTML = DATA[cat].map(i => `
        <div class="card" onclick="play('${i.t}', '${i.u}')">
            <img src="${i.c}" alt="${i.t}">
            <div class="card-info"><div>${i.t}</div></div>
        </div>
    `).join('');
}

function play(title, url) {
    const section = document.getElementById('player-section');
    const dest = document.getElementById('video-dest');
    document.getElementById('now-playing').innerText = title;
    
    section.style.display = 'block';
    dest.innerHTML = `
        <video id="v-main" controls autoplay>
            <source src="${url}" type="video/mp4">
        </video>`;
    
    window.scrollTo(0, 0);
}

function closePlayer() {
    document.getElementById('player-section').style.display = 'none';
    document.getElementById('video-dest').innerHTML = '';
}

function showCategory(cat) {
    document.querySelectorAll('.item').forEach(i => i.classList.remove('active'));
    event.currentTarget.classList.add('active');
    document.getElementById('category-title').innerHTML = cat.charAt(0).toUpperCase() + cat.slice(1) + ' <span>Premium</span>';
    render(cat);
}

window.onload = () => render();
