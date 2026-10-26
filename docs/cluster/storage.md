---
title: Storage and file management
---

# Storage and file management

Store active large datasets in approved project directories, NOT in your home directory. Scratch folders may be purged and should not be treated as a backup.

For a quick overview of the file sizes in a particular folder, use:
```bash
ls -lh
```


To monitor storage consumption for your home directory, use: 
```bash
du -sh "$HOME"
```

For checking the total, used and available disk space on the filesystem containing your current working directory, run:

```bash
df -h .
```

