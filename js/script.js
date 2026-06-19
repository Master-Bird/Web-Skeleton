// =====================================================
// PORTFOLIO SKELETON v3.0 - CLEAN JS
// =====================================================

console.log("Portfolio loaded successfully 🚀");


// =====================================================
// SMOOTH SCROLLING
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// =====================================================
// HAMBURGER MENU
// =====================================================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    // Auto-close menu when clicking a link (UX improvement)
    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}


// =====================================================
// ACTIVE NAVIGATION HIGHLIGHT
// =====================================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =====================================================
// DARK MODE (LOCAL STORAGE)
// =====================================================

const themeBtn = document.querySelector(".theme-toggle");

if (themeBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        themeBtn.textContent = isDark ? "☀️" : "🌙";

        localStorage.setItem("theme", isDark ? "dark" : "light");

    });

}


// =====================================================
// SCROLL PROGRESS BAR
// =====================================================

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = scrolled + "%";

});


// =====================================================
// PROJECT FILTER (OPTIMIZED SCOPE FIX)
// =====================================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".portfolio-grid .card");

if (filterButtons.length > 0) {

    filterButtons.forEach(btn => {

        btn.addEventListener("click", () => {

            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");

            projects.forEach(project => {

                const category = project.getAttribute("data-category");

                if (filter === "all" || filter === category) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }

            });

        });

    });

}


// =====================================================
// SCROLL REVEAL (SINGLE CLEAN SYSTEM)
// =====================================================

const revealSections = document.querySelectorAll("section");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

revealSections.forEach(section => {
    revealObserver.observe(section);
});