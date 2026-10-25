---
title: Data transfer
---

# Data transfer

Use your institution-approved transfer mechanism. For modest datasets, `scp` or `rsync` may be available.

```bash
scp local.txt your_username@login.example.org:~/
rsync -avP results/ your_username@login.example.org:~/results/
```

For sensitive data, follow approved encryption, transfer and access-control requirements. Large transfers may require dedicated data transfer nodes.
