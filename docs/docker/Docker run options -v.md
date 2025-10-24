# Docker run options -v

```bash
# 특정 볼륨을 마운트
docker run -d -v my-volume:/var/logs -p 80:80 nginx

# 특정 경로를 마운트
docker run -d -v ~/logs:/var/logs -p 80:80 nginx

# 현재 디렉토리를 마운트
docker run -d -v $PWD:/var/logs -p 80:80 nginx
docker run -d -v $(pwd):/var/logs -p 80:80 nginx # Unix
docker run -d -v ${pwd}:/var/logs -p 80:80 nginx # Window에서는 powershell에서 ${pwd}를 사용해야 함

# data-only 컨테이너로부터 마운트
docker run -d -volume-from data-only-container -p 80:80 nginx

# 읽기 전용으로 마운트 (뒤에 :ro)
docker run -d -v my-volume:/var/logs:ro -p 80:80 nginx
```
