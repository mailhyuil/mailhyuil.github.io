# Docker build GIT_COMMIT tag

## build

```sh
# git rev-parse HEAD로 현재 커밋 ID 조회 -> GIT_COMMIT 환경변수에 저장
export GIT_COMMIT=$(git rev-parse HEAD)
docker build -f Dockerfile -t hyuil/nestjs:${GIT_COMMIT} .
```

## pull

```sh
docker pull hyuil/nestjs:${GIT_COMMIT}
```
