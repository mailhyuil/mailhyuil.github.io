# linux package fail2ban

> 서비스의 로그 파일을 읽어, 특정 IP에서 정해진 시간(findtime) 동안 정해진 횟수(maxretry)를 초과하여 접속에 실패했다면
>
> 정해진 시간(bantime) 동안 그 IP를 차단하는 간단한 서비스
>
> > ssh 서비스에 대해 fail2ban을 설정하면 비정상적인 ssh 접속을 차단할 수 있고
> >
> > nginx 웹 서버에 대해 fail2ban을 설정하면 비정상적인 로그인 시도 등을 차단할 수 있다.
> >
> > > 설치 시 기본으로 well-known application에 대한 설정이 되어있음 (sshd, apache, nginx, ...)

## install

```sh
apt install fail2ban -y
```

## usage

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

# /etc/fail2ban/jail.local 수정

systemctl enable fail2ban --now

# 차단된 ip 확인
fail2ban-client status
# sshd에서 차단된 ip 확인
fail2ban-client status sshd

# 차단 해제
sudo fail2ban-client set sshd unbanip <IP주소>
```

## sshd

```ini
[sshd]
enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log   # Ubuntu/Debian
# logpath = /var/log/secure    # CentOS/RHEL
maxretry = 5  # 5회 실패 시 차단
bantime = 600 # 10분 차단 (초 단위)
findtime = 300 # 5분 동안 maxretry 이상 실패 시 차단
```
