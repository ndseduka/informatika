const slide1 = "https://docs.google.com/presentation/d/e/SLIDE1/pub?start=false&loop=false";
const slide2 = "https://docs.google.com/presentation/d/e/SLIDE2/pub?start=false&loop=false";
const slide3 = "https://docs.google.com/presentation/d/e/SLIDE3/pub?start=false&loop=false";
const slide4 = "https://docs.google.com/presentation/d/e/SLIDE4/pub?start=false&loop=false";
const slide5 = "https://docs.google.com/presentation/d/e/SLIDE5/pub?start=false&loop=false";

function loadSlide(url) {
  document.getElementById("slideFrame").src = url;
}
