const slides = {
    pendahuluan: "https://docs.google.com/presentation/d/e/SLIDE_ID_1/embed",
    instalasi: "https://docs.google.com/presentation/d/e/SLIDE_ID_2/embed",
    hello: "https://docs.google.com/presentation/d/e/SLIDE_ID_3/embed",
    variabel: "https://docs.google.com/presentation/d/e/SLIDE_ID_4/embed",
    loop: "https://docs.google.com/presentation/d/e/SLIDE_ID_5/embed"
};

function loadMateri(materi) {
    document.getElementById("slideFrame").src = slides[materi];
}

window.onload = function () {
    loadMateri("pendahuluan");
};
