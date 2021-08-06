/*
 * Loading
 */
//if has .loading on body, add  overflow:hidden on html tag
var html = document.querySelector('html');
var body = document.querySelector('body');

$(window).load(function () {
    body.classList.remove("loading");
    html.classList.remove("hiddenOverflow");
});

/*
 * Random Lottie files de animação
 */
function animacaoAleatoria() {
    var lottieFiles = ['team1.json', 'team2.json']; // possíveis lottie files
    var index = Math.floor(Math.random() * lottieFiles.length);

    var divAnimacaoHeader = document.getElementById("header-team");
    var divAnimacaoFooter = document.getElementById("footer-team");

    // Header team
    var animacaoHeader = document.createElement("lottie-player");
    animacaoHeader.setAttribute('id', 'lottie-comunidade');
    animacaoHeader.setAttribute('src', './assets/lottiefiles/header-' + lottieFiles[index]);
    animacaoHeader.setAttribute('speed', '1');
    animacaoHeader.setAttribute('loop', '');
    animacaoHeader.setAttribute('autoplay', '');
    divAnimacaoHeader.appendChild(animacaoHeader);

    // Footer team
    var animacaoFooter = document.createElement("lottie-player");
    animacaoFooter.setAttribute('id', 'lottie-devs');
    animacaoFooter.setAttribute('src', './assets/lottiefiles/footer-' + lottieFiles[index]);
    animacaoFooter.setAttribute('speed', '1');
    animacaoFooter.setAttribute('loop', '');
    animacaoFooter.setAttribute('autoplay', '');
    divAnimacaoFooter.appendChild(animacaoFooter);
}

window.onload = function () {
    animacaoAleatoria();
}


setInterval(() => {
    document.getElementById("header-team").innerHTML = "";
    document.getElementById("footer-team").innerHTML = "";
    animacaoAleatoria();
}, 60000);

/**
 * Verifica se a sessão #estatisticas está visível, para iniciar a contagem dos membros
 */
var sessaoEtatisticas = document.querySelector("#estatisticas");
var exibido = false;

function estaVisivel(el) {
    const posicoes = el.getBoundingClientRect();
    const inicio = posicoes.top;
    const fim = posicoes.bottom;
    let estaVisivel = false

    if ((inicio >= 0) && (fim <= window.innerHeight)) {
        estaVisivel = true;
    }

    return estaVisivel;

}

document.addEventListener('scroll', () => {
    if (!exibido) {
        if (estaVisivel(sessaoEtatisticas)) {
            var membrosComunidade = document.getElementById('membros');
            var membrosSuporte = document.getElementById('time-suporte');
            var duracao = 2000;

            // Contador de membros da comunidade
            for (var i = 1; i <= 1600; i++) {
                setTimeout(function (nr) {
                    membrosComunidade.innerHTML = "+" + nr;
                }, i * duracao / 1600, i);
            }

            // Contador de membros da Consultoria Técnica
            for (var i = 1; i <= 10; i++) {
                setTimeout(function (nr) {
                    membrosSuporte.innerHTML = "+" + nr;
                }, i * duracao / 10, i);
            }

            exibido = true;
        }

    }
});


/**
 * Retorna o ano atual
 */
new Date().getFullYear();
document.getElementById('year').innerHTML = new Date().getFullYear();

// animações
$(function () {
    new WOW().init();
});