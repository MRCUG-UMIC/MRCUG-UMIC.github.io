---
title: Conda and Python environments
---

# Conda and Python environments

Conda environments help keep dependencies reproducible.

```bash
conda create -n analysis python=3.11 -y
conda activate analysis
python --version
conda env export --from-history > environment.yml
```

:::warning 
Use institution-recommended environment managers and package mirrors, where possile. Avoid installing large environments into home directories as they are quota-limited. Large environments can be installed in designated project directories. 
:::

