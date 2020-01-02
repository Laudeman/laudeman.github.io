var slideIndex = 1;
for (let index = 0; index < document.getElementsByClassName("slideshow-container").length; index++) {
  showSlides(slideIndex, index);
}
//showSlides(slideIndex, 0);

// Next/previous controls
function plusSlides(n, containerIndex) {
  showSlides(slideIndex += n, containerIndex);
}

// Thumbnail image controls
function currentSlide(n, containerIndex) {
  showSlides(slideIndex = n, containerIndex);
}

function showSlides(n, containerIndex) {
  var i;
  var slideContainers = document.getElementsByClassName("slideshow-container");
  var currentContainer = slideContainers[containerIndex]
  var slides = currentContainer.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 