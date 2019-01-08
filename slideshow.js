document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    let slideIndex = 1;

    const showSlide = (n) => {
        if (n < 1) {
            slideIndex = slides.length;
        }

        if (n > slides.length) {
            slideIndex = 1;
        }

        slides.forEach((slide, index) => {
            if (index === (slideIndex - 1)) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    };

    prev.addEventListener('click', () => {
        slideIndex--;
        showSlide(slideIndex);
    });

    next.addEventListener('click', () => {
        slideIndex++;
        showSlide(slideIndex);
    });

    showSlide(slideIndex);
}, false);
