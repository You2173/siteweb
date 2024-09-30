function initializeSlides(modalId) {
  let modal = document.getElementById(modalId);
  modal.slideIndex = 1; // Initialize slide index to 1
  showSlides(1, modal); // Show the first slide
}

function plusSlides(n, modalId) {
  let modal = document.getElementById(modalId);
  modal.slideIndex = modal.slideIndex || 1; // Ensure slideIndex is set
  modal.slideIndex += n; // Increment or decrement slide index
  showSlides(modal.slideIndex, modal); // Show the updated slide
}

function currentSlide(n, modalId) {
  let modal = document.getElementById(modalId);
  showSlides((modal.slideIndex = n), modal);
}

function showSlides(n, modal) {
  let i;
  let slides = modal.getElementsByClassName("mySlides");
  let dots = modal.getElementsByClassName("dot");
  let slideIndex = modal.slideIndex || 1;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  modal.slideIndex = slideIndex; // Store slideIndex on the modal element

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
