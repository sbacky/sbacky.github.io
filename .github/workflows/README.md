# GitHub Actions Workflow for Jekyll Site

This directory contains the GitHub Actions Workflow for building, reporting, and deploying our Jekyll site to GitHub Pages.

## Files

- `jekyll_build_and_deploy.yml`: This file contains the workflow to build the Jekyll site, report the build status, and deploy it to GitHub Pages.

## Workflow Steps

1. **Build**: Checks out the code and builds the site using Jekyll.
2. **Report Build Status**: Reports the build status to a specified API endpoint.
3. **Deploy**: Deploys the built site to GitHub Pages.
