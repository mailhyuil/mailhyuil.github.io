# linux 방화벽

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

## 사용법

> 허용할 서비스/포트 설정: UFW를 사용하여 허용할 서비스 또는 포트를 지정

```sh
# 서비스 이름으로 포트 허용
ufw allow ssh

# 포트번호로 포트 허용
ufw allow 80

# 방화벽 적용
ufw enable

# 현재 허용 중인 포트 확인
ufw status
```
