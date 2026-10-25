---
title: Nextflow workflows
---

# Nextflow workflows

Nextflow can coordinate reproducible multi-step analyses on supported HPC systems.

```bash
nextflow -version
```

A site-specific configuration can use the `slurm` executor:

```groovy
process.executor = 'slurm'
```

Use a validated site profile with approved queues, resource limits, containers and storage paths.
