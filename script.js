function mostrarSecao(id) {
    let secoes = document.querySelectorAll('.secao');

    secoes.forEach(secao => {
        secao.classList.remove('ativa');
    });

    document.getElementById(id).classList.add('ativa');
}

function mostrarMensagem() {
    document.getElementById("mensagem").innerHTML =
        "🌱 O futuro sustentável depende das escolhas que fazemos hoje no campo e na cidade!";
}
