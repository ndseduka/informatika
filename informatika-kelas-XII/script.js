const slideFrame = document.getElementById("slideFrame");
const sidebar = document.getElementById("sidebar");
const backToTop = document.getElementById("backToTop");

const slides = {
    pengertian: "https://drive.google.com/file/d/1J4DV5-ZFyYGy0ifuv0pTeKDPp7bHYR25/preview",
    sejarah: "https://drive.google.com/file/d/1J4DV5-ZFyYGy0ifuv0pTeKDPp7bHYR25/preview",
    sintaks: "https://drive.google.com/file/d/1J4DV5-ZFyYGy0ifuv0pTeKDPp7bHYR25/preview",
    selector: "https://drive.google.com/file/d/1J4DV5-ZFyYGy0ifuv0pTeKDPp7bHYR25/preview",
    properti: "https://drive.google.com/file/d/1J4DV5-ZFyYGy0ifuv0pTeKDPp7bHYR25/preview"
};

function loadSlide(el, url){
    document.querySelectorAll(".sidebar li").forEach(li=>li.classList.remove("active"));
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
    if(slideFrame.requestFullscreen){
        slideFrame.requestFullscreen();
    }
}

window.onscroll = ()=>{
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
}

function scrollTopPage(){
    window.scrollTo({top:0, behavior:'smooth'});
}
