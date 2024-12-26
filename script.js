
// Проявляем back-button
window.addEventListener('scroll', function() {
    const backButton = document.getElementById('back-button');
    if (window.scrollY > document.querySelector('#main').offsetTop + 800) {
        backButton.classList.remove('hidden');
        backButton.classList.add('visible');
    } else {
        backButton.classList.remove('visible');
        backButton.classList.add('hidden');
    }
});