// Dynamically update the modal
document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById('imageModal');
  var modalTitle = document.getElementById('modalTitle');
  var modalImage = document.getElementById('modalImage');

  modal.addEventListener('show.bs.modal', function(event) {
    var button = event.relatedTarget;
    var imageSrc = button.getAttribute('data-image');
    var title = button.getAttribute('data-title');

    modalTitle.innerText = title;
    modalImage.setAttribute('src', imageSrc);
  });
});