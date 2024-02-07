// jshome.js
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function openTab(tabName) {
    var tabContent = document.getElementById(tabName);
    if (tabContent) {
        tabContent.style.display = "block";
    }

    var menu = document.getElementById("menu");
    if (menu) {
        menu.style.display = "none"; // Close menu after selecting a tab
    }
}

function toggleTheme() {
    // Toggle between "light-theme" and "dark-theme"
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
}