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

const testimonialSlider = document.querySelector(".testimonial-slider");

if (testimonialSlider) {

    new Swiper(".testimonial-slider", {

        loop: true,

        spaceBetween: 30,

        autoplay: {

            delay: 5000,

            disableOnInteraction: false

        },

        pagination: {

            el: ".testimonial-pagination",

            clickable: true

        },

        breakpoints: {

            0: {

                slidesPerView: 1

            },

            768: {

                slidesPerView: 2

            },

            1200: {

                slidesPerView: 3

            }

        }

    });

}

//=========================
// MOBILE MENU
//=========================

const mobileToggle=document.querySelector(".mobile-toggle");

const mobileMenu=document.querySelector(".mobile-menu");

const mobileOverlay=document.querySelector(".mobile-overlay");

const closeMenu=document.querySelector(".close-menu");

if (
    mobileToggle &&
    mobileMenu &&
    mobileOverlay &&
    closeMenu
) {

    mobileToggle.addEventListener("click", () => {

        mobileMenu.classList.add("active");

        mobileOverlay.classList.add("active");

    });

    closeMenu.addEventListener("click", closeMobileMenu);

    mobileOverlay.addEventListener("click", closeMobileMenu);

}

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

        if (header) {

            window.addEventListener("scroll", () => {
        
                if (window.scrollY > 120) {
        
                    header.classList.add("sticky");
        
                } else {
        
                    header.classList.remove("sticky");
        
                }
        
            });
        
        }

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

if (statsSection) {
    statsObserver.observe(statsSection);
}

//======================================
// SERVICES FAQ
//======================================

const serviceFaqItems = document.querySelectorAll("#services-faq .faq-item");

if (serviceFaqItems.length) {

    serviceFaqItems.forEach(item => {

        const button = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        button.addEventListener("click", () => {

            serviceFaqItems.forEach(faq => {

                if (faq !== item) {

                    faq.classList.remove("active");
                    faq.querySelector(".faq-answer").style.maxHeight = null;

                }

            });

            item.classList.toggle("active");

            if (item.classList.contains("active")) {

                answer.style.maxHeight = answer.scrollHeight + "px";

            } else {

                answer.style.maxHeight = null;

            }

        });

    });

}

//======================================
// GALLERY LIGHTBOX
//======================================

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("gallery-lightbox");

if (galleryItems.length && lightbox) {

    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxCategory = document.getElementById("lightbox-category");

    const closeBtn = document.querySelector(".lightbox-close");
    const nextBtn = document.querySelector(".lightbox-next");
    const prevBtn = document.querySelector(".lightbox-prev");

    let currentIndex = 0;

    function showImage(index) {

        const img = galleryItems[index].querySelector("img");

        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;

        lightboxTitle.textContent = img.dataset.title;
        lightboxCategory.textContent = img.dataset.category;

        currentIndex = index;
    }

    galleryItems.forEach((item, index) => {

        item.addEventListener("click", function (e) {

            e.preventDefault();

            showImage(index);

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

    closeBtn.addEventListener("click", closeLightbox);

    nextBtn.addEventListener("click", function () {

        currentIndex++;

        if (currentIndex >= galleryItems.length) {

            currentIndex = 0;

        }

        showImage(currentIndex);

    });

    prevBtn.addEventListener("click", function () {

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex = galleryItems.length - 1;

        }

        showImage(currentIndex);

    });

    lightbox.addEventListener("click", function (e) {

        if (e.target === lightbox) {

            closeLightbox();

        }

    });

    document.addEventListener("keydown", function (e) {

        if (!lightbox.classList.contains("active")) return;

        switch (e.key) {

            case "Escape":
                closeLightbox();
                break;

            case "ArrowRight":
                nextBtn.click();
                break;

            case "ArrowLeft":
                prevBtn.click();
                break;

        }

    });

}

//======================================
// VIDEO GALLERY
//======================================

const videoCards = document.querySelectorAll(".video-card");
const videoModal = document.getElementById("video-modal");

if (videoCards.length && videoModal) {

    const frame = document.getElementById("video-frame");
    const close = document.querySelector(".video-close");

    videoCards.forEach(card => {

        card.addEventListener("click", () => {

            frame.src = card.dataset.video + "?autoplay=1";

            videoModal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    function closeVideo() {

        frame.src = "";

        videoModal.classList.remove("active");

        document.body.style.overflow = "";

    }

    close.addEventListener("click", closeVideo);

    videoModal.addEventListener("click", e => {

        if (e.target === videoModal) {

            closeVideo();

        }

    });

    document.addEventListener("keydown", e => {

        if (e.key === "Escape" &&
            videoModal.classList.contains("active")) {

            closeVideo();

        }

    });

}

//======================================
// CONTACT FAQ
//======================================

const contactFaqItems = document.querySelectorAll("#contact-faq .faq-item");

if (contactFaqItems.length) {

    contactFaqItems.forEach(item => {

        const button = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        button.addEventListener("click", () => {

            contactFaqItems.forEach(faq => {

                if (faq !== item) {

                    faq.classList.remove("active");
                    faq.querySelector(".faq-answer").style.maxHeight = null;

                }

            });

            item.classList.toggle("active");

            if (item.classList.contains("active")) {

                answer.style.maxHeight = answer.scrollHeight + "px";

            } else {

                answer.style.maxHeight = null;

            }

        });

    });

}


document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("quoteForm");
    const submitBtn = document.getElementById("submitBtn");

    if (!form || !submitBtn) {

        console.error("Form or submit button not found.");

        return;

    }

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        submitBtn.disabled = true;

        submitBtn.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Sending...';

        const formData = new FormData(form);

        formData.append(
            "_subject",
            "New Quote Request - Rotimitunde Global Logistics"
        );

        try {

            const response = await fetch(
                // "https://formspree.io/f/mkodapro",
                "https://formspree.io/f/xeeywnro",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                }
            );

            if (response.ok) {

                window.location.href = "thank-you.html";

            } else {

                alert("Submission failed. Please try again.");

            }

        } catch (error) {

            console.error(error);

            alert("Network error.");

        } finally {

            submitBtn.disabled = false;

            submitBtn.innerHTML =
                '<i class="fas fa-paper-plane"></i> <span>Send Inquiry</span>';

        }

    });

});