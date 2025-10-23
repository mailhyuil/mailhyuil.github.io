# linux network firewall firewalld (redhat 계열)

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
