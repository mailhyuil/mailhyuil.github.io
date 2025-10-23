# docker buildx

> 멀티 플랫폼 이미지 빌드를 위한 도구

```sh
# builder 생성
docker buildx create --use
# or
docker buildx create --name multiarch-builder --use

# 빌더가 지원하는 플랫폼 확인
docker buildx inspect --bootstrap

# 빌드
docker buildx build . --platform linux/arm64/v8,linux/amd64 -f Dockerfile.server -t gurumee92/buildx-test --push
```

# docker build options --push

> image를 registry로 자동으로 push

# docker build options --load

> image를 로컬에 저장
