# Guide to Using al-folio (Updated)

This guide provides a concise overview of how to set up, customize, and deploy the **al-folio** Jekyll theme for academics.

<xaiArtifact artifact_id="6b3bfad9-cb76-42b1-93bb-d99a72ce9dd3" artifact_version_id="efc27777-cf26-4d19-9603-5f795d5f055a" title="README.md" contentType="text/markdown">

# Guide to Using al-folio

This guide provides a concise overview of how to set up, customize, and deploy the **al-folio** Jekyll theme for academics.

## Getting Started

1. **Prerequisites**:
   - Basic knowledge of [Jekyll](https://jekyllrb.com/) and GitHub Pages.
   - Install Ruby, Bundler, and Jekyll. Refer to [Jekyll's installation guide](https://jekyllrb.com/docs/installation/).
   - A GitHub account for hosting.

2. **Fork the Repository**:
   - Go to the [al-folio GitHub repository](https://github.com/alshedivat/al-folio).
   - Click **Fork** to create a copy under your GitHub account.

3. **Clone the Repository**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/al-folio.git
   cd al-folio
   ```

4. **Install Dependencies**:
   - Run the following to install required Ruby gems:
     ```bash
     bundle install
     ```

5. **Run Locally**:
   - Start the Jekyll server to preview your site:
     ```bash
     bundle exec jekyll serve
     ```
   - Open `http://localhost:4000` in your browser.

## Deploying

1. **GitHub Pages**:
   - Rename your repository to `YOUR-USERNAME.github.io` or create a branch named `gh-pages`.
   - Push changes to GitHub:
     ```bash
     git add .
     git commit -m "Initial setup"
     git push origin main
     ```
   - Enable GitHub Pages in your repository settings under **Pages** > **Source** > Select `main` or `gh-pages`.

2. **Change the Branch for Deployment**:
   - To deploy using the `gh-pages` branch, create and switch to it:
     ```bash
     git checkout -b gh-pages
     git push origin gh-pages
     ```
   - In your GitHub repository, go to **Settings** > **Pages** > **Source**, and select the `gh-pages` branch as shown below:
     ![GitHub Pages Branch Selection](/assets/img/deploy_page_branch.jpg)
   - Alternatively, you can go to this URL directly to change the branch: `https://github.com/YOUR-USERNAME/al-folio/settings/pages`.

3. **Custom Domain (Optional)**:
   - Add a `CNAME` file in the root directory with your domain (e.g., `yourdomain.com`).
   - Update DNS settings with your domain provider.

For detailed instructions, see [INSTALL.md](https://github.com/alshedivat/al-folio/blob/main/INSTALL.md).

## Customizing

1. **Configuration**:
   - Edit `_config.yml` to set site-wide settings (e.g., title, name, theme color, social media links).
   - Example:
     ```yaml
     title: Your Name
     email: your.email@example.com
     url: https://yourusername.github.io
     ```

2. **Homepage**:
   - Update `_pages/about.md` for your bio and profile picture.
   - Modify `_data/news.yml` to add news items displayed on the homepage.

3. **CV**:
   - Edit `assets/json/resume.json` (JSONResume format) or `_data/cv.yml` for your CV content.
   - Preview at `/cv/`.

4. **Publications**:
   - Update `_bibliography/papers.bib` with your BibTeX entries.
   - Customize display in `_pages/publications.md`.
   - Add PDFs to `assets/pdf/` and link them in BibTeX entries with the `pdf` field.

5. **Projects**:
   - Add project entries in `_projects/` as Markdown files.
   - Configure in `_pages/projects.md` for a grid display.

6. **Theming**:
   - Change the theme color by editing `--global-theme-color` in `_sass/_themes.scss`.
   - Available colors are listed in `_sass/_variables.scss`.

For more details, refer to [CUSTOMIZE.md](https://github.com/alshedivat/al-folio/blob/main/CUSTOMIZE.md).

## Key Features

- **Light/Dark Mode**: Auto-detects user preference or toggles via the sun/moon icon.
- **Publications**: Auto-generated from BibTeX files, customizable via `_config.yml`.
- **Collections**: Organize content (e.g., news, projects) in `_config.yml` and corresponding folders.
- **Layouts**: Supports Distill-style posts, MathJax for math, and syntax highlighting.
- **Media**: Embed photos, audio, and video using Bootstrap’s grid system.
- **GitHub Stats**: Display GitHub repos and stats on `/repositories/` by editing `_data/repositories.yml`.
- **Social Media Previews**: Enable with `serve_og_meta: true` in `_config.yml` and set `og_image`.
- **RSS Feed**: Accessible at `/feed.xml`.

## Troubleshooting

- Check [FAQ.md](https://github.com/alshedivat/al-folio/blob/main/FAQ.md) for common issues.
- Ensure all dependencies are installed and Ruby versions are compatible.
- Verify GitHub Pages settings if the site doesn’t deploy.

## Contributing

- Submit bug fixes or minor improvements via PR to the `main` branch.
- For major changes, open an issue first. See [CONTRIBUTING.md](https://github.com/alshedivat/al-folio/blob/main/CONTRIBUTING.md).

## Support

- Join the community by adding your site to the user list via a PR.
- For questions, open an issue or check the [al-folio GitHub discussions](https://github.com/alshedivat/al-folio/discussions).

This guide covers the essentials to get your **al-folio** site up and running, including deploying to the `gh-pages` branch. Explore the full documentation for advanced features and customization options.
