---
title: Frequently asked questions
---

# Frequently asked questions

### Can I run analysis on a login node?

Only lightweight work; submit intensive computation to compute nodes.

### Where should I store large datasets?

Use the approved project or scratch filesystem and confirm quota and retention policies.

### How do I cancel a job?

```bash
scancel JOB_ID
```

### Can I install software?

Yes, but first check whther the software is installed using `module avail`. You may install software into conda environment(s) preferably in your project directory (NOT the home directory). For software that can benefit the wider group of UMIC HPC users (e.g. samtools), please contact beatrice.dhaala@mrcuganda.org for system-wide installation, if the software is not installed already.  

