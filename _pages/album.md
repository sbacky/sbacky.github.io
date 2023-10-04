---
layout: page
title: Album
permalink: /album/
stylesheet: /assets/main.scss
---

## AI Art

I like to create AI images with [Stable Diffusion XL](https://stability.ai/stable-diffusion). I use a combination of [SD-WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) and [ComfyUI](https://github.com/comfyanonymous/ComfyUI) to generate images. When I find an image I like, I take it into inpaint and touch up any minor flaws. Then I upscale the image to the desired resolution. If you have any tips you would like to share, please send me an email!

<!-- Bootstrap 5 Photo Album -->
<div class="container-xl">
  <!-- Row -->
  <div class="row g-2">
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00001-1898130605.png" class="ratio ratio-1x1">
        <img src="\assets\images\album\00001-1898130605.png" alt="Photo 1" data-title="Elven World Tree" class="rounded img-fluid">
      </a>
    </div>
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00002-1898130606.png" class="ratio ratio-1x1">
        <img src="\assets\images\album\00020.jpg" alt="Photo 2" data-title="Floating Lunar City" class="rounded img-fluid">
      </a>
    </div>
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00017-4180582554.png" class="ratio ratio-1x1">
        <img src="\assets\images\album\00017-4180582554.png" alt="Photo 3" data-title="Vaporwave Audi R8 1" class="rounded img-fluid">
      </a>
    </div>
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00019-4180582556.png" class="ratio ratio-1x1">
        <img src="\assets\images\album\00019-4180582556.png" alt="Photo 4" data-title="Vaporwave Audi R8 2" class="rounded img-fluid">
      </a>
    </div>
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00020-4180582553.png" class="ratio ratio-1x1">
        <img src="\assets\images\album\00020-4180582553.png" alt="Photo 5" data-title="Face-Off 1" class="rounded img-fluid">
      </a>
    </div>
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00022-4180582555.png" class="ratio ratio-1x1">
        <img src="\assets\images\album\00022-4180582555.png" alt="Photo 6" data-title="Face-Off 2" class="rounded img-fluid">
      </a>
    </div>
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00032-2883628537.png" class="ratio ratio-1x1">
        <img src="\assets\images\album\00032-2883628537.png" alt="Photo 7" data-title="The Rise" class="rounded img-fluid">
      </a>
    </div>
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00032-2883628537.png" class="ratio ratio-1x1">
        <img src="\assets\images\album\ComfyUI_00007_.png" alt="Photo 7" data-title="White Tiger" class="rounded img-fluid">
      </a>
    </div>
    <div class="col-md-4">
      <a href="#imageModal" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="/assets/images/album/00032-2883628537.png" class="ratio ratio-1x1">
        <img src="\assets\images\album\ComfyUI_00005_.png" alt="Photo 7" data-title="White Tiger" class="rounded img-fluid">
      </a>
    </div>
  </div>
</div>
<!-- Modal & Carousel -->
<div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header bg-secondary">
        <h3 class="modal-title" id="modalTitle"></h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="carousel slide" id="imageCarousel">
        <!-- Carousel items -->
        <div class="carousel-inner" id="carousel-inner">
          <!-- Loop through images and create carousel items -->
          <!-- e.g., <div class="carousel-item active"><img src="image1.jpg" class="d-block w-100" alt="..."></div> -->
        </div>
        <!-- Controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </button>
      </div>
    </div>
  </div>
</div>
