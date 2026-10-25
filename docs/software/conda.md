---
title: Conda and Python environments
---

# Conda and Python environments

Where permitted, isolated environments help keep dependencies reproducible.

```bash
conda create -n analysis python=3.11 -y
conda activate analysis
python --version
conda env export --from-history > environment.yml
```

Use institution-recommended environment managers and package mirrors. Avoid installing large environments into quota-limited home directories.
