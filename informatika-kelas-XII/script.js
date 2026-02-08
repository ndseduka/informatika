const frame = document.getElementById("slideFrame");
const sidebar = document.getElementById("sidebar");
const backToTop = document.getElementById("backToTop");

function loadDrive(el,id){
    setActive(el);
    frame.src = `https://drive.google.com/file/d/${id}/preview`;
    sidebar.classList.remove("active");
}

function loadSlide(el,id){
    setActive(el);
    frame.src = `https://docs.google.com/presentation/d/${id}/embed`;
    sidebar.classList.remove("active");
}

function setActive(el){
    document.querySelectorAll(".menu > li").forEach(li=>{
        li.classList.remove("active");
    });
    el.classList.add("active");
}

function toggleSidebar(){
    sidebar.classList.toggle("active");
}

function goFullscreen(){
    frame.requestFullscreen();
}

window.addEventListener("scroll",()=>{
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

function scrollToTop(){
    window.scrollTo({top:0,behavior:"smooth"});
}

/* DEFAULT LOAD */
loadDrive(document.querySelector(".menu li.active"),
"1J4DV5-ZFyYGy0ifuv0pTeKDPp7bHYR25");
