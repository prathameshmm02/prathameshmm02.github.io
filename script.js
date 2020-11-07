var sects = document.getElementsByTagName("section");
var navbuts = document.getElementsByTagName("a");
const body = document.querySelector("body");
body.style.display = "none";
const bgImg = new Image();
bgImg.src = "./assets/cover.jpg";
bgImg.onload= ()=>  {
  body.style.display = "flex";
};
body.style.height = `${window.innerHeight}px`;
function actInact() {
  for (i = 0; i < 4; i++) {
    sects[i].style.display = "none";
    navbuts[i].classList.remove("active");
    navbuts[i].classList.add("inactive");
  }
}
function showSect(num) {
  actInact();
  sects[num].style.display = "block";
  navbuts[num].classList.remove("inactive");
  navbuts[num].classList.add("active");
}
function showId() {
  document.getElementById("disId").style.opacity = 1;
}
