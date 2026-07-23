//=========================
// HERO SLIDER
//=========================

new Swiper(".hero",{

    loop:true,

    effect:"fade",

    speed:1200,

    autoplay:{

        delay:5000,

        disableOnInteraction:false

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true

    },

    navigation:{

        nextEl:".swiper-button-next",

        prevEl:".swiper-button-prev"

    }

});

//=========================
// TESTIMONIALS
//=========================

new Swiper(".testimonial-slider",{

    loop:true,

    spaceBetween:30,

    autoplay:{

        delay:5000,

        disableOnInteraction:false

    },

    pagination:{

        el:".testimonial-pagination",

        clickable:true

    },

    breakpoints:{

        0:{

            slidesPerView:1

        },

        768:{

            slidesPerView:2

        },

        1200:{

            slidesPerView:3

        }

    }

});

//=========================
// MOBILE MENU
//=========================

const mobileToggle=document.querySelector(".mobile-toggle");

const mobileMenu=document.querySelector(".mobile-menu");

const mobileOverlay=document.querySelector(".mobile-overlay");

const closeMenu=document.querySelector(".close-menu");

mobileToggle.addEventListener("click",()=>{

    mobileMenu.classList.add("active");

    mobileOverlay.classList.add("active");

});

closeMenu.addEventListener("click",closeMobileMenu);

mobileOverlay.addEventListener("click",closeMobileMenu);

function closeMobileMenu(){

    mobileMenu.classList.remove("active");

    mobileOverlay.classList.remove("active");

}

//=========================
// SCROLL REVEAL
//=========================

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(el=>{

    revealObserver.observe(el);

});

//=========================
// STICKY HEADER
//=========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 120){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

//=========================
// PROJECT FILTER
//=========================

const filterButtons = document.querySelectorAll(".project-filter button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if(filter === "all" || filter === category){

                card.classList.remove("hide");

                card.classList.add("show");

            }else{

                card.classList.remove("show");

                card.classList.add("hide");

            }

        });

    });

});

//=========================
// PAGE LOADER
//=========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.classList.add("hide");

    loader.addEventListener("transitionend", () => {

        loader.remove();

    });

});

//=========================
// SCROLL TO TOP
//=========================

const scrollTopBtn = document.getElementById("scrollTop");

const progressCircle = document.querySelector(".progress-ring-circle");

const radius = 26;

const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = circumference;

progressCircle.style.strokeDashoffset = circumference;

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollTop / docHeight;

    const offset = circumference - progress * circumference;

    progressCircle.style.strokeDashoffset = offset;

    if(scrollTop > 300){

        scrollTopBtn.classList.add("show");

    }else{

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

//=========================
// COMPANY STATISTICS COUNTER
//=========================

const statsSection = document.querySelector("#company-stats");
const counters = document.querySelectorAll("#company-stats .counter");

let statsStarted = false;

function startCounters(){

    if(statsStarted) return;

    statsStarted = true;

    counters.forEach(counter=>{

        const target = +counter.dataset.target;

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 200));

        function updateCounter(){

            current += increment;

            if(current >= target){

                counter.innerText = target;

            }else{

                counter.innerText = current;

                requestAnimationFrame(updateCounter);

            }

        }

        updateCounter();

    });

}

const statsObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startCounters();

        }

    });

},{
    threshold:.35
});

statsObserver.observe(statsSection);