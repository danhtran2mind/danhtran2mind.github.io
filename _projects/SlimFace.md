---
layout: projects
title: "SlimFace: Efficient Face Recognition 👦"
description: SlimFace is a lightweight face recognition framework for edge devices.
# img: assets/img/thumbnail.png
# img: assets/images/projects/SlimFace/thumbnail.jpg
importance: 1
category: Computer Vision # Computer Vision, Natural Language Processing, Audio, Reinforcement Learning, Tabular
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
// Define repository
const github_repo = 'danhtran2mind/SlimFace';

// Construct URLs dynamically using github_repo
const baseUrl = `https://github.com/${github_repo}/blob/main/`;
const imgUrl = `https://raw.githubusercontent.com/${github_repo}/main/`;
const repoUrl = `https://raw.githubusercontent.com/${github_repo}/`;

// Continue with the rest of the script (e.g., branch setup, replaceRelativePaths function, fetchReadme, etc.)
const branch = 'main'; // Try 'main' first, fallback to 'master'

let readmeUrl = `${repoUrl}${branch}/README.md`;

// Function to replace relative paths with absolute paths
function replaceRelativePaths(content, baseUrl, imgUrl) {
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const normalizedImgUrl = imgUrl.endsWith('/') ? imgUrl : `${imgUrl}/`;
  let updatedContent = content
    // Replace relative Markdown links (e.g., [text](path))
    .replace(/\[([^\]]*)\]\((?!http)([^)]+)\)/g, (match, text, path) => {
      const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
      return `[${text}](${normalizedBaseUrl}${cleanPath})`;
    })
    // Replace relative image paths in Markdown syntax (e.g., ![alt](path))
    .replace(/!\[(.*?)\]\((?!http)(.*?)\)/g, (match, alt, path) => {
      const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
      return `![${alt}](${normalizedImgUrl}${cleanPath})`;
    })
    // Replace relative paths in HTML <img> tags (e.g., <img src="path">)
    .replace(/<img src="(?!http)([^"]+)"/g, (match, path) => {
      const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
      return `<img src="${normalizedImgUrl}${cleanPath}"`;
    })
    // Replace relative paths in HTML <a> tags (e.g., <a href="path">)
    .replace(/<a href="(?!http)([^"]+)"/g, (match, path) => {
      const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
      return `<a href="${normalizedBaseUrl}${cleanPath}"`;
    });
  return updatedContent;
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
        throw new Error(`Fetch failed with status ${response.status} (${response.statusText})`);
      }
      return response.text();
    })
    .then(data => {
      if (!data) throw new Error('Empty README content');
      const absoluteData = replaceRelativePaths(data, baseUrl, imgUrl);
      const markdownHtml = marked.parse(absoluteData);
      const readmeContentDiv = document.getElementById('readme-content');
      readmeContentDiv.innerHTML = markdownHtml;
      // Add style to all img tags in readme-content
      const images = readmeContentDiv.getElementsByTagName('img');
      for (let img of images) {
        img.setAttribute('style', 'max-width: 40rem !important; height: auto !important;');
      }
    })
    .catch(error => {
      console.error('Error fetching README:', error);
      document.getElementById('readme-content').innerHTML = `
        <p>Error loading README content: ${error.message}</p>
        <p>Please verify the repository and branch name at <a href="https://github.com/danhtran2mind/Anime-Super-Resolution">GitHub</a>.</p>
        <p>Check if README.md exists in the 'main' or 'master' branch.</p>
      `;
    });
}

// Execute fetch
fetchReadme();
</script>

## More Information

For comprehensive details and further information, please visit the following link: [![GitHub Repo - danhtran2mind/Anime-Super-Resolution](https://img.shields.io/badge/GitHub_Repo-danhtran2mind%2FSlimFace-blue?logo=github)](https://github.com/danhtran2mind/SlimFace/blob/main/README.md)