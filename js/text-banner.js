function toggleDetails(button) {
    const wrap = button.closest('.wrap');
    const details = wrap.querySelector('.details');
    const buttonText = button.querySelector('.button-text');
    const buttonIcon = button.querySelector('.icon');

    const isOpen = details.classList.contains('open');

    // Toggle the max height of the details section
    if (isOpen) {
        details.style.maxHeight = null;
        details.classList.remove('open');
        buttonText.textContent = 'LEARN MORE';
        buttonIcon.innerHTML = `
            <path d="M4.59,7.48H0V4.92h4.59V0h2.73v4.92h4.59v2.55H7.32v4.92H4.59V7.48z"></path>
        `;
    } else {
        details.style.maxHeight = details.scrollHeight + 'px';
        details.classList.add('open');
        buttonText.textContent = 'CLOSE';
        buttonIcon.innerHTML = `
            <path d="M2,2L10,10M10,2L2,10" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
       `;
    }
}
