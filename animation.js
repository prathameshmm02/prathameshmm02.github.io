var elements;
var windowHeight;
var intro = true;
function init() {
  elements = document.querySelectorAll('.svg');
  windowHeight = window.innerHeight;
}
function checkPosition() {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var positionFromTop = elements[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-class');
      }
  }
}
function switchIntro(){
  if(intro!=true){
    console.log(intro);
    intro = true;
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".another-intro").style.display = "flex";
  }
  else{
    console.log(intro);
    intro = false;
    document.querySelector(".intro").style.display = "flex";
    document.querySelector(".another-intro").style.display = "none";
    }
}
window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);
document.querySelector(".switch").addEventListener("click", switchIntro);
init();
checkPosition();
  ;