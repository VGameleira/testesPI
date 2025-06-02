// Get references to the hamburger icon and the navigation menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('main-nav-menu');

// Add an event listener to the hamburger icon
if (hamburgerIcon && navMenu) { // Ensure elements exist before adding listeners
    hamburgerIcon.addEventListener('click', () => {
        // Toggle the 'active' class on the navigation menu
        navMenu.classList.toggle('active');
    });

    // Optional: Close the menu when a link is clicked (useful for single-page apps)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Optional: Close the menu if the window is resized to a larger view
    // where the regular menu should be visible again
    window.addEventListener('resize', () => {
        // Check if the current window width is greater than the mobile breakpoint (768px)
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
} else {
    console.warn("Hamburger icon or navigation menu not found. Hamburger menu functionality might not work.");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

window.addEventListener("DOMContentLoaded", () => {
    const darkModeAtivado = localStorage.getItem("darkMode") === "true";
    if (darkModeAtivado) {
        document.body.classList.add("dark-mode");
    }

    const botao = document.getElementById("toggleDarkMode");
    if (botao) {
        botao.addEventListener("click", toggleDarkMode);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    const icon = document.getElementById("icon");

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");


        icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
});