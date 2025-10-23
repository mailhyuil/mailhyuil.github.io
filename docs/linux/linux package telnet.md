# linux telnet

> 23번 포트 사용

## install

```bash
apt install xinetd  -y
apt install telnetd -y
```

## config

> /etc/xinetd.d/telnet

```sh
service telnet
{
	disable = no
    flags = REUSE
    socket_type = stream
    wait = no
    user = root
    server = /usr/sbin/in.telnetd
    log_on_failure += USERID
}
```

## usage

```sh
sudo systemctl restart xinetd
sudo systemctl enable xinetd
sudo ufw allow 23/tcp

telnet localhost
```
