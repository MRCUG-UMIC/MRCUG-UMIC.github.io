---
id: intro
title: HPC Documentation
sidebar_position: 1
slug: /intro
---

# Welcome to the HPC wiki

This documentation helps researchers get started and use shared high-performance computing resources responsibly and effectively.

:::info Before you begin
This is a **complete website scaffold with practical example documentation**, not verified operational instructions for a particular cluster. Replace sample hostnames, partition names, paths, resource limits, support contacts and policies with approved institutional information before publishing.
:::

## Choose your path

- **New user?** Start with [Getting started](./getting-started/overview.md).
- **Ready to run?** See [SLURM job scheduling](./cluster/slurm.md).
- **Looking for software?** See [Environment modules](./software/modules.md).
- **Having trouble?** See [Troubleshooting](./support/troubleshooting.md).

## Common commands

```bash
whoami
pwd
module avail
sinfo
squeue -u "$USER"
```

Commands depend on your cluster configuration and scheduler.
