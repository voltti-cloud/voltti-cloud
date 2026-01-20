const DB = {
    filmes: [
        { t: "A Culpa é das Estrelas", c: "https://image.tmdb.org/t/p/w300/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", u: "https://motor.voltti.cloud/stream/7?hash=52d003" },
        { t: "Uma Noite no Museu", c: "https://image.tmdb.org/t/p/w300/v9Qp8A058R5R0oP0vLpA6IunY2R.jpg", u: "https://motor.voltti.cloud/stream/8?hash=b328e3" }
    ],
    series: [],
    doramas: []
};

function render(category) {
    const grid = document.getElementById('grid-content');
    const items = DB[category] || [];
    
    grid.innerHTML = items.map(item => `
        <div class="movie-card" style="background-image: url('${item.c}')" onclick="openVideo('${item.t}', '${item.u}')"></div>
    `).join('');
}

function openVideo(title, url) {
    document.getElementById('player-title').innerText = title;
    document.getElementById('video-wrapper').innerHTML = `
        <video controls autoplay playsinline>
            <source src="${url}" type="video/mp4">
        </video>`;
    document.getElementById('player-view').style.display = 'flex';
}

function closePlayer() {
    document.getElementById('video-wrapper').innerHTML = '';
    document.getElementById('player-view').style.display = 'none';
}

function changeTab(cat, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render(cat);
}

window.onload = () => render('filmes');
