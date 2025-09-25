---
layout: projects
title: Anime Super Resolution 🖼️
description: With background image
# img: assets/img/thumbnail.png
img: assets/images/projects/Anime-Super-Resolution/thumbnail.jpg
importance: 1
category: Computer Vision # Computer Vision, Natural Language Processing, Audio, Reinforcement Learning, Tabular
# related_publications: true
---

[![GitHub Stars](https://img.shields.io/github/stars/danhtran2mind/Anime-Super-Resolution?style=social&label=Repo%20Stars)](https://github.com/danhtran2mind/Anime-Super-Resolution/stargazers)
![Badge](https://hitscounter.dev/api/hit?url=https%3A%2F%2Fgithub.com%2Fdanhtran2mind%2FAnime-Super-Resolution&label=Repo+Views&icon=github&color=%236f42c1&message=&style=social&tz=UTC)


[![huggingface-hub](https://img.shields.io/badge/huggingface--hub-blue.svg?logo=huggingface)](https://huggingface.co/docs/hub)
[![torch](https://img.shields.io/badge/torch-blue.svg?logo=pytorch)](https://pytorch.org/)
[![Pillow](https://img.shields.io/badge/Pillow-blue.svg)](https://pypi.org/project/pillow/)
[![numpy](https://img.shields.io/badge/numpy-blue.svg?logo=numpy)](https://numpy.org/)
[![torchvision](https://img.shields.io/badge/torchvision-blue.svg?logo=pytorch)](https://pytorch.org/vision/stable/index.html)
[![diffusers](https://img.shields.io/badge/diffusers-blue.svg?logo=huggingface)](https://huggingface.co/docs/diffusers)
[![gradio](https://img.shields.io/badge/gradio-blue.svg?logo=gradio)](https://gradio.app/)
[![Built on Real-ESRGAN](https://img.shields.io/badge/Built%20on-xinntao%2FReal--ESRGAN-blue?style=flat&logo=github)](https://github.com/xinntao/Real-ESRGAN)
[![Built on Real-ESRGAN](https://img.shields.io/badge/Built%20on-ai--forever%2FReal--ESRGAN-blue?style=flat&logo=github)](https://github.com/ai-forever/Real-ESRGAN)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<div align="center">
  <img src="https://raw.githubusercontent.com/danhtran2mind/Anime-Super-Resolution/refs/heads/main/assets/thumbnail.jpg" alt="Thumbnail" width="700px"/>
</div>

## Introduction 🌟

Anime Super Resolution 🖼️ enhances anime-style images using a fine-tuned Real-ESRGAN model, optimized for clarity and detail. Built on the RealESRGAN_x4plus model, it leverages a private dataset of 27,052 high-resolution (1920x1080) anime frames 📸. The project offers tools for data processing, training, inference, and an interactive Gradio demo, accessible on platforms like Colab, Kaggle, and locally 🚀.

## Key Features ✨

-   **Anime-Specific Upscaling** 🎨: Fine-tuned Real-ESRGAN for high-quality anime image super-resolution.
    
-   **Large Anime Dataset** 📚: 27,052 high-res anime frames for robust training.
    
-   **Interactive Gradio Demo** 🖥️: Easy model testing via HuggingFace-hosted interface.
    
-   **Multi-Platform Support** 🌐: Runs on Colab, Kaggle, JupyterLab, and more.
    
-   **Data Processing Tools** 🛠️: Scripts for multiscale dataset creation and meta-info generation.
    
-   **Flexible Training/Inference** ⚙️: Customizable configurations for training and upscaling.
    
-   **Open-Source** 📖: MIT-licensed, built with PyTorch, NumPy, and Pillow.
    
-   **Local/Cloud Compatibility** ☁️: Supports local Gradio app and cloud-based execution.

## Notebook
This notebook provides a step-by-step guide to finetune the Real-ESRGAN model for enhancing anime-style images. It covers data preparation, model configuration, training, and evaluation, optimized for clarity and reproducibility.

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/danhtran2mind/Anime-Super-Resolution/blob/main/notebooks/anime-super-resolution.ipynb)
[![Open in SageMaker](https://studiolab.sagemaker.aws/studiolab.svg)](https://studiolab.sagemaker.aws/import/github/danhtran2mind/Anime-Super-Resolution/blob/main/notebooks/anime-super-resolution.ipynb)
[![Open in Deepnote](https://deepnote.com/buttons/launch-in-deepnote-small.svg)](https://deepnote.com/launch?url=https://github.com/danhtran2mind/Anime-Super-Resolution/blob/main/notebooks/anime-super-resolution.ipynb)
[![JupyterLab](https://img.shields.io/badge/Launch-JupyterLab-orange?logo=Jupyter)](https://mybinder.org/v2/gh/danhtran2mind/Anime-Super-Resolution/main?filepath=notebooks/anime-super-resolution.ipynb)
[![Open in Gradient](https://assets.paperspace.io/img/gradient-badge.svg)](https://console.paperspace.com/github/danhtran2mind/Anime-Super-Resolution/blob/main/notebooks/anime-super-resolution.ipynb)
[![Open in Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/danhtran2mind/Anime-Super-Resolution/main)
[![Open In Kaggle](https://kaggle.com/static/images/open-in-kaggle.svg)](https://www.kaggle.com/notebooks/welcome?src=https%3A%2F%2Fgithub.com%2Fdanhtran2mind%2FAnime-Super-Resolution/blob/main/notebooks/anime-super-resolution.ipynb)
[![View on GitHub](https://img.shields.io/badge/View%20on-GitHub-181717?logo=github)](https://github.com/danhtran2mind/Anime-Super-Resolution/blob/main/notebooks/anime-super-resolution.ipynb)

## Demonstration

### Interactive Demo

Explore the interactive demo hosted on HuggingFace:
[![HuggingFace Space Demo](https://img.shields.io/badge/HuggingFace-danhtran2mind%2FAnime--Super--Resolution-yellow?style=flat&logo=huggingface)](https://huggingface.co/spaces/danhtran2mind/Anime-Super-Resolution)

Below is a screenshot of the SlimFace Demo GUI:

<img src="https://raw.githubusercontent.com/danhtran2mind/Anime-Super-Resolution/refs/heads/main/assets/gradio_app_demo.jpg" alt="Anime-Super-Resolution Demo" height="600">

### Run Locally

To run the Gradio application locally at the default address `localhost:7860`, execute:

```bash
python apps/gradio_app.py
```

## More Information

For comprehensive details and further information, please visit the following link: [![GitHub Repo - danhtran2mind/Anime-Super-Resolution](https://img.shields.io/badge/GitHub_Repo-danhtran2mind%2FAnime--Super--Resolution-blue?logo=github)](https://github.com/danhtran2mind/Anime-Super-Resolution/blob/main/README.md)