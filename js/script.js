// ===============================
// Basic Site Initialization
// ===============================
console.log("Website Skeleton Loaded Successfully");


// ===============================
// Smooth scroll (extra safety fallback)
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
// Active Section Highlight
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});
// ===============================
// Contact Form Handling (Basic)
// ===============================

const form = document.querySelector(".contact-form");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();

        alert("Message sent successfully (demo mode)");

        form.reset();
    });
}