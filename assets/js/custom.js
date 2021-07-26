var membros = document.getElementById('membros');
var suporte_team = document.getElementById('time-suporte');
var duration = 2500; // 5 segundos

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

/**
 * Retorna o ano atual
 */
new Date().getFullYear();
document.getElementById("year").innerHTML = new Date().getFullYear();