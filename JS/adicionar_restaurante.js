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