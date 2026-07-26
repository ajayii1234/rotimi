const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 60);

});

const hamburger = document.querySelector(".hamburger");

const mobileMenu = document.querySelector(".mobile-menu");

const overlay = document.querySelector(".mobile-overlay");

const closeBtn = document.querySelector(".close-menu");

function openMenu(){

    mobileMenu.classList.add("active");

    overlay.classList.add("active");

    document.body.classList.add("menu-open");

}

function closeMenu(){

    mobileMenu.classList.remove("active");

    overlay.classList.remove("active");

    document.body.classList.remove("menu-open");

}

hamburger.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".mobile-menu a").forEach(link=>{

    link.addEventListener("click", closeMenu);

});