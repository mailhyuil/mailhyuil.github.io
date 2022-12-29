# docker ubuntu
## command
```bash
docker run -d --name ubuntu -p 22:22 -it --privileged ubuntu:20.04
```
## 서버 접속
```bash
docker attach ubuntu
```