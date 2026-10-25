---
title: Storage and file management
---

# Storage and file management

Clusters commonly separate home, project and scratch storage. **Your actual filesystem paths, quotas, retention and backup policies must be confirmed locally.**

```bash
pwd
df -h .
du -sh "$HOME"
ls -lh
```

Store active large datasets in approved project or scratch areas, not on login-node local disks. Scratch may be purged and should not be treated as a backup.
