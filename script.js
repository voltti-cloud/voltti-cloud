function openPlayer(title, url) {
    // Em vez de usar o player, vamos tentar abrir o link direto em uma nova janela 
    // apenas para confirmar se o servidor libera o acesso vindo do site.
    const win = window.open(url, '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Por favor, libere os pop-ups para testar o carregamento direto.');
    }
}

// Renderização simplificada para teste
function render() {
    const list = document.getElementById('list-movies');
    const filme = { t: "Teste Direto", c: "https://image.tmdb.org/t/p/w500/uDsv9LkwN6EH3SBFQDE3uHJyvY6.jpg", u: "http://motor.voltti.cloud/stream/6?hash=9555df" };
    
    if(list) {
        list.innerHTML = `<div class="movie-card" style="background-image: url('${filme.c}')" onclick="openPlayer('${filme.t}', '${filme.u}')"></div>`;
    }
}
window.onload = render;
