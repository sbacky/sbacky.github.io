---
layout: post
title:  "Stable Diffusion"
date:   2023-10-01 00:00:00 -0700
author: Neil Crum
categories: stable diffusion
---
## What is Stable Diffusion?

Stable Diffusion (SD) is an advanced AI tool for image generation and modification made by [Stability AI](stability-ai). It allows users to create detailed images with a short prompt called **text-to-image**. The tool also offers features like **inpainting**, **outpainting**, and **image-to-image** prompting for various image manipulation tasks.

Stable Diffusion XL (SDXL) is an updated and enhanced version of stable diffusion and is also provided by Stability AI. SDXL has much of the same offerings as SD, but where it differs is in improved image composition and face generation and larger base images (1024 x 1024).

Stable Diffusion can be downloaded and ran locally, ran on a cloud service like Google Collab, or accessed through a 3rd party platform or application like NightCafe and DreamStudio. I run stable diffusion locally on my Desktop and from here on, I will assume you have the same setup.

### Requirements

Your GPU will be the most important part here. Recommended to use an NVIDIA GPU but Stable Diffusion can work with AMD, Intel and Apple M1 GPU's. However, if you are using a GPU other than an NVIDIA one, you may need to run Stable Diffusion suboptimally. 

* **OS:** Windows, Linux, MacOS
* **CPU:** No specific requirement. Most modern CPU will work, just make sure it is compatible with your GPU.
* **RAM:** At least 16GB of RAM. Important but not as important as GPU VRAM.
* **GPU:** Recommended to use NVIDIA GPU. AMD, Intel and Apple M1 GPUs will work but your performance may be suboptimal.
    * **GeForce GTX 1050 Ti 4GB:** Absolute minimum VRAM to get images to generate but will probably have to run suboptimally
    * **GeForce RTX 2060 6GB:** Better performance than 4GB of VRAM but may still have to run suboptimally
    * **GeForce RTX 3060 Ti 8GB:** Minimum required VRAM to run with optimal settings
    * **GeForce RTX 3060 12GB:** Comfortable performance for most use cases, including LoRA training.
    * **GeForce RTX 4060 Ti 16GB:** Generate images faster and in larger batches compared to 12GB.
    * **GeForce RTX 3090 24GB:** Recommended for model fine-tuning or training.

I have listed the requirements above but I will go over them in more detail here. Your GPU is the most important component to your setup when running Stable Diffusion locally. I was able to get Stable Diffusion XL up and running with an AMD RX 6650 XT 8GB GPU with 16GB of RAM and using Windows 11 OS. I had to run it very suboptimally and it took around 10 minutes to generate a single image. I switched to an NVIDIA RTX 4070 12GB GPU and upgraded to 32GB of RAM. I can now run Stable Diffusion much more optimally and it takes about 10 seconds to generate a single image.

*Image generation times will vary depending on sampling method and number of steps*

### Download

[SD-WebUI](sd-webui) and [ComfyUI](comfyui) are the two most popular ways to run Stable Diffusion locally. Both applications are open source GUI's for Stable Diffusion that run right in your browser. They are well documented and have large supporting communities on Github, Discord, and Reddit. There are other GUI's available, but they do not have as extensive documentation or community support as SD-WebUI or ComfyUI.

If you are on Windows, SD-WebUI and ComfyUI have automatic installers. Otherwise you will need to read the documentation for your specific setup.

SD-Webui has a much more intuitive user interface that simplifies many of the configurations for image generation. ComfyUI is a node or modular based user interface similar to creating API's in Mulesoft or Actions on github. I recommend starting on SD-WebUI if you're unfamiliar with modular based user interfaces and then moving to ComfyUI once you have a solid grasp of how stable diffusion works.

## Image generation

For the most part, images are generated in 2 different ways: text-to-image and image-to-image. There are other ways to generate images, but they build off text-to-image and image-to-image. So it's important to understand how these techniques work first, before moving onto more advanced image generation techniques. Stable Diffusion image generation has a steep learning curve, but I have found the community to be incredibly helpful. 

### text-to-image

Text to image is the ability to turn a short descriptive prompt into a detailed image. The prompt can be a descriptive sentance, a comma separated list of tags, or both. I have found prompts for text-to-image work best with a combination of both but feel free to experiment to find what best suits your use case.

Example prompt: *Cinematic photo {prompt}. 35mm, film, bokeh, professional, 4k, highly detailed*

### image-to-image

Image to image is the ability to take an image (AI generated or not) and generate an image based on that image. There are many more advanced options here to configure and control how the new image is generated from the old image. But to start, you can include a prompt, same as text-to-image and if your starting image was AI generated, you can even use the same exact prompt used to generate the image.

[stability-ai]: https://stability.ai/
[sd-webui]: https://github.com/AUTOMATIC1111/stable-diffusion-webui
[comfyui]: https://github.com/comfyanonymous/ComfyUI