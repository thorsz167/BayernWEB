document.addEventListener("DOMContentLoaded", function() {

    const darkModeBtn = document.getElementById("darkModeBtn");

    // Memeriksa tema yang tersimpan
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        darkModeBtn.innerHTML = "☀️ Light Mode";
    }

    // Mengatur tombol Dark Mode
    darkModeBtn.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            darkModeBtn.innerHTML = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");

        } else {

            darkModeBtn.innerHTML = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");

        }

    });

});


// PAGE TRANSITION

document.addEventListener("DOMContentLoaded", function() {

    const links = document.querySelectorAll("nav a");

    links.forEach(function(link) {

        link.addEventListener("click", function(event) {

            const destination = link.getAttribute("href");

            // Abaikan link kosong atau link eksternal
            if (
                !destination ||
                destination.startsWith("#") ||
                link.target === "_blank" ||
                event.ctrlKey ||
                event.metaKey ||
                event.shiftKey ||
                event.altKey
            ) {
                return;
            }

            event.preventDefault();

            document.body.classList.add("page-exit");

            setTimeout(function() {
                window.location.href = destination;
            }, 300);

        });

    });

});



// ALLIANZ ARENA AUTO CAROUSEL

let currentSlide = 0;
let slideInterval = null;

function showSlide(index) {
    const slides = document.querySelectorAll(".stadium-slide");
    const dots = document.querySelectorAll(".dot");

    if (slides.length === 0) return;

    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener("DOMContentLoaded", function() {

    const carousel = document.querySelector(".stadium-carousel");

    if (!carousel) return;

    // Mulai otomatis setiap 4 detik
    function startAutoSlide() {
        clearInterval(slideInterval);

        slideInterval = setInterval(function() {
            changeSlide(1);
        }, 2000);
    }

    // Hentikan sementara saat kursor berada di carousel
    carousel.addEventListener("mouseenter", function() {
        clearInterval(slideInterval);
    });

    // Lanjutkan saat kursor keluar
    carousel.addEventListener("mouseleave", function() {
        startAutoSlide();
    });

    startAutoSlide();

});

// HARRY KANE AUTO CAROUSEL
document.addEventListener("DOMContentLoaded", function() {

    const slides = document.querySelectorAll(".kane-slide");

    if (slides.length === 0) return;

    let currentKaneSlide = 0;

    setInterval(function() {

        slides[currentKaneSlide].classList.remove("active");

        currentKaneSlide++;

        if (currentKaneSlide >= slides.length) {
            currentKaneSlide = 0;
        }

        slides[currentKaneSlide].classList.add("active");

    }, 2000);

});





