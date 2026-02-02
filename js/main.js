document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".bbp-hamburger");
    const menu = document.querySelector(".bbp-mobile-menu");
    const accent = document.querySelector(".bbp-scroll-accent");

    if (burger && menu) {
        burger.addEventListener("click", () => {
            const open = menu.style.display === "flex";
            menu.style.display = open ? "none" : "flex";
            burger.setAttribute("aria-expanded", String(!open));
        });
    }

    if (accent) {
        document.addEventListener("scroll", () => {
            accent.classList.toggle("active", window.scrollY > 20);
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll(".bb-faq-question");
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(btn => {
            btn.addEventListener("click", () => {
                const item = btn.closest(".bb-faq-item");
                const isActive = item.classList.contains("active");

                // Close all other items
                document.querySelectorAll(".bb-faq-item").forEach(i => i.classList.remove("active"));

                // Toggle current item
                if (!isActive) {
                    item.classList.add("active");
                }
            });
        });
    }

    // Hero Slider Logic
    const slides = document.querySelectorAll('#bbpHeroSlider .slide');
    const dotsContainer = document.getElementById('sliderDotsBBP');
    let currentSlideIndex = 0;
    let slideInterval;

    if (slides.length > 0 && dotsContainer) {
        // Create Dots
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function goToSlide(n) {
            slides[currentSlideIndex].classList.remove('active');
            dots[currentSlideIndex].classList.remove('active');
            currentSlideIndex = (n + slides.length) % slides.length;
            slides[currentSlideIndex].classList.add('active');
            dots[currentSlideIndex].classList.add('active');
            resetInterval();
        }

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(() => goToSlide(currentSlideIndex + 1), 6000);
        }

        // Global functions for arrows
        window.showSlideBBP = (n) => goToSlide(n);

        resetInterval();
    }
});
