# linux systemctl 실행 중인 서비스 확인

```sh
systemctl list-units

# 비활성화 서비스 제외
systemctl list-units --type=service
# 비활성화 서비스 포함
systemctl list-units --type=service --all
```
