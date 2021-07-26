/**
 * Verifica se a sessão #estatisticas está visível, para iniciar a contagem dos membros
 */
var sessionStatisticas = document.querySelector("#estatisticas");
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
        if (estaVisivel(sessionStatisticas)) {
            var membros = document.getElementById('membros');
            var suporte_team = document.getElementById('time-suporte');
            var duration = 2000; // 5 segundos

            // Contador de membros da comunidade
            for (var i = 1; i <= 1500; i++) {
                setTimeout(function (nr) {
                    membros.innerHTML = "+" + nr;
                }, i * duration / 1500, i);
            }

            // Contador de membros da Consultoria Técnica
            for (var i = 1; i <= 10; i++) {
                setTimeout(function (nr) {
                    suporte_team.innerHTML = "+" + nr;
                }, i * duration / 10, i);
            }

            exibido = true;
        }

    }
});


/**
 * Retorna o ano atual
 */
new Date().getFullYear();
document.getElementById("year").innerHTML = new Date().getFullYear();