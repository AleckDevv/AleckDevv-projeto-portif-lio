// Animação para o slider ficar trocando sozinho de tempos em tempo


document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.slider-input');
    let currentIndex = 0;

    function switchSlider() {
        inputs[currentIndex].checked = false;
        currentIndex = (currentIndex + 1) % inputs.length;
        inputs[currentIndex].checked = true;
    }

    setInterval(switchSlider, 2000); // Troca a cada 2 segundos
});

