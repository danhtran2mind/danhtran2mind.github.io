---
layout: projects
title: Viet SpeechT5-TTS finetuning 🔈
description: Vietnamese TTS model fine‑tuned, male/female voices, Gradio demo.
# img: assets/img/thumbnail.png
img: assets/images/projects/Viet-SpeechT5-TTS-finetuning/thumbnail.jpg
importance: 3
category: Audio # Computer Vision, Natural Language Processing, Audio, Reinforcement Learning, Tabular
# related_publications: true
toc:
  sidebar: left
---
<!-- Load Data from GitHUb Repository -->

<!-- Include marked.js for Markdown parsing -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<!-- Container for README content -->
<div id="readme-content"></div>

<script>
// Define repository (hardcoded for this example; in a Jekyll template, use '{{ page.github_repo }}')
const github_repo = 'danhtran2mind/Viet-SpeechT5-TTS-finetuning';

// Construct URLs dynamically using github_repo
const baseUrl = `https://github.com/${github_repo}/blob/main/`;
const imgUrl = `https://raw.githubusercontent.com/${github_repo}/refs/heads/main/`;
const repoUrl = `https://raw.githubusercontent.com/${github_repo}/`;

// Continue with the rest of the script (e.g., branch setup, replaceRelativePaths function, fetchReadme, etc.)  
const branch = 'main'; // Try 'main' first, fallback to 'master'

let readmeUrl = `${repoUrl}${branch}/README.md`;

// Function to replace relative paths with absolute paths
function replaceRelativePaths(content, baseUrl, imgUrl) {
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const normalizedImgUrl = imgUrl.endsWith('/') ? imgUrl : `${imgUrl}/`;
  return content
    .replace(/\[([^\]]*)\]\((?!http)([^)]+)\)/g, (match, text, path) => {
      const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
      return `[${text}](${normalizedBaseUrl}${cleanPath})`;
    })
    .replace(/!\[(.*?)\]\((?!http)(.*?)\)/g, (match, alt, path) => {
      const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
      return `![${alt}](${normalizedImgUrl}${cleanPath})`;
    })
    .replace(/<img src="(?!http)([^"]+)"/g, (match, path) => {
      const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
      return `<img src="${normalizedImgUrl}${cleanPath}"`;
    })
    .replace(/<a href="(?!http)([^"]+)"/g, (match, path) => {
      const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
      return `<a href="${normalizedBaseUrl}${cleanPath}"`;
    });
}

// Function to fetch README with fallback to 'master' branch
function fetchReadme() {
  fetch(readmeUrl)
    .then(response => {
      console.log('Fetching README from:', readmeUrl);
      if (!response.ok) {
        if (response.status === 404 && branch === 'main') {
          console.warn(`README not found on 'main' branch, trying 'master' branch...`);
          readmeUrl = `${repoUrl}master/README.md`;
          return fetch(readmeUrl);
        }
        throw new Error(`Failed to fetch README: ${response.status} (${response.statusText})`);
      }
      return response.text();
    })
    .then(data => {
      if (!data) throw new Error('Empty README content');
      const absoluteData = replaceRelativePaths(data, baseUrl, imgUrl);
      const markdownHtml = marked.parse(absoluteData);
      const readmeContentDiv = document.getElementById('readme-content');
      readmeContentDiv.innerHTML = markdownHtml;

      // Add table-hover class to all tables
      const tables = readmeContentDiv.getElementsByTagName('table');
      for (let table of tables) {
        table.classList.add('table-hover');
      }

      // Add styles to images (uncommented and refined)
      const images = readmeContentDiv.getElementsByTagName('img');
      for (let img of images) {
        img.style.maxWidth = '50rem';
        img.style.height = 'auto';
      }
    })
    .catch(error => {
      console.error('Error fetching README:', error);
      document.getElementById('readme-content').innerHTML = `
        <p>Error loading README content: ${error.message}</p>
        <p>Please verify the repository at <a href="https://github.com/${github_repo}">GitHub</a>.</p>
        <p>Check if README.md exists in the 'main' or 'master' branch.</p>
      `;
    });
}

// Execute fetch
fetchReadme();
</script>

## More Information

For more insights and information, please take a look at this link: [![GitHub Repo - danhtran2mind/Anime-Super-Resolution](https://img.shields.io/badge/GitHub_Repo-danhtran2mind%2FViet--SpeechT5--TTS--finetuning-blue?logo=github)](https://github.com/danhtran2mind/Viet-SpeechT5-TTS-finetuning)