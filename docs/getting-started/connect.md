---
title: Connect with SSH
---

# Connect with SSH

Use your institution-provided hostname, **not** the example below.

```bash
ssh your_username@login.example.org
```

To create an SSH key locally (if approved by your institution):

```bash
ssh-keygen -t ed25519 -C "hpc-access"
```

Never share your private key. Contact support if you encounter `Permission denied (publickey)` or MFA issues.
