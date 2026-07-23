const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
// Scroll Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

const hiddenElements = document.querySelectorAll(
".services, .why-us, .impact, .flowai"
);

hiddenElements.forEach((el) => observer.observe(el));