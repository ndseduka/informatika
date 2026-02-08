// GANTI LINK GOOGLE SLIDE DI SINI
const slide1 = "https://docs.google.com/presentation/d/e/2PACX-1vSLIDE1/pub?start=false&loop=false";
const slide2 = "https://docs.google.com/presentation/d/e/2PACX-1vSLIDE2/pub?start=false&loop=false";
const slide3 = "https://docs.google.com/presentation/d/e/2PACX-1vSLIDE3/pub?start=false&loop=false";
const slide4 = "https://docs.google.com/presentation/d/e/2PACX-1vSLIDE4/pub?start=false&loop=false";
const slide5 = "https://docs.google.com/presentation/d/e/2PACX-1vSLIDE5/pub?start=false&loop=false";

function loadSlide(url) {
  document.getElementById("slideFrame").src = url;
}
