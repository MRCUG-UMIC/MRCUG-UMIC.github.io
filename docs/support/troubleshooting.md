---
title: Troubleshooting
---

# Troubleshooting

## SSH access denied

Confirm username, hostname, key permissions, VPN and MFA requirements.

## Job remains pending

```bash
squeue -j JOB_ID -o "%i %T %R"
```

A pending job may be waiting for resources, priority, dependencies or account approval.

## Out-of-memory failure

Review job memory use and increase the allocation only when justified.

```bash
sacct -j JOB_ID --format=JobID,State,MaxRSS,ReqMem
```

## Command not found

Check `module avail`, active environments and your PATH. Include the exact error and job ID when contacting support.
