# Docker image build

```bash
docker build -t 이미지_이름 .

# 특정 Dockerfile로 build
docker build -t 이미지_이름 -f Dockerfile_파일이름 .

# build 후 바로 push
docker build -t 이미지_이름 -f Dockerfile_파일이름 . --push

# 특정 stage로 build
docker build -t 이미지_이름 -f Dockerfile_파일이름 --target stage_이름 .
```
