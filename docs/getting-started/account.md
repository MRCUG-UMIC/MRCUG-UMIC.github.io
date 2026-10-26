---
title: Account access
---

# Account access

To request access to the UMIC HPC:

1. Complete the form at https://forms.cloud.microsoft/e/K9vdJBTvwc.

2. Be on the lookout for an email from our Principal Systems Administrator (Ms. Beatrice Dhaala: beatrice.dhaala@mruganda.org) and share your public SSH key in your reply.


To create an SSH key pair locally, run:

```bash
user_PC:~$ ssh-keygen -t ed25519
Enter file in which to save the key (/Users/username/.ssh/id_ed25519): <press Enter to use default path>
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

Your public key will be named **id_ed25519.pub** and it will be stored in the **~/.ssh** folder by default.


3. Complete the UMIC Acceptable User Policy, and the UMIC Data Transfer Agreement, and share signed copies with the Systems Administrator. 

4. Be on the lookout for your username and temporary password for moving from the SSH gateway to the UMIC login node. This is different from the passphrase created when generating the SSH key pair on your PC terminal.


:::warning
Do not publish private credentials, tokens, private key(s) or confidential user/project data via email or support tickets.
:::



