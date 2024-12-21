
document.addEventListener('DOMContentLoaded', () => {
    // Elements for menu interactions
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const headerNav = document.querySelector('.header-nav');
    const overlayMenu = document.querySelector('.overlay-menu');

    // Toggle menu visibility on hamburger menu click
    hamburgerMenu.addEventListener('click', () => {
        const isActive = hamburgerMenu.classList.toggle('active');
        headerNav.classList.toggle('active', isActive);
        overlayMenu.classList.toggle('active', isActive);
    });

    // Close menu on pressing the Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && overlayMenu.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            headerNav.classList.toggle('active');
            overlayMenu.classList.remove('active');
        }
    });
});

// Add or remove 'scrolled' class on the header based on scroll position
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const isScrolled = window.scrollY > 100;
    header.classList.toggle('scrolled', isScrolled);
});
