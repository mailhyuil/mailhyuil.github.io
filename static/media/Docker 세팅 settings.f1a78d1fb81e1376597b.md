# Docker 세팅 settings

## /etc/docker/daemon.json

```json
{
  "iptables": false, // ufw를 사용 시 false로 설정

  "log-driver": "local", // 기본 json-file 대신 local로 설정
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
```
