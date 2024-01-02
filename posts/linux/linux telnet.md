# linux telnet

## install

```bash
sudo apt-get install xinetd telnetd
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

## 사용

> port: 23

```sh
sudo systemctl restart xinetd
sudo systemctl enable xinetd
sudo ufw allow 23/tcp

telnet localhost
```
