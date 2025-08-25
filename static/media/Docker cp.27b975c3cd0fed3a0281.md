# docker cp

> 컨테이너 호스트간에 파일 옮기기 (복사)

```sh
# docker cp [container name]:[container 내부 경로] [host 파일경로]
docker cp my-nginx:/usr/share/html/index.html .
docker cp index.html my-nginx:/usr/share/html/index.html
```
