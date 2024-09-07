document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-icon button'); // Ajuste o seletor se necessário
    const mobileMenu = document.querySelector('.mobile-menu'); // Ajuste o seletor se necessário
    const icon = document.querySelector('.mobile-menu-icon .icon'); // Atualiza o ícone do menu

    menuToggle.addEventListener('click', function() {
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open'); // Remove a classe 'open' para ocultar o menu
            icon.src = "img/menu-white.svg"; // Ícone para menu fechado
        } else {
            mobileMenu.classList.add('open'); // Adiciona a classe 'open' para mostrar o menu
            icon.src = "img/close-white.svg"; // Ícone para menu aberto
        }
    });

    console.log('Página carregada!');
});
