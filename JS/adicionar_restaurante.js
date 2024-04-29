const root = document.querySelector(':root');
const body = document.querySelector('body');

document.getElementById('themeSwitcher').addEventListener('click', function() {
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
})

// Seletor de caracteres
const cep = document.getElementById('cepRestaurante');
const allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '.'];

cep.addEventListener('keydown', function(ev) {
    ev.preventDefault();
    if (allowedKeys.includes(ev.key)) {
        cep.value += ev.key;
        return;
    }
    if (ev.key === 'Backspace') {
        cep.value = cep.value.slice(0, -1);
    }
});