# nginx directive log access_log

## 로그 포멧

```sh
main - 기본 포멧
combined - 기본 포멧에 추가로 referer, user-agent, http_x_forwarded_for를 포함
json - json 형태로 로그를 남김
no - 로그를 남기지 않음
```

### usage

```sh
access_log <로그 경로> <포맷 이름>;
# access_log /var/log/nginx/access.log combined;
```
