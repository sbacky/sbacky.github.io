---
layout: post
title:  "Tax Preparing Software"
date:   2023-10-21 00:00:00 -0700
author: Neil Crum
categories: Software
---

I was recently inspired to develop my own Tax Preparing Software to prepare individual tax returns. The application runs directly in the users web browser at http://localhost:5000. The backend is written in python and uses Flask to handle the local server deployment. The frontend is written mostly in JS with CSS to style the graph and nodes and HTML is dynamically generated and injected into an index file.

At this time, the application can only handle processing a 1040 form. I want to set up Modern e-File capabilities, but the process to receive the authentication credentials and XML schemas from the IRS requires a little too much of me at this time. Once I get more of my ducks in a line, I plan on applying to become a certified tax preparing software vendor to market my software to tax professionals.

## Node-Based Modular Tax Preparing Software

Tax preparing is a complex process that requires multiple steps. Each step may or may not be required to process a return. In fact, each type of return, generally, has a set of steps they follow to be processed. 

These 'steps' can be seen as nodes on a graph that data must travel to in order for a return to be processed. Unnecesary steps should either not be on the graph or not be travelled to. In this way, a tax return can be prepared with only the minimal amount of nodes present on a graph.

## Inspiration

ComfyUI for Stable Diffusion AI image generation works in this exact way. Each step in the process to generate an image with AI is converted into a node. Users add nodes to the graph based on the type of image being generated. In this way, an image is generated using only the minimal amount of nodes needed to generate an image.

ComfyUI uses a node based javascript library called LiteGraph JS. LiteGraph is a javascript library used to implement node-based web applications. I have seen LiteGraph used for graphic design, audio design, and recently AI image generation. But I have not seen it used to transform something mundane like the tax preparing process into a node-based modular process.

## Other 'Node-Based' or 'Modular' Tax Preparing Software

There are other node-based and/or modular tax preparing software, but none of them offer the ability to prepare a return while only having the minimum amount of nodes/modules present on the UI. In addition, my software provides a powerful way to visualize how a tax return is prepared unlike any other software.
