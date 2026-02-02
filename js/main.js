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
});
