window.addEventListener('DOMContentLoaded', (event) => {
    const menuTrigger = document.getElementById('menu-trigger');
    const menuContainer = document.querySelector('.meniu-coborator');
    const favorites = document.querySelectorAll('.favorite-card');

    // Toggle menu
    menuTrigger.addEventListener('click', () => {
        menuContainer.classList.toggle('active');
    });

    // Add click event listener to each favorite card
    favorites.forEach((favorite) => {
        favorite.addEventListener('click', () => {
            favorite.classList.toggle('active');
        });
    });
});
