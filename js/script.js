// ===============================
// Website Skeleton - JS (Clean Version)
// ===============================


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
    // Contact form now handled by Formspree
    // No JS needed anymore
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
// ===============================
// Active Navigation Highlight
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
// ===============================
// Dark Mode
// ===============================

const themeBtn =
document.querySelector(".theme-toggle");


if(themeBtn){

const savedTheme =
localStorage.getItem("theme");


if(savedTheme === "dark"){

document.body.classList.add("dark");

themeBtn.textContent="☀️";

}


themeBtn.addEventListener("click",()=>{


document.body.classList.toggle("dark");


const dark =
document.body.classList.contains("dark");


themeBtn.textContent =
dark ? "☀️" : "🌙";


localStorage.setItem(
"theme",
dark ? "dark":"light"
);


});

}