---
layout: projects
title: Viet Glow-TTS Finetuning 📢
description: Viet Glow-TTS transforms text into natural, high-quality Vietnamese speech.
img: assets/images/projects/Viet-Glow-TTS-finetuning/thumbnail.jpg
importance: 4
category: Audio
toc:
  sidebar: left
---
<!-- Load Data from GitHub Repository -->

<!-- Include marked.js for Markdown parsing -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<!-- Container for README content -->
<div id="readme-content"></div>

<script>
// Define repository (hardcoded for this example; in a Jekyll template, use '{{ page.github_repo }}')
const github_repo = 'danhtran2mind/Viet-Glow-TTS-finetuning';

// Construct URLs dynamically using github_repo
const baseUrl = `https://github.com/${github_repo}/blob/main/`;
const imgUrl = `https://raw.githubusercontent.com/${github_repo}/refs/heads/main/`;
const repoUrl = `https://raw.githubusercontent.com/${github_repo}/`;

// Continue with the rest of the script (e.g., branch setup, replaceRelativePaths function, fetchReadme, etc.)  
const branch = 'main'; // Try 'main' first, fallback to 'master'

let readmeUrl = `${repoUrl}${branch}/README.md`;

// Function to replace relative paths with absolute paths, preserving specific image attributes
function replaceRelativePaths(content, baseUrl, imgUrl) {
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const normalizedImgUrl = imgUrl.endsWith('/') ? imgUrl : `${imgUrl}/`;
  
  // Define a flag to track whether we are in the badge section
  let inBadgeSection = false;

  return content
    .replace(/^<!-- Start Introduce Badge -->$/gm, () => {
      inBadgeSection = true;
      return '<!-- Start Introduce Badge -->';
    })
    .replace(/^<!-- End Introduce Badge -->$/gm, () => {
      inBadgeSection = false;
      return '<!-- End Introduce Badge -->';
    })
    .replace(/\[([^\]]*)\]\((?!http)([^)]+)\)/g, (match, text, path) => {
      const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
      return `[${text}](${normalizedBaseUrl}${cleanPath})`;
    })
    .replace(/!\[(.*?)\]\((?!http)(.*?)\)/g, (match, alt, path) => {
      const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
      if (inBadgeSection) {
        // Preserve original image attributes in badge section
        return `![${alt}](${normalizedImgUrl}${cleanPath})`;
      } else {
        // Apply max-width and height auto for non-badge images
        return `<img src="${normalizedImgUrl}${cleanPath}" alt="${alt}" style="max-width: 50rem; height: auto;">`;
      }
    })
    .replace(/<img src="(?!http)([^"]+)"([^>]*)/g, (match, path, attributes) => {
      const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
      if (inBadgeSection) {
        // Preserve original image attributes in badge section
        return `<img src="${normalizedImgUrl}${cleanPath}"${attributes}`;
      } else {
        // Apply max-width and height auto, preserving other attributes
        const attrWithoutStyle = attributes.replace(/\s*style="[^"]*"/, '');
        return `<img src="${normalizedImgUrl}${cleanPath}"${attrWithoutStyle} style="max-width: 50rem; height: auto;"`;
      }
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

For more insights and information, please take a look at this link: [![GitHub Repo - danhtran2mind/Anime-Super-Resolution](https://img.shields.io/badge/GitHub_Repo-danhtran2mind%2FViet--Glow--TTS--finetuning-blue?logo=github)](https://github.com/danhtran2mind/Viet-Glow-TTS-finetuning)