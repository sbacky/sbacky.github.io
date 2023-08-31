document.addEventListener("DOMContentLoaded", function () {
    const lightboxLinks = document.querySelectorAll(".lightbox-link");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const prevButton = document.querySelector(".lightbox-nav.prev");
    const nextButton = document.querySelector(".lightbox-nav.next");
  
    let currentImageIndex = 0;
  
    lightboxLinks.forEach((link, index) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        currentImageIndex = index;
        showImage(index);
        lightbox.style.display = "flex";
      });
    });
  
    function showImage(index) {
      const imageUrl = lightboxLinks[index].getAttribute("href");
      lightboxImage.src = imageUrl;
    }
  
    function navigate(direction) {
      currentImageIndex += direction;
      if (currentImageIndex < 0) {
        currentImageIndex = lightboxLinks.length - 1;
      } else if (currentImageIndex >= lightboxLinks.length) {
        currentImageIndex = 0;
      }
      showImage(currentImageIndex);
    }
  
    prevButton.addEventListener("click", function (e) {
      e.preventDefault();
      navigate(-1);
    });
  
    nextButton.addEventListener("click", function (e) {
      e.preventDefault();
      navigate(1);
    });
  
    // Close lightbox
    lightbox.addEventListener("click", function (e) {
      if (e.target.classList.contains("lightbox") || e.target.classList.contains("lightbox-close")) {
        lightbox.style.display = "none";
      }
    });
  });
  
  