function clearActive(){
    document.querySelectorAll(".menu-item")
        .forEach(i=>i.classList.remove("active"));
}

function loadDrive(el,id){
    clearActive();
    el.classList.add("active");
    document.getElementById("contentFrame").src =
        `https://drive.google.com/file/d/${id}/preview`;
    closeMenu();
}

function loadSlide(el,id){
    clearActive();
    el.classList.add("active");
    document.getElementById("contentFrame").src =
        `https://docs.google.com/presentation/d/e/${id}/embed`;
    closeMenu();
}

function toggleMenu(){
    document.getElementById("sidebar").classList.toggle("active");
}
function closeMenu(){
    document.getElementById("sidebar").classList.remove("active");
}

/* FULLSCREEN */
function toggleFullscreen(){
    const area=document.getElementById("contentArea");
    if(!document.fullscreenElement){
        area.requestFullscreen();
    }else{
        document.exitFullscreen();
    }
}

/* BACK TO TOP */
const btn=document.getElementById("backToTop");
window.addEventListener("scroll",()=>{
    btn.style.display=window.scrollY>300?"block":"none";
});
function scrollToTop(){
    window.scrollTo({top:0,behavior:"smooth"});
}
