const hamburger = document.querySelector(".hamburger");
const menuIcon = document.querySelector("ion-icon");
const navMenu = document.querySelector(".page-list")
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    // toggle icon
    if (menuIcon.getAttribute("name") === "menu-outline") {
        menuIcon.setAttribute("name", "close-outline");
    } else {
        menuIcon.setAttribute("name", "menu-outline");
    }

    // toggle menu visibility
    navMenu.classList.toggle("active");

    document.body.classList.toggle("no-scroll");
});

// close menu when a link is clicked
document.querySelectorAll(".nav-link a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuIcon.setAttribute("name", "menu-outline");
    });
});