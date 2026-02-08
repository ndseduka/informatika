const frame = document.getElementById("slideFrame");
const sidebar = document.getElementById("sidebar");
const backToTop = document.getElementById("backToTop");

/* LOAD GOOGLE DRIVE FILE */
function loadDrive(el,id){
    clearActive();
    el.classList.add("active");
    frame.src = `https://drive.google.com/file/d/${id}/preview`;
    sidebar.classList.remove("active");
}

/* LOAD GOOGLE SLIDES */
function loadSlide(el,id){
    clearActive();
    el.classList.add("active");
    frame.src = `https://docs.google.com/presentation/d/${id}/embed`;
    sidebar.classList.remove("active");
}

/* CLEAR ACTIVE (HANYA SUB MENU) */
function clearActive(){
    document.querySelectorAll(".sub-item").forEach(item=>{
        item.classList.remove("active");
    });
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
loadDrive(
    document.querySelector(".sub-item.active"),
    "1J4DV5-ZFyYGy0ifuv0pTeKDPp7bHYR25"
);
