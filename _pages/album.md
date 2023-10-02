---
layout: page
title: Album
permalink: /album/
stylesheet: /assets/main.scss
---

## AI Art
Some images I generated using SDXL 1.0

<!-- Bootstrap 5 Photo Album -->
<div class="container-xl">
  <!-- Row -->
  <div class="row g-2">
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00001-1898130605.png" data-title="Elven World Tree" class="ratio ratio-1x1">
        <img src="/assets/images/album/00001-1898130605.png" alt="Photo 1" class="rounded img-fluid">
      </a>
    </div>
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00002-1898130606.png" data-title="Floating Lunar City" class="ratio ratio-1x1">
        <img src="/assets/images/album/00002-1898130606.png" alt="Photo 2" class="rounded img-fluid">
      </a>
    </div>
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00017-4180582554.png" data-title="Vaporwave Audi R8 1" class="ratio ratio-1x1">
        <img src="/assets/images/album/00017-4180582554.png" alt="Photo 3" class="rounded img-fluid">
      </a>
    </div>
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00019-4180582556.png" data-title="Vaporwave Audi R8 2" class="ratio ratio-1x1">
        <img src="/assets/images/album/00019-4180582556.png" alt="Photo 4" class="rounded img-fluid">
      </a>
    </div>
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00020-4180582553.png" data-title="Face-Off 1" class="ratio ratio-1x1">
        <img src="/assets/images/album/00020-4180582553.png" alt="Photo 5" class="rounded img-fluid">
      </a>
    </div>
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00022-4180582555.png" data-title="Face-Off 2" class="ratio ratio-1x1">
        <img src="/assets/images/album/00022-4180582555.png" alt="Photo 6" class="rounded img-fluid">
      </a>
    </div>
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00032-2883628537.png" data-title="The Rise" class="ratio ratio-1x1">
        <img src="/assets/images/album/00032-2883628537.png" alt="Photo 7" class="rounded img-fluid">
      </a>
    </div>
  </div>
</div>

<!-- Bootstrap Modal -->
<div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header bg-secondary">
        <h3 class="modal-title" id="modalTitle"></h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <img src="" alt="" id="modalImage" class="img-fluid w-100 mx-auto">
    </div>
  </div>
</div>