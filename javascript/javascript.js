const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



// <!-- ######################    Caresoul    ###################### -->

const slides = document.querySelectorAll(".carousel-slide");
let currentSlide = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
    goToSlide(currentSlide + 1);
});

document.getElementById("prevBtn").addEventListener("click", () => {
    goToSlide(currentSlide - 1);
});

function goToSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
}

// Automatically advance the carousel every 3 seconds
setInterval(() => {
    goToSlide(currentSlide + 1);
}, 3000);
