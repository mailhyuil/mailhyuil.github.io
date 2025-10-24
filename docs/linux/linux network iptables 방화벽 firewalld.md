# linux network iptables 방화벽 firewalld

## install

```sh
dnf install firewalld -y

systemctl enable firewalld --now
```

## usage

```sh
firewall-cmd --state

firewall-cmd --permanent --zone=public --add-port=5432/tcp

firewall-cmd --reload
```
