# linux package fail2ban

> 서비스의 로그 파일을 읽어, 특정 IP에서 정해진 시간(findtime) 동안 정해진 횟수(maxretry)를 초과하여 접속에 실패했다면
>
> 정해진 시간(bantime) 동안 그 IP를 차단하는 간단한 서비스
>
> > ssh 서비스에 대해 fail2ban을 설정하면 비정상적인 ssh 접속을 차단할 수 있고
> >
> > nginx 웹 서버에 대해 fail2ban을 설정하면 비정상적인 로그인 시도 등을 차단할 수 있다.

## install

```sh
apt install fail2ban -y
```

## 사용

```sh
systemctl enable fail2ban --now
```
