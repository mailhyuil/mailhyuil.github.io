# pm2 kill daemon

> 데몬이 여러개 켜져있는 경우

```sh
pm2 kill # 현재 데몬을 kill
ps -ef | grep PM2 # 다른 데몬 찾기
kill -9 [pid]
```
