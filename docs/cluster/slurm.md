---
title: SLURM job scheduling
---

# SLURM job scheduling

SLURM allocates resources to batch and interactive workloads. Availability of commands and partitions depends on local configuration.


## Example batch script 

```bash
nano first_slurm_job.sh
```

Example script content:

```bash
#!/bin/bash -l
#SBATCH --job-name=first_analysis
#SBATCH -e errors_%j.txt
#SBATCH --output=%x-%j.out
#SBATCH --account=<account_name(NOT username)>
#SBATCH --nodes=1
#SBATCH --tasks-per-node=4
#SBATCH --cpus-per-task=2
#SBATCH --mem=8G
#SBATCH --time=10:00:00

set -euo pipefail

python first_analysis.py

echo "Analysis completed successfully"

```

Submitting job (assuming you have *first_analysis.py* in the same folder):


```bash
sbatch first_slurm_job.sh -p short
sinfo
squeue -u "$USER"
scancel JOB_ID
sacct -j JOB_ID --format=JobID,State,Elapsed,MaxRSS
```

Request only resources you need; confirm site-specific limits before running. If the -p option is not supplied, the job will be submitted to the general (gen) partition by default. Using the *short* partition will set the job time limit to 3 days by default. Longer jobs can be submitted using the *long* partition. 
