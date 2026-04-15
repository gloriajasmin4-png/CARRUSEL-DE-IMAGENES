let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

const showSlide = (index) => {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
};

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Cambio automático cada 3 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 3000);