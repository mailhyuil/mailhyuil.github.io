# linux package auditd

## install

```sh
sudo apt install auditd
```

## usage

```sh
sudo auditctl -e 1 # Enable the audit daemon
sudo auditctl -l # List current audit rules
sudo auditctl -w /etc/passwd -p wa # Watch the /etc/passwd file for write and attribute changes
```
