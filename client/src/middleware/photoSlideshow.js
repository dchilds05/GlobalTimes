export default function photoSlideshow() {

    var slides = document.getElementsByClassName("loginLeftDiv1");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    if(frameId % 300 === 0) slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    
    frameId = requestAnimationFrame(showSlides);
  }
  