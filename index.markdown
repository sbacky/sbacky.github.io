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
        {% for slide in site.data.slides.index %}
        <div class="carousel-item {% if forloop.first %}active{% endif %}">
          <div class="ratio ratio-16x9">
            <img src="{{ slide.image }}" class="img-fluid rounded" alt="{{ slide.name }}">
          </div>
          <div class="carousel-caption px-5 bg-black opacity-75 fs-4-fluid d-none d-md-block">
            <h3 class="fs-2-fluid">{{ slide.name }}</h3>
            <p>{{ slide.description }}</p>
          </div>
        </div>
        {% endfor %}
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
<section id="introduction" class="bg-light px-5 pt-5 pb-2">
  <div class="container text-center">
    <h1 class="intro-title display-4">Welcome, I'm Neil Crum</h1>
    <p class="intro-description lead">A place where technology meets imagination, enabling solutions that make a difference. Explore my portfolio to see how I apply software engineering principles to solve real-world problems, or dive into my AI-generated art album where art and technology blend seamlessly.</p>
  </div>
</section>

<!-- Headshot and Summary Section using Bootstrap -->
<section class="headshot-summary py-5">
  <div class="container">
    <div class="row gy-3">
      <div class="col-md-6">
        <div class="ratio ratio-1x1">
          <img src="assets\images\home\ComfyUI_00007_.png" alt="White Tiger" class="rounded img-fluid">
        </div>
      </div>
      <div class="col-md-6">
        <h2>About Me</h2>
        <p>Embarking on an exciting journey in software engineering, I initially honed my skills in Python to automate routine tasks. I further expanded my expertise by becoming a certified MuleSoft developer, specializing in integrating third-party applications with Salesforce. My technical arsenal now includes Java and SQL for backend server management.</p>
        <p>Outside of coding, I'm blessed with a supportive wife and a wonderful son. I'm passionate about basketball, AI and video games. My favorite NBA team is the Suns, but I keep up with other teams as well. I enjoy exploring the boundaries of AI productivity and I like to generate AI images with Stable Diffusion. I am a PC gamer and I play on console as well. I dont have a favorite video game at the momeent but I enjoy playing video games with my wife and son.</p>
        <a class="btn btn-info px-4 mt-3 fs-5 fw-semibold" href="/portfolio/" role="button">View My Portfolio</a>
      </div>
    </div>
  </div>
</section>
