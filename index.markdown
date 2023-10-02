---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Home
---
<!-- Hero Section with Carousel -->
<section class="hero">
  <div class="container">
    <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
      <!-- Indicators -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <!-- Slides -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="ratio ratio-16x9">
            <img src="assets\images\album\00002-1898130606.png" class="img-fluid" alt="Image 1">
          </div>
          <div class="carousel-caption">
            <div class="container">
              <h3 class="fs-1">Discover</h3>
              <p>Your Captivating Image 1 Description</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="ratio ratio-16x9">
            <img src="assets\images\album\00019-4180582556.png" class="img-fluid" alt="Image 2">
          </div>
          <div class="carousel-caption">
            <h3 class="fs-1">Explore</h3>
            <p>Your Stunning Image 2 Description</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="ratio ratio-16x9">
            <img src="assets\images\album\00022-4180582555.png" class="img-fluid" alt="Image 3">
          </div>
          <div class="carousel-caption">
            <h3 class="fs-1">Experience</h3>
            <p>Your Mesmerizing Image 3 Description</p>
          </div>
        </div>
      </div>
      <!-- Controls -->
      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
      <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
    </div>
  </div>
</section>

<!-- Introduction Section using Bootstrap -->
<section id="introduction" class="bg-light py-5">
  <div class="container text-center">
    <h1 class="intro-title display-4">Welcome, I'm Neil Crum</h1>
    <p class="intro-description lead">A place where technology meets imagination, enabling solutions that make a difference. Explore my portfolio to see how I apply software engineering principles to solve real-world problems, or dive into my AI-generated album where art and technology blend seamlessly.</p>
  </div>
</section>

<!-- Headshot and Summary Section using Bootstrap -->
<section class="headshot-summary py-5">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="ratio ratio-1x1">
          <img src="{{ 'assets\images\album\ComfyUI_00007_.png' | relative_url }}" alt="White Tiger" class="rounded img-fluid">
        </div>
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-start">
        <h2>About Me</h2>
        <p>Embarking on an exciting journey in software engineering, I initially honed my skills in Python to automate routine tasks. I further expanded my expertise by becoming a certified MuleSoft developer, specializing in integrating third-party applications with Salesforce. My technical arsenal now includes Java and SQL for backend server management.</p>
        <p>Outside of coding, I'm blessed with a supportive wife and a wonderful son. I'm passionate about basketball and video games. My favorite NBA team is the Suns, but I keep up with other teams as well. I am a PC gamer first and I play console as well. I dont have a favorite video game at the momeent but I enjoy playing video games with my wife and son.</p>
        <a class="btn btn-info mt-3" href="/portfolio/">View My Portfolio</a>
      </div>
    </div>
  </div>
</section>
