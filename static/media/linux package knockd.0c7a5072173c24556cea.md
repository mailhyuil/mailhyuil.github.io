# linux package knockd

> port에 syn 패킷을 일정 패턴으로 전송하여 방화벽을 열고 닫는 패키지

## install

```sh
sudo apt install knockd
```

## /etc/knockd.conf

> 7000,8000,9000 is the sequence of ports to knock on
>
> > 9000,8000,7000 is the sequence of ports to knock on to close the port

```sh
# iptables
[openSSH]
    sequence    = 7000,8000,9000
    seq_timeout = 5
    command     = /usr/sbin/iptables -A INPUT -s %IP% -p tcp --dport 22 -j ACCEPT
    tcpflags    = syn

[closeSSH]
    sequence    = 9000,8000,7000
    seq_timeout = 5
    command     = /usr/sbin/iptables -D INPUT -s %IP% -p tcp --dport 22 -j ACCEPT
    tcpflags    = syn

# ufw
[openSSH]
    sequence    = 7000,8000,9000
    seq_timeout = 5
    command     = /usr/sbin/ufw allow from %IP% to any port 22 proto tcp
    tcpflags    = syn

[closeSSH]
    sequence    = 9000,8000,7000
    seq_timeout = 5
    command     = /usr/sbin/ufw delete allow from %IP% to any port 22 proto tcp
    tcpflags    = syn
```

## browser로 knock 하기

> 브라우저 url로는 연결이 안된다고 생각해서 애초에 요청을 안날릴 수 있음
>
> > fetch는 sop로 막혀있음
> >
> > > img, script 태그 등을 사용하면 가능

```html
<img src="http://my.server.com:7000/knock.jpg" />
<img src="http://my.server.com:8000/knock.jpg" />
<img src="http://my.server.com:9000/knock.jpg" />
```
