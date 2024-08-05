script.js

const carrosselImages = document.querySelector('.carrossel-imagens');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function goToSlide(index) {
    carrosselImages.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentSlide = index;
}

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideIndex = parseInt(e.target.getAttribute('data-slide'));
        goToSlide(slideIndex);
    });
});

// Inicializar o carrossel
goToSlide(currentSlide);

// Função para mudar slides automaticamente (opcional)
setInterval(() => {
    currentSlide = (currentSlide + 1) % dots.length;
    goToSlide(currentSlide);
}, 3000); // Mudar de imagem a cada 3 segundos
