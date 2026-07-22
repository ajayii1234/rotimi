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