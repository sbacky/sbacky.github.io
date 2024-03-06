---
layout: page
title: Shipping Solutions
description: Offering comprehensive third-party logistics solutions, including warehousing, freight forwarding, and supply chain management.
keywords: third-party logistics, 3PL services, warehousing, freight forwarding, supply chain management
permalink: /logistics-services/
stylesheet: /assets/main.scss
---
<!-- Overview -->
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div id="overviewCarousel" class="carousel slide" data-bs-ride="carousel">
                <!-- Indicators -->
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#overviewCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#overviewCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#overviewCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <!-- Slides -->
                <div class="carousel-inner">
                    {% for slide in site.data.slides %}
                    <div class="carousel-item {% if forloop.first %}active{% endif %}">
                        <div class="ratio ratio-1x1">
                            <img src="{{ slide.image }}" class="img-fluid rounded mx-auto d-block" alt="{{ slide.name }}">
                        </div>
                        <div class="carousel-caption fs-4-fluid bg-black opacity-75">
                            <h3>{{ slide.name }}</h3>
                            <p>{{ slide.description }}</p>
                        </div>
                    </div>
                    {% endfor %}
                </div>
                <!-- Controls -->
                <button class="carousel-control-prev" type="button" data-bs-target="#overviewCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#overviewCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>    
    </div>
</div>

<!-- Services -->
<section id="services">
    <div class="container">
        <h2 class="text-center mt-5 mb-3">Our Services</h2>
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 gy-3 g-md-2">
            {% for service in site.data.services %}
            <div class="col">
                <div class="card" id="{{ service.id }}">
                    <img src="{{ service.image }}" class="card-img-top" alt="{{ service.name }}">
                    <div class="card-body">
                        <h3 class="card-title">{{ service.name }}</h3>
                        <h5 class="card-subtitle text-body-secondary mb-2">{{ service.caption }}</h5>
                        <div class="card-text">{{ service.description }}</div>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between">
                            <a href="#" class="btn btn-primary">Learn More...</a>
                            <a href="#contact" class="btn btn-secondary">Contact Us!</a>
                        </div>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<!-- About -->
<section id="about">
    <div class="container">
        <h2 class="text-center mt-5 mb-3">About Us</h2>
        <div class="row gy-2">
            <div class="col-md-6">
                <img src="\assets\images\shipping\customer-service-3.png" alt="About us" class="img-fluid rounded">
            </div>
            <div class="col-md-6">
                {% for item in site.data.about %}
                <p class="fs-5-fluid">{{ item.content }}</p>
                <ul class="list-group list-group-flush">
                    {% for bullet in item.bulletPoints %}
                    <li class="list-group-item fs-3-fluid border border-0">
                        <div class="row row-cols-auto">
                            <div class="col">
                                <!-- Icon -->
                                <i class="{{ bullet.icon }}"></i>
                            </div>
                            <div class="col">
                                <!-- Content -->
                                <h3>{{ bullet.title }}</h3>
                                <p class="text-body-secondary fs-5-fluid">{{ bullet.subtitle }}</p>
                            </div>
                        </div>
                    </li>
                    {% endfor %}
                </ul>
                {% endfor %}
            </div>
        </div>
    </div>
</section>

<!--- Contact -->
<section id="contact">
    <div class="container">
        <h2 class="text-center mt-5 mb-3">Contact Us</h2>
        <div class="row gy-2">
            <div class="col-md-6 order-md-1 order-first">
                <div class="card border border-0">
                    <img src="\assets\images\shipping\expedited-shipping-2.png" alt="Expedited Shipping" class="card-img opacity-50">
                    <div class="card-img-overlay">
                        <div class="card-text">
                            <p class="fs-5-fluid">Ready to optimize your logistics operations? Contact us today to discover how our tailored logistics solutions can transform your supply chain. Our team is ready to provide the support and expertise your business needs to thrive.</p>
                        </div>
                        <div class="card-text">
                            <ul class="list-group">
                                {% for contact in site.data.contacts %}
                                <li class="list-group-item bg-transparent fs-3-fluid border border-0">
                                    <div class="row row-cols-auto">
                                        <div class="col">
                                            <!-- Icon -->
                                            <i class="{{ contact.icon }}"></i>
                                        </div>
                                        <div class="col">
                                            <!-- Content -->
                                            <h3>{{ contact.type }}</h3>
                                            <p class="text-body-secondary fs-5-fluid">{{ contact.data }}</p>
                                        </div>
                                    </div>
                                </li>
                                {% endfor %}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 order-md-0 order-last">
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" required data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="tooltip-info" data-bs-title="Enter your first and last name.">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" required data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="tooltip-info" data-bs-title="Enter your email address.">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="tel" class="form-control" id="phone" required data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="tooltip-info" data-bs-title="Enter your phone number.">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" id="message" rows="5" required data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="tooltip-info" data-bs-title="Enter a brief description and any additional details."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- FAQs -->
<section id="faq">
    <div class="container">
        <h2 class="text-center mt-5 mb-3">Frequently Asked Questions</h2>
        <div class="accordion" id="faqAccordion">
            {% for faq in site.data.faqs %}
            <div class="accordion-item">
                <h2 class="accordion-header" id="{{ faq.headingId }}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#{{ faq.collapseId }}" aria-expanded="true" aria-controls="{{ faq.collapseId }}">
                        {{ faq.question }}
                    </button>
                </h2>
                <div id="{{ faq.collapseId }}" class="accordion-collapse collapse show" aria-labelledby="{{ faq.headingId }}" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        {{ faq.answer }}
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>
