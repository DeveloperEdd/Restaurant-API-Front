const root = document.querySelector(':root');
const body = document.querySelector('body');

function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (body.dataset.theme === 'light') {
        // Alterar para o tema escuro
        root.style.setProperty('--background-color-form', '#1f1f1f')
        root.style.setProperty('--color-btn-red', '#800000');
        root.style.setProperty('--h2-color', '#cccccc');
        root.style.setProperty('--background-img', 'url(../IMG/background-dark-img.jpg)');
        root.style.setProperty('--hover-color', '#f00');
        body.dataset.theme = 'dark';

        // Adicionar um pequeno atraso antes de salvar o tema
        setTimeout(function () {
            saveThemePreference('dark');
        }, 100); // Atraso de 100 milissegundos (0.1 segundo)
    } else {
        // Alterar para o tema claro
        root.style.setProperty('--background-color-form', '#fff')
        root.style.setProperty('--color-btn-red', '#f00');
        root.style.setProperty('--h2-color', '#5c4033');
        root.style.setProperty('--background-img', 'url(../IMG/Imagem_de_fundo.jpeg)');
        root.style.setProperty('--hover-color', '#800000');
        body.dataset.theme = 'light';

        // Adicionar um pequeno atraso antes de salvar o tema
        setTimeout(function () {
            saveThemePreference('light');
        }, 100); // Atraso de 100 milissegundos (0.1 segundo)
    }
});

// Aplicar o tema salvo quando a página é carregada
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        if (savedTheme === 'dark') {
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
    }
});
