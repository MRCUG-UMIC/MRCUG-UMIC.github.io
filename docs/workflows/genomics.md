---
title: Genomics and bioinformatics
---

# Genomics and bioinformatics

HPC can support read QC, mapping, variant calling and large-scale population genomics.

## Example: inspect available tools

```bash
module avail 2>&1 | grep -Ei "samtools|bcftools|fastqc"
```

## Reproducibility checklist

- Record reference genome build and software versions.
- Keep raw data read-only where possible.
- Store scripts in version control.
- Submit computationally intensive steps via SLURM.
- Validate data privacy and consent restrictions.
