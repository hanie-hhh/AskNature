
document.addEventListener("scroll", () => {
    const mask = document.querySelector(".circle-mask");

    const scrollY = window.scrollY;
    const maxScroll = 700;
    const progress = Math.min(scrollY / maxScroll, 1);

    const startSize = 200;
    const endSize = 0;
    const size = startSize - (startSize - endSize) * progress;

    mask.style.width = `${size}vw`;
    mask.style.height = `${size}vw`;

    // Add/remove class based on scroll position
    if (window.scrollY > 5) {
        mask.classList.add('scrolled');
    } else {
        mask.classList.remove('scrolled');
    }
});

// Debounce function to optimize performance
function debounce(func, delay) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
}
