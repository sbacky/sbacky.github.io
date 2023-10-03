// Populate Carousel on page load
document.addEventListener("DOMContentLoaded", function() {
  var carouselInner = document.getElementById('carousel-inner');

  var images = document.querySelectorAll('.img-fluid');
  images.forEach(function(img, index) {
    var carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if(index === 0) carouselItem.classList.add('active');  // Set first item as active

    var imgClone = img.cloneNode(true);
    imgClone.className = "img-fluid w-100 mx-auto";
    carouselItem.appendChild(imgClone);
    carouselInner.appendChild(carouselItem);
  });
});
// Style modal on image click
function styleModal(imageIndex) {
  var carouselInner = document.getElementById('carousel-inner');
  var carouselItems = carouselInner.querySelectorAll('.carousel-item');
  carouselItems.forEach(function(item, index) {
    item.classList.remove('active');  // Remove active class from all items
  });
  carouselItems[imageIndex].classList.add('active');  // Set clicked item as active

  var title = document.querySelectorAll('.img-fluid')[imageIndex].getAttribute('data-title');
  document.getElementById('modalTitle').textContent = title;
}
// Attach showModal function to image clicks
var images = document.querySelectorAll('.img-fluid');
images.forEach(function(img, index) {
  img.addEventListener('click', function() {
    styleModal(index);
  });
});
// Update modal title on carousel slide
document.getElementById('imageCarousel').addEventListener('slid.bs.carousel', function() {
  var title = document.querySelector('#imageCarousel .carousel-item.active img').getAttribute('data-title');
  document.getElementById('modalTitle').textContent = title;
});
// Manunally close modal when close button clicked
document.querySelector('.btn-close').addEventListener('click', function() {
  var modal = bootstrap.Modal.getInstance(document.getElementById('imageModal'));
  modal.hide();
});