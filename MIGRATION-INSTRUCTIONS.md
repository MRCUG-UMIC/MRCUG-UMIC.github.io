# Deploy to the existing MRCUG-UMIC GitHub Pages repository

Destination: https://github.com/MRCUG-UMIC/MRCUG-UMIC.github.io
Public website: https://mrcug-umic.github.io/

## Safe migration
1. In GitHub, create a branch named `docusaurus-blueberry` from `main` before making changes.
2. Upload the **contents** of this package to the repository root on that branch, not into a nested folder. Preserve `.github/workflows/deploy.yml` (hidden folder).
3. Remove the old `_config.yml` from the new branch; it belongs to the previous Jekyll website. Preserve README.md as desired.
4. Open a pull request into `main` and review changes. The live site remains unchanged until merging.
5. In repository Settings > Pages, select **GitHub Actions** as the build and deployment source.
6. Merge the pull request. In Actions, verify `Build and deploy Docusaurus` succeeds.
7. Visit https://mrcug-umic.github.io/ and https://mrcug-umic.github.io/docs/getting-started/overview.

Note: GitHub browser upload can skip dot-folders. If so, create `.github/workflows/deploy.yml` using GitHub's Create new file interface and paste its contents.

The published site will replace the previous Jekyll landing page. Documentation is sample content and must be checked against real UMIC HPC configuration before publishing operational instructions.

Build verification: Not run here; GitHub Actions will install dependencies and build on first deployment.
