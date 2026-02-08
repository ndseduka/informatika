function loadSlide(slideId) {
    document.getElementById("slideFrame").src =
        `https://docs.google.com/presentation/d/e/${slideId}/embed?start=false&loop=false`;

    // otomatis tutup menu di HP
    document.getElementById("sidebar").classList.remove("active");
}

function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}
