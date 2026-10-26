---
title: Connect with SSH
---

# Connect with SSH

1. Use the *username* (shared by the Systems Administrator) and passphrase (created when generating the SSH key pair) to login to the SSH gateway. 

```bash
user_PC:~$ ssh username@ssh.umic.systems
Enter passphrase for key '/path/to/.ssh/id_ed25519':
username@admin:~$

```

:::tip
Contact support if you encounter `Permission denied (publickey)` or MFA issues.
::: 


2. Move from the gateway to the UMIC login node — enter the temporary umic-login password shared by the Systems Administrator when prompted

```bash
username@admin:~$ ssh username@umic-login
username@umic-login's password:

```

You should now be able to see the cluster prompt. By default, you will be in the home directory when you login and on the login/head-node.  

```bash
username@umic-login:~$
username@umic-login:~$ pwd
username@umic-login:~$ /mnt/users/u/us/username
```

:::tip
Use the login node for editing, file management and submitting jobs. Run intensive computation on allocated compute nodes.
:::


