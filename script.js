function converterDrive(url) {
    if (!url || !url.includes('drive.google.com')) return url;
    const idMatch = url.match(/\/d\/(.+?)\//) || url.match(/id=(.+?)(&|$)/);
    return idMatch ? "https://lh3.googleusercontent.com/u/0/d/" + idMatch[1] : url;
}

const conteudos = [
    // --- FILMES ---
    { titulo: "CREPUSCULO", videoID: "https://motor.voltti.cloud/stream/18?hash=c08e43", capa: "https://drive.google.com/file/d/1sN8mKuiCLvrrtZjIRvd6YaHT5e6Nud5d/view?usp=sharing", tipo: "filme", genero: "Romance" },
    { titulo: "LUA NOVA", videoID: "https://motor.voltti.cloud/stream/19?hash=32c817", capa: "https://drive.google.com/file/d/1zb3YG8fhIEKUqQ7hMLGqaYeBSpBKvlem/view?usp=drive_link", tipo: "filme", genero: "Romance" },
    { titulo: "ECLIPSE", videoID: "https://motor.voltti.cloud/stream/20?hash=4d8896", capa: "https://drive.google.com/file/d/1oykNfvBEW02UNFw6cvtP9_QdHrbSdJ79/view?usp=sharing", tipo: "filme", genero: "Romance" },
    { titulo: "AMANHECER PARTE 1", videoID: "https://motor.voltti.cloud/stream/22?hash=d297e2", capa: "https://drive.google.com/file/d/1yp1IVIP_IfgNGeu-fbfNMt3ICp9-_nlJ/view?usp=sharing", tipo: "filme", genero: "Romance" },
    { titulo: "AMANHACER PARTE 2", videoID: "https://motor.voltti.cloud/stream/21?hash=a7a7fc", capa: "https://drive.google.com/file/d/18Pdq7S4yt8AImHvWIkBOsWvz4iuiJj3v/view?usp=sharing", tipo: "filme", genero: "Romance" },
    { titulo: "HOMEM ARANHA 1", videoID: "https://motor.voltti.cloud/stream/14?hash=b15349", capa: "https://drive.google.com/file/d/191nuU2HoxGMVWzuAsZkY9hTy87SaEYgs/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "HOMEM ARANHA 2", videoID: "https://motor.voltti.cloud/stream/15?hash=43e939", capa: "https://drive.google.com/file/d/1GDTKmHOlpwoiQF1slMlW0zaXsseKJ36y/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "HOMEM ARANHA 3", videoID: "https://motor.voltti.cloud/stream/16?hash=0a10b3", capa: "https://drive.google.com/file/d/1FAxXXJNz-Fgbw5KkqJpggnuKe69O1es6/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "CIRCULO DE FOGO", videoID: "https://motor.voltti.cloud/stream/9?hash=a51334", capa: "https://drive.google.com/file/d/160R7tKniC7yKz9CGW2uHkLXhGLMrjjYK/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "CIRCULO DE FOGO 2", videoID: "https://motor.voltti.cloud/stream/10?hash=3ca7e5", capa: "https://drive.google.com/file/d/1McMBjbgEZDODU9XkDo2T8uCVvjwhSZNn/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "5 PASSOS DE VOÇE", videoID: "https://motor.voltti.cloud/stream/12?hash=1e921d", capa: "https://drive.google.com/file/d/1hBbYhiIj0ZOA6QavG1EX2CBmS8LPrT-Y/view?usp=sharing", tipo: "filme", genero: "Romance" },
    { titulo: "MENINO DE PIJAMA", videoID: "https://motor.voltti.cloud/stream/43?hash=ce7537", capa: "https://drive.google.com/file/d/1yI6ls8mep7DO5wRH7viBLWmg10_jl2_-/view?usp=sharing", tipo: "filme", genero: "Drama" },
    { titulo: "THE BATMAN", videoID: "https://motor.voltti.cloud/stream/44?hash=24a8f1", capa: "https://drive.google.com/file/d/1pvLqt-_rlV-jRKDBMBV1mgzIsLNJzxN9/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "CAO DE BRIGA", videoID: "https://motor.voltti.cloud/stream/48?hash=177e49", capa: "https://drive.google.com/file/d/1arLPZsCH4m9V1F3r7DjtJA0cNE-hKtGb/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "AVATAR 1", videoID: "https://motor.voltti.cloud/stream/46?hash=dc96d7", capa: "https://drive.google.com/file/d/1sXOIYDSdRJYXlH0qK9SGVCvsyMntZi7e/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "AVATAR 2", videoID: "https://motor.voltti.cloud/stream/34?hash=19f4de", capa: "https://drive.google.com/file/d/11ZDD3iUuOgSvsss6xH6Huqr9PwKBiRf7/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "VERDADE OU DESAFIO", videoID: "https://motor.voltti.cloud/stream/35?hash=b8b917", capa: "https://drive.google.com/file/d/1fDVfWbi902Zp9A566n6-bvWuOyZbfZld/view?usp=sharing", tipo: "filme", genero: "Terror" },
    { titulo: "RESIDENT EVIL 2", videoID: "https://motor.voltti.cloud/stream/51?hash=2b0cd8", capa: "https://drive.google.com/file/d/1N7T-7L1trIpj5tRdDQsBswoU5OXVym0e/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "A MORTE PEDE CARONA", videoID: "https://motor.voltti.cloud/stream/50?hash=a8c4d8", capa: "https://drive.google.com/file/d/1q0u98DhFSprxWVkBalks5lsizMaxRXpM/view?usp=sharing", tipo: "filme", genero: "Terror" },
    { titulo: "GUARDIAO DA GALAXYA 1", videoID: "https://motor.voltti.cloud/stream/39?hash=1b295a", capa: "https://drive.google.com/file/d/1gp1z7k4xjrc_sV7-4VrvBQ7U7ouoT62Y/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "10 COISAS QUE ODEIO", videoID: "https://motor.voltti.cloud/stream/40?hash=b10ea8", capa: "https://drive.google.com/file/d/1_hiMVe5sif4OB1ki9CCIe6njNVWWsgOU/view?usp=sharing", tipo: "filme", genero: "Romance" },
    { titulo: "VINGADORES 1", videoID: "https://motor.voltti.cloud/stream/55?hash=271e64", capa: "https://drive.google.com/file/d/1416-Cz1Ny-M_84BrlwgFGp6vFiMqPII0/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "PERCY JACKSON 1", videoID: "https://motor.voltti.cloud/stream/26?hash=962375", capa: "https://drive.google.com/file/d/18SkyTkCLvg59SXAgpHiDndDjtpm6AJFM/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "AS BRANQUELAS", videoID: "https://motor.voltti.cloud/stream/53?hash=13403f", capa: "https://drive.google.com/file/d/1dLsAGNgommx_FNmQXtLXrLGNLOORTpfY/view?usp=sharing", tipo: "filme", genero: "Comédia" },
    { titulo: "A CHEGADA", videoID: "https://motor.voltti.cloud/stream/37?hash=83485d", capa: "https://drive.google.com/file/d/11mhXvbLSOnqGDja2bUhoKCCRnY9W_eR2/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "JOGOS VORAZES 1", videoID: "https://motor.voltti.cloud/stream/28?hash=837065", capa: "https://drive.google.com/file/d/1rnL_aAUSopdea0fHcxMC-7Tjr2ipu3ta/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "JOGOS VORAZES 2", videoID: "https://motor.voltti.cloud/stream/29?hash=84123f", capa: "https://drive.google.com/file/d/1MQWux0t272eU7zuHestxPia_IwWSzHoX/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "JOGOS VORAZES 3", videoID: "https://motor.voltti.cloud/stream/31?hash=f268cb", capa: "https://drive.google.com/file/d/16n_-NXLq8ZWyeWwqCRMr5kOdEWIPrH9z/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "JOGOS VORAZES 4", videoID: "https://motor.voltti.cloud/stream/32?hash=2450d5", capa: "https://drive.google.com/file/d/1rgQLMQFa9lV8YzX2kQj7uM_NWEM5C9UC/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "DOCE VINGACA 1", videoID: "https://motor.voltti.cloud/stream/38?hash=0610c0", capa: "https://drive.google.com/file/d/1zPKWTRGegzoVj0qKlva8xy03c-rWzyiR/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "MISSAO IMPOSSIVEL", videoID: "https://motor.voltti.cloud/stream/54?hash=5d6fd9", capa: "https://drive.google.com/file/d/1zPKWTRGegzoVj0qKlva8xy03c-rWzyiR/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "VELOZES E FURIOSOS 1", videoID: "https://motor.voltti.cloud/stream/57?hash=b3eb50", capa: "https://drive.google.com/file/d/16gQBDzIzNnPeD41jSdUGbFK1ChiBAjoe/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "Oppenheimer", videoID: "https://motor.voltti.cloud/stream/56?hash=611132", capa: "https://drive.google.com/file/d/16gQBDzIzNnPeD41jSdUGbFK1ChiBAjoe/view?usp=sharing", tipo: "filme", genero: "Drama" },
    { titulo: "BOCA DE FUMO", videoID: "https://motor.voltti.cloud/stream/59?hash=c83fc7", capa: "https://drive.google.com/file/d/1PJ_2CyKB9n_fz0OHkPdiLHbHHGeFTXgd/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "deadpool 3", videoID: "https://motor.voltti.cloud/stream/60?hash=3334f1", capa: "https://drive.google.com/file/d/12BxJHLyCJSWW4F48kk25PSdKK1ioj26J/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "BATMAN TREVAS", videoID: "https://motor.voltti.cloud/stream/61?hash=8aabb1", capa: "https://drive.google.com/file/d/1gO-TM9e2Cqod8oQgkYCmAg7MWQs9lffZ/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "CORINGA 2019", videoID: "https://motor.voltti.cloud/stream/62?hash=496cb3", capa: "https://drive.google.com/file/d/1EXxDLyulMeWCaEtI-owejIPIULo1xhpc/view?usp=sharing", tipo: "filme", genero: "Drama" },
    { titulo: "VINGANÇA BRUTAL", videoID: "https://motor.voltti.cloud/stream/65?hash=7738f9", capa: "https://drive.google.com/file/d/1U8xfUzOlS0eVzBPd3LLvTSydTv8V43Rp/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "DINHEIRO SUSPEITO", videoID: "https://motor.voltti.cloud/stream/64?hash=0577c6", capa: "https://drive.google.com/file/d/1tiA4UBEgJK-xS3tHj39TluTwFjpYuPdT/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "TREINAMENTO BRUTAL", videoID: "https://motor.voltti.cloud/stream/67?hash=0f147d", capa: "https://drive.google.com/file/d/1-_Ia76RMGW4XTkXuMhxMM6BPi0QjySYB/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "FNAF 2", videoID: "https://motor.voltti.cloud/stream/70?hash=7c66b9", capa: "https://drive.google.com/file/d/1o5Je-BwYZPhiNRTwgHrJgWKsPHlc7P3m/view?usp=sharing", tipo: "filme", genero: "Terror" },
    { titulo: "BAILARINA WICK", videoID: "https://motor.voltti.cloud/stream/63?hash=7172a3", capa: "https://drive.google.com/file/d/1eCQGPKBgXBebbqVWiVOfgLcTX3VOmFTT/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "JHON WICHK", videoID: "https://motor.voltti.cloud/stream/66?hash=0fde0a", capa: "https://drive.google.com/file/d/1zVciALQFsVSo7PyRsRIYzTjWIShhnx3W/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "TEMPORADA SANGUE", videoID: "https://motor.voltti.cloud/stream/68?hash=231b9f", capa: "https://drive.google.com/file/d/1J5knt79f34bie1WIDr1TmQXGDIZ3vp8E/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "SEITA VIRTUAL", videoID: "https://motor.voltti.cloud/stream/69?hash=89b828", capa: "https://drive.google.com/file/d/1u_iugMF5mneaGROOrpwjALj42_U6EGGW/view?usp=sharing", tipo: "filme", genero: "Ação" },
    { titulo: "TRON ARES", videoID: "https://motor.voltti.cloud/stream/72?hash=0548f8", capa: "https://drive.google.com/file/d/1WINhmggEQM78k484XSYeQDTx3odLcNkQ/view?usp=sharing", tipo: "filme", genero: "Ficção" },
    { titulo: "PLANOS FAMILIA 2", videoID: "https://motor.voltti.cloud/stream/71?hash=d2a5b1", capa: "https://drive.google.com/file/d/1nVhKcfGjnIC8fPNQGUGaQ-YCTq2rQoOJ/view?usp=sharing", tipo: "filme", genero: "Comédia" },
    { titulo: "TRANSFORMERS 1", videoID: "https://motor.voltti.cloud/stream/73?hash=9be088", capa: "https://drive.google.com/file/d/1NZnFdpGMe6R51I7SUTRHIMaAliaxJ0T-/view?usp=sharing", tipo: "filme", genero: "Ficção" },
    { titulo: "O TANQUE DE GUERRA", videoID: "https://motor.voltti.cloud/stream/74?hash=e15450", capa: "https://drive.google.com/file/d/12u-TsrQspBZO-uHaYG-I462zp8K4us7h/view?usp=sharing", tipo: "filme", genero: "Guerra" },

    // --- SÉRIE (ESTILO VIZER) ---
    { 
        titulo: "LA CASA DE PAPEL", 
        capa: "https://drive.google.com/file/d/1vUGaSGmDSfAsuiedzf6oJI4ELPUSd0o3/view?usp=sharing", 
        tipo: "serie", 
        genero: "Suspense",
        episodios: [
            { ep: "Episódio 01", url: "https://motor.voltti.cloud/stream/75?hash=27f9b1" },
            { ep: "Episódio 02", url: "https://motor.voltti.cloud/stream/76?hash=45c7bb" },
            { ep: "Episódio 03", url: "https://motor.voltti.cloud/stream/77?hash=a65b40" },
            { ep: "Episódio 04", url: "https://motor.voltti.cloud/stream/78?hash=f6fa53" },
            { ep: "Episódio 05", url: "https://motor.voltti.cloud/stream/79?hash=8ff658" },
            { ep: "Episódio 06", url: "https://motor.voltti.cloud/stream/80?hash=aa4b9e" },
            { ep: "Episódio 07", url: "https://motor.voltti.cloud/stream/81?hash=b9a9fd" },
            { ep: "Episódio 08", url: "https://motor.voltti.cloud/stream/82?hash=3f155e" },
            { ep: "Episódio 09", url: "https://motor.voltti.cloud/stream/83?hash=32c83e" },
            { ep: "Episódio 10", url: "https://motor.voltti.cloud/stream/84?hash=b01efc" },
            { ep: "Episódio 11", url: "https://motor.voltti.cloud/stream/85?hash=c79322" },
            { ep: "Episódio 12", url: "https://motor.voltti.cloud/stream/86?hash=0ef056" },
            { ep: "Episódio 13", url: "https://motor.voltti.cloud/stream/87?hash=5b917a" }
        ]
    },

    // --- NOVELA (ESTILO VIZER) ---
    { 
        titulo: "AMOR SEM FIM", 
        capa: "https://drive.google.com/file/d/1l_DpzxkCe3kq5ikgxdMRyWZVp4s_bKCD/view?usp=sharing", 
        tipo: "novela", 
        genero: "Drama",
        episodios: [
            { ep: "Capítulo 01", url: "https://motor.voltti.cloud/stream/88?hash=7d8fe0" }
        ]
    }
];

function darPlay(url, titulo) {
    const iframe = document.getElementById('voltti-iframe');
    const placeholder = document.getElementById('placeholder');
    const epContainer = document.getElementById('episodes-menu');
    if (!iframe) return;
    
    epContainer.style.display = 'none'; 
    document.getElementById('video-title').innerText = "Assistindo agora: " + titulo;
    placeholder.style.display = 'none';
    iframe.style.display = 'block';
    iframe.src = "https://player.voltti.cloud/?v=" + encodeURIComponent(url);
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function abrirMenuColecao(item) {
    const epContainer = document.getElementById('episodes-menu');
    const epList = document.getElementById('episodes-list');
    const title = document.getElementById('video-title');
    const placeholder = document.getElementById('placeholder');
    const iframe = document.getElementById('voltti-iframe');

    iframe.style.display = 'none';
    placeholder.style.display = 'flex';
    title.innerText = item.titulo + " - Escolha o Episódio";
    epContainer.style.display = 'block';
    epList.innerHTML = "";

    item.episodios.forEach(ep => {
        const btn = document.createElement('button');
        btn.innerText = ep.ep;
        btn.onclick = () => darPlay(ep.url, item.titulo + " - " + ep.ep);
        epList.appendChild(btn);
    });
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function renderizar(lista) {
    const grid = document.getElementById('movie-grid');
    if (!grid) return;
    grid.innerHTML = "";
    
    const generos = [...new Set(lista.map(i => i.genero))];
    generos.forEach(gen => {
        const row = document.createElement('div');
        row.className = 'genre-row';
        row.innerHTML = '<h3 class="genre-title">' + gen + '</h3><div class="cards-container" id="row-' + gen + '"></div>';
        grid.appendChild(row);
        const container = document.getElementById('row-' + gen);
        lista.filter(i => i.genero === gen).forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            const capaFinal = converterDrive(item.capa);
            card.innerHTML = '<img src="' + capaFinal + '" onerror="this.src=\'V.png\'"><p>' + item.titulo + '</p>';
            card.onclick = () => item.episodios ? abrirMenuColecao(item) : darPlay(item.videoID, item.titulo);
            container.appendChild(card);
        });
    });
}

function filtrar(cat) {
    document.getElementById('episodes-menu').style.display = 'none';
    const filtrado = cat === 'todos' ? conteudos : conteudos.filter(item => item.tipo.toLowerCase() === cat.toLowerCase());
    renderizar(filtrado);
}

function buscar() {
    const termo = document.getElementById('search-input').value.toLowerCase();
    const resultados = conteudos.filter(item => 
        item.titulo.toLowerCase().includes(termo) || 
        item.genero.toLowerCase().includes(termo)
    );
    renderizar(resultados);
}

window.addEventListener("load", () => renderizar(conteudos));
