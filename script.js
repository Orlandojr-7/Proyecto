document.addEventListener('DOMContentLoaded', function () {
    const mainItem = document.querySelector('.menu-item');
    const parentNav = mainItem.closest('.navegation');

    mainItem.addEventListener('click', function (e) {
        e.preventDefault(); // Previene la redirección por defecto
        parentNav.classList.toggle('active'); // Alterna la clase 'active'
    });
});