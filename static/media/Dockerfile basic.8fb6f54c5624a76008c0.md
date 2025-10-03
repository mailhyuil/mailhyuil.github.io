## Dockerfile basic

> image를 생성하기 위한 스크립트파일
>
> > Docker는 Dockerfile에 나열된 명령문을 차례대로 수행
> >
> > > package-lock.json 파일도 함께 복사해야 캐시를 사용할 수 있다.

```Dockerfile
# 변수 선언
ARG VERSION=lts-alpine

# 베이스 이미지
FROM node:${VERSION}

# 이미지의 메타데이터
LABEL description="Simple NodeJS Container"

# 사용자 지정
USER node

# 명령을 실행한 다음 그 결과를 이미지 레이어에 저장하는 기능
RUN echo 'Building...' > /build.txt

# -y 옵션을 사용해 무조건 설치가 되도록
RUN apt update && apt install -y something

# 컨테이너의 환경변수 // ${TARGET}으로 참조할 수 있음
ENV TARGET="blog.sixeyed.com"
ENV METHOD="HEAD"
ENV INTERVAL="3000"

# 워킹 디렉토리를 지정 (cd 명령어와 동일)
WORKDIR /app

# ./현재 디렉토리 -> ./서버의 디렉토리
COPY ./ ./

# COPY 명령과 비슷함, 압축 파일이나 네트워크 상의 파일에도 사용할 수 있다. (특수한 경우가 아니라면 COPY사용)
ADD app.js ./

# "이 이미지는 8080포트를 사용합니다" 라고만 알려주는 문서화 용도
EXPOSE 8080

# volume
VOLUME /data

# 컨테이너가 실행될 때 항상 실행되야 하는 커맨드를 지정 (항상 실행)
ENTRYPOINT ["java", "-jar", "/app/*.jar"]

# 컨테이너가 실행될 때 기본적으로 실행되야 하는 커맨드 지정 (사용자 파라미터 입력에 따라 변동)
CMD ["node", "/web-ping/app.js"]
CMD sh -c "echo $TARGET && node /web-ping/app.js"
```

## build

```sh
docker build -f <Dockerfile 경로> -t <image 이름> --target <stage target> <build context>
# docker build -f Dockerfile.server -t hyuil/server:1.0 .
# docker build -f Dockerfile.server -t hyuil/server:1.0 --target prod .
```

## Dockerfile 압축

```sh
# 압축하기
docker save -o [output tar파일] [image]
# 불러오기
docker load -i [input tar 파일]
```
