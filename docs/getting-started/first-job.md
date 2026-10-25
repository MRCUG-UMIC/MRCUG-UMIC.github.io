---
title: Your first batch job
---

# Your first batch job

Create a small SLURM job script. Replace the partition and resource settings with values permitted on your cluster.

```bash
cat > hello.slurm <<'EOF'
#!/bin/bash
#SBATCH --job-name=hello
#SBATCH --time=00:05:00
#SBATCH --cpus-per-task=1
#SBATCH --mem=1G
#SBATCH --output=hello-%j.out

hostname
date
echo "Hello from HPC"
EOF

sbatch hello.slurm
squeue -u "$USER"
```

After completion, inspect `hello-<jobid>.out`. Some clusters require an explicit `--partition` or `--account` setting.
