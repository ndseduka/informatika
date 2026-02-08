const slideFrame = document.getElementById("slideFrame");
const sidebar = document.getElementById("sidebar");

const slides = {
    materi1: "https://drive.google.com/file/d/ID_SLIDE_XI_1/preview",
    materi2: "https://drive.google.com/file/d/ID_SLIDE_XI_2/preview"
};

function loadSlide(el, url){
    document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
    el.classList.add("active");
    slideFrame.src = url;
}

function toggleSidebar(){
    sidebar.classList.toggle("show");
}

window.onload = () => {
    const first = document.querySelector(".sidebar li");
    loadSlide(first, slides.materi1);
};
