var members = document.getElementById('members');
var suporte_team = document.getElementById('suporte-team');
var duration = 1500; // 5 segundos

// Community member counter
for (var i = 1; i <= 1500; i++) {
    setTimeout(function (nr) {
        members.innerHTML =  "+" + nr;
    }, i * duration / 1500, i);
}

// Technical support member counter
for (var i = 1; i <= 10; i++) {
    setTimeout(function (nr) {
        suporte_team.innerHTML =  "+" + nr;
    }, i * duration / 10, i);
}
