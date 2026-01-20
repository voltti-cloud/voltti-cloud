const DB = {
    filmes: [
        { t: "A Culpa é das Estrelas", c: "https://image.tmdb.org/t/p/w300/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", u: "https://motor.voltti.cloud/stream/7?hash=52d003" },
        { t: "Uma Noite no Museu", c: "https://image.tmdb.org/t/p/w300/v9Qp8A058R5R0oP0vLpA6IunY2R.jpg", u: "https://motor.voltti.cloud/stream/8?hash=b328e3" }
    ],
    series: [], doramas: []
};

function render(cat) {
    const g = document.getElementById('grid');
    const data = DB[cat] || [];
    document.getElementById('view-title').innerText = cat;
    g.innerHTML = data.length ? data.map(i => `<div class="card" style="background-image:url('${i.c}')" onclick="play('${i.t}','${i.u}')"></div>`).join('') : '<p style="color:#333;grid-column:1/4;text-align:center;margin-top:50px;">Em breve...</p>';
}

function play(t, u) {
    document.getElementById('p-title').innerText = t;
    document.getElementById('p-cont').innerHTML = `<video controls autoplay playsinline><source src="${u}" type="video/mp4"></video>`;
    document.getElementById('player').style.display = 'flex';
}

function closeP() {
    document.getElementById('p-cont').innerHTML = '';
    document.getElementById('player').style.display = 'none';
}

function tab(cat, el) {
    document.querySelectorAll('.tab-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    render(cat);
}

window.onload = () => render('filmes');
