// jscomponents.js
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function openTab(tabName) {
    var i;
    var tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById("menu").style.display = "none"; // Закрыть меню после выбора вкладки
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

function toggleTheme() {
    document.body.classList.toggle("light-theme");
}