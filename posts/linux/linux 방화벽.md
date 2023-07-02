# linux 방화벽

## install

```sh
sudo apt-get install ufw
```

## default config

> 기본 정책은 입력(들어오는 연결)을 거부하고 출력과 전달(내보내는 연결 및 전달)은 허용

```sh
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

## 사용법

> 허용할 서비스/포트 설정: UFW를 사용하여 허용할 서비스 또는 포트를 지정

```sh
# 서비스 이름으로 포트 허용
sudo ufw allow ssh

# 포트번호로 포트 허용
sudo ufw allow 80

# 방화벽 적용
sudo ufw enable

# 현재 허용 중인 포트 확인
sudo ufw status
```
