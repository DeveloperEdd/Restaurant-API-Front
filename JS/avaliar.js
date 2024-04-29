const root = document.querySelector(':root');
const body = document.querySelector('body');

document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (body.dataset.theme === 'light') {
        root.style.setProperty('--background-color-form', '#1f1f1f')
        root.style.setProperty('--color-btn-red', '#800000');
        root.style.setProperty('--h2-color', '#cccccc');
        root.style.setProperty('--background-img', 'url(../IMG/background-dark-img.jpg)');
        root.style.setProperty('--hover-color', '#f00');
        body.dataset.theme = 'dark';
    } else {
        root.style.setProperty('--background-color-form', '#fff')
        root.style.setProperty('--color-btn-red', '#f00');
        root.style.setProperty('--h2-color', '#5c4033');
        root.style.setProperty('--background-img', 'url(../IMG/Imagem_de_fundo.jpeg)');
        root.style.setProperty('--hover-color', '#800000');
        body.dataset.theme = 'light';
    }
});

var stars = document.querySelectorAll('.star-icon');

document.addEventListener('click', function (e) {
    var classStar = e.target.classList;
    console.log("Avaliação do atendimento:\nNota " + e.target.getAttribute.value);

});
const btn = document.querySelector("#send");
btn.addEventListener("click", function (evento) {

    // A linha de código abaixo garante que o formulário não será enviado
    // se estiver vazio, mas impede que o formulário seja limpo automaticamente

    // evento.preventDefault();

    let nomeRestaurante = document.querySelector('#nomeRestauranteAvaliacao').value;
    let comentario = document.querySelector('#comentario').value;
    var atendimento = document.getElementsByName('atendimento');
    var comida = document.getElementsByName('comida');
    var ambiente = document.getElementsByName('ambiente');
    var nota1 = 0;
    var nota2 = 0;
    var nota3 = 0;
    for (i = 0; i < atendimento.length; i++) {
        if (atendimento[i].checked)
            nota1 = atendimento[i].value;
    };
    for (m = 0; m < comida.length; m++) {
        if (comida[m].checked)
            nota2 = comida[m].value;
    };
    for (n = 0; n < ambiente.length; n++) {
        if (ambiente[n].checked)
            nota3 = ambiente[n].value;
    };
    alert("CONTEÚDO DO FORMULÁRIO:\n\nNome do restaurante: " + nomeRestaurante + "\nComentario: " + comentario + "\nAtendimento: nota " + nota1 + "\nComida: nota " + nota2 + "\nAmbiente: nota " + nota3);
});
