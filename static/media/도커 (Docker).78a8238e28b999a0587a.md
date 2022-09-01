# 도커 (Docker)

## 기본 명령어
```
docker login --username 아이디

docker image tag 이미지이름 아이디/이미지이름:태그

docker image push 아이디/이미지이름:태그

docker image pull

docker image build --tag 이미지_이름 경로

docker network create nat

docker container run
docker container run --name 이름 -d -p 800:80 --network 네트워크이름 이미지이름
docker container logs
```
## Dockerfile
> Dockerfile -> build -> image -> container

```
# 베이스 이미지
FROM diamol/node

# 명령을 실행한 다음 그 결과를 이미지 레이어에 저장하는 기능
RUN echo 'Building...' > /build.txt

# 환경변수
ENV TARGET="blog.sixeyed.com"
ENV METHOD="HEAD"
ENV INTERVAL="3000"

# 이미지 파일 디렉터리를 만들고 해당 디렉터리를 작업 디렉터리로 지정하는 인스트럭션
WORKDIR /web-ping

ENTRYPOINT

VOLUME /data

# 로컬 파일 시스템의 파일 혹은 디렉터리를 이미지로 복사하는 인스트럭션
COPY app.js .

# 이미지로부터 컨테이너를 실행 했을 때 실행할 명령
CMD ["node", "/web-ping/app.js"]
```

## 환경변수 값 가져오기
* Node
```
process.env.TARGET
process.env.METHOD
```
* Java
```
System.getenv("TARGET") 
System.getenv("METHOD") 
```