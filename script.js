// Função para redirecionar para o Bot do Telegram
document.querySelector('.btn-play').addEventListener('click', () => {
    window.location.href = 'https://t.me/seu_bot_token'; 
    // Depois vamos ajustar o link acima para o seu bot real
});

// Registro do Service Worker para o PWA (Instalação no Celular)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(reg => {
            console.log('VOLTTI: Service Worker registrado!');
        }).catch(err => {
            console.log('VOLTTI: Erro no Service Worker', err);
        });
    });
}
