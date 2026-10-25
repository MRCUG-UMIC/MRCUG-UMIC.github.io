---
title: GPU computing
---

# GPU computing

GPU resources may not be available on every cluster. Check with administrators before using this example.

```bash
sinfo -o "%P %G %D"
```

If supported by the site, a GPU request may look like:

```bash
#SBATCH --gres=gpu:1
```

Check your cluster’s partition, account and GPU policies. Never assume GPU availability.
