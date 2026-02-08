const slideFrame = document.getElementById("slideFrame");
const sidebar = document.getElementById("sidebar");
const backToTop = document.getElementById("backToTop");

const slides = {
    pengertian: "https://drive.google.com/file/d/ID_SLIDE_XII_1/preview",
    sejarah: "https://drive.google.com/file/d/ID_SLIDE_XII_2/preview",
    sintaks: "https://drive.google.com/file/d/ID_SLIDE_XII_3/preview",
    selector: "https://drive.google.com/file/d/ID_SLIDE_XII_4/preview",
    properti: "https://drive.google.com/file/d/ID_SLIDE_XII_5/preview"
};

function loadSlide(el, url){
    document.querySelectorAll(".sidebar li")
        .forEach(li => li.classList.remove("active"));

    el.classList.add("active");
    slideFrame.src = url;

    if(window.innerWidth <= 768){
        sidebar.classList.remove("show");
    }
}

function toggleSidebar(){
    sidebar.classList.toggle("show");
}

function fullscreen(){
    if (slideFrame.requestFullscreen) {
        slideFrame.requestFullscreen();
    } else if (slideFrame.webkitRequestFullscreen) {
        slideFrame.webkitRequestFullscreen();
    }
}

window.onscroll = () => {
    backToTop.style.display =
        window.scrollY > 200 ? "block" : "none";
};

function scrollTopPage(){
    window.scrollTo({ top:0, behavior:"smooth" });
}

/* LOAD SLIDE PERTAMA */
window.onload = () => {
    const first = document.querySelector(".sidebar li");
    loadSlide(first, slides.pengertian);
};
