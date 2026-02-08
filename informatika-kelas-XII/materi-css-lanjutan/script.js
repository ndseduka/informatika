const slides = {
    pendahuluan: "https://docs.google.com/presentation/d/e/SLIDE_ID_1/embed?start=false&loop=false&delayms=3000",
    instalasi: "https://docs.google.com/presentation/d/e/SLIDE_ID_2/embed?start=false&loop=false",
    hello: "https://docs.google.com/presentation/d/e/SLIDE_ID_3/embed?start=false&loop=false",
    variabel: "https://docs.google.com/presentation/d/e/SLIDE_ID_4/embed?start=false&loop=false",
    loop: "https://docs.google.com/presentation/d/e/SLIDE_ID_5/embed?start=false&loop=false"
};

function loadSlide(materi) {
    document.getElementById("slideFrame").src = slides[materi];
}
