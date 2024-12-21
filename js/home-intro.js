
document.addEventListener('DOMContentLoaded', function () {
    const ends = [
        "produce color?",
        "communicate?",
        "protect from harm?",
        "process information?",
        "distribute resources?",
        "protect from pathogens?",
        "create community?",
        "coordinate?",
        "regulate climate?",
        "manage disturbance?",
        "conserve water?"
    ];
    const questionEnds = document.getElementById('question-ends');
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Typing effect function
    function typeText() {
        if (charIndex < ends[currentIndex].length && !isDeleting) {
            questionEnds.innerHTML += ends[currentIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else if (charIndex === ends[currentIndex].length) {
            isDeleting = true;
            setTimeout(deleteText, 1000);
        }
    }

    // Deleting effect function
    function deleteText() {
        if (charIndex > 0 && isDeleting) {
            questionEnds.innerHTML = ends[currentIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, 50);
        } else if (charIndex === 0 && isDeleting) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % ends.length;
            setTimeout(typeText, 50);
        }
    }
    typeText();
});
