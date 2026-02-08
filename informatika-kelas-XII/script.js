const frame = document.getElementById("slideFrame");
const sidebar = document.getElementById("sidebar");
const backToTop = document.getElementById("backToTop");

/* LOAD DRIVE FILE */
function loadDrive(el, fileId){
    setActive(el);
    frame.src = `https://drive.google.com/file/d/${fileId}/preview`;
    sidebar.classList.remove("active");
}

/* LOAD GOOGLE SLIDES */
function loadSlide(el, slideId){
    setActive(el);
    frame.src = `https://docs.google.com/presentation/d/${slideId}/embed?start=false&loop=false`;
    sidebar.classList.remove("active");
}

/* ACTIVE MENU */
function setActive(el){
    document.querySelectorAll(".sidebar li").forEach(li=>{
        li.classList.remove("active");
    });
    el.classList.add("active");
}

/* HAMBURGER */
function toggleSidebar(){
    sidebar.classList.toggle("active");
}

/* FULLSCREEN */
function goFullscreen(){
    frame.requestFullscreen();
}

/* BACK TO TOP */
window.addEventListener("scroll",()=>{
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

function scrollToTop(){
    window.scrollTo({top:0,behavior:"smooth"});
}

/* LOAD DEFAULT */
loadDrive(document.querySelector(".sidebar li.active"),
"1J4DV5-ZFyYGy0ifuv0pTeKDPp7bHYR25");
