# Dockerfile VOLUME

> run 할 때 반드시 -v 옵션으로 명시해야 함

```Dockerfile
VOLUME ["/var/lib/postgresql/data"]

# docker run -d -v /경로/호스트/시스템/디렉토리:/경로/컨테이너/디렉토리 이미지명
```
