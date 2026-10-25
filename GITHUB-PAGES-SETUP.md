# Publish this HPC Docusaurus website on GitHub Pages

No local Node.js or npm installation is required.

1. Create a **public** GitHub repository (for example `hpc-research-portal`), selecting **Add a README** to initialize it.
2. On your computer, unzip this package. Open the repository on GitHub, select **Add file → Upload files**, and upload **the contents** of `blueberry-hpc-github-pages`, not the enclosing folder. GitHub's browser uploader may not include hidden folders such as `.github`; if so, use step 3.
3. **Required**: Ensure `.github/workflows/deploy.yml` exists on the repository's `main` branch. If it did not upload, use **Add file → Create new file**, type `.github/workflows/deploy.yml` as the filename, and paste the content from the local file, then commit.
4. Go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. Go to **Actions → Build and deploy Docusaurus** and check the run. Use **Run workflow** if needed.
6. Your website should appear at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/` after deployment completes.

The workflow automatically detects the GitHub username/organization and repository name and sets the correct site URL and base path. This is for standard GitHub *project* Pages URLs. For a custom domain or a username.github.io root repository, update SITE_URL/BASE_URL accordingly.

To edit documentation, use GitHub's file editor for Markdown files in `docs/`, and commit to `main` to redeploy.

Before public launch: replace placeholder cluster specs, contacts, examples and policies with institution-approved information. This is a public website; do not publish login credentials, sensitive hostnames or user data.

If Actions fails, open the failed job and read the Build Docusaurus step. The dependency installation is performed in GitHub Actions, not on your computer.
