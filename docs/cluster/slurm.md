---
title: SLURM job scheduling
---

# SLURM job scheduling

SLURM allocates resources to batch and interactive workloads. Availability of commands and partitions depends on local configuration.

```bash
sinfo
squeue -u "$USER"
sbatch analysis.slurm
scancel JOB_ID
sacct -j JOB_ID --format=JobID,State,Elapsed,MaxRSS
```

## Example batch script

```bash
#!/bin/bash
#SBATCH --job-name=analysis
#SBATCH --cpus-per-task=4
#SBATCH --mem=8G
#SBATCH --time=01:00:00
#SBATCH --output=logs/%x-%j.out

set -euo pipefail
python analysis.py
```

Create the `logs` directory before submission. Request only resources you need; confirm site-specific limits before running.
