# linux network iptables 방화벽 ufw

## install

```sh
apt install ufw -y
```

## default config

> 기본 정책은 입력(들어오는 연결)을 거부하고 출력과 전달(내보내는 연결 및 전달)은 허용

```sh
ufw default deny incoming
ufw default allow outgoing
```

## usage

> 허용할 서비스/포트 설정: UFW를 사용하여 허용할 서비스 또는 포트를 지정

```sh
# 특정 포트 허용
ufw allow ssh
ufw allow 80
# 특정 포트 차단
ufw deny ssh
ufw deny 80
# 특정 IP 허용
ufw allow from <특정IP>
# 특정 IP 차단
ufw deny from <특정IP>
# 특정 IP 대역 허용
ufw allow from <시작IP>/<서브넷마스크>
# 특정 IP 대역 차단
ufw deny from <시작IP>/<서브넷마스크>

# 방화벽 적용
ufw enable
# 현재 허용 중인 포트 확인
ufw status
```
