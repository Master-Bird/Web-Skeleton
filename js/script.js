// ===============================
// Website Skeleton - JS (Clean Version)
// ===============================

console.log("Website loaded successfully");

// ===============================
// Smooth scrolling (navigation)
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// Contact form (demo behavior)
// ===============================

const form = document.querySelector(".contact-form");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();

        alert("Message sent successfully (demo mode)");

        form.reset();
    });
}
// ===============================
// Hamburger Menu
// ===============================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");


if(hamburger){

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}
// ===============================
// Scroll Reveal Animation
// ===============================

const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});


hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});