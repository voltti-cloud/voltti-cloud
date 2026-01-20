const DB = {
    filmes: [{ t: "A Culpa é das Estrelas", c: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", u: "http://motor.voltti.cloud/stream/6?hash=9555df" }],
    series: []
};

function render() {
    const movies = document.getElementById('list-movies');
    if(movies) movies.innerHTML = DB.filmes.map(i => `<div class="movie-card" style="background-image: url('${i.c}')" onclick="playMovie('${i.t}', '${i.u}')"></div>`).join('');
}

function playMovie(title, url) {
    const section = document.getElementById('player-section');
    const target = document.getElementById('video-target');
    const header = document.getElementById('main-header');

    document.getElementById('v-title').innerText = title;
    
    // Injeta o vídeo SEM FREIO e SEM ERRO
    target.innerHTML = `<video id="v-play" controls autoplay playsinline><source src="${url}" type="video/mp4"></video>`;
    
    section.style.display = 'block';
    header.style.display = 'none';
    
    const v = document.getElementById('v-play');
    v.volume = 1.0;
    
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function closePlayer() {
    document.getElementById('player-section').style.display = 'none';
    document.getElementById('main-header').style.display = 'flex';
    document.getElementById('video-target').innerHTML = '';
}
window.onload = render;
