---
title: Containers
---

# Containers

Apptainer is commonly used on HPC systems for reproducible software environments.

```bash
apptainer --version
apptainer exec analysis.sif python --version
```

Only use trusted, institution-approved container images. Check site-specific bind mounts and restrictions.
