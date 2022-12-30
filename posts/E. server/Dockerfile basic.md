## Dockerfile basic

> image를 생성하기 위한 스크립트파일
> Docker는 Dockerfile에 나열된 명령문을 차례대로 수행

```Dockerfile
# 베이스 이미지
FROM diamol/node

# 명령을 실행한 다음 그 결과를 이미지 레이어에 저장하는 기능
RUN echo 'Building...' > /build.txt
# -y 옵션을 사용해 무조건 설치가 되도록
RUN apt update && apt install -y something

# 환경변수
ENV TARGET="blog.sixeyed.com"
ENV METHOD="HEAD"
ENV INTERVAL="3000"

# 이미지 파일 디렉터리를 만들고 해당 디렉터리를 작업 디렉터리로 지정하는 인스트럭션 (cd 명령어와 동일)
WORKDIR /web-ping

# 로컬 파일 시스템의 파일 혹은 디렉터리를 이미지로 복사하는 인스트럭션
COPY app.js .

# COPY 명령과 비슷함, 압축 파일이나 네트워크 상의 파일에도 사용할 수 있다. (특수한 경우가 아니라면 COPY사용)
ADD app.js .

# 서버가 사용하는 기본포트를 외부로 공개시키기
EXPOSE 8080

# volume
VOLUME /data

# 컨테이너가 실행될 때 항상 실행되야 하는 커맨드를 지정 (항상 실행)
ENTRYPOINT ["java", "-jar", "/app/*.jar"]

# 컨테이너가 실행될 때 기본적으로 실행되야 하는 커맨드 지정 (사용자 파라미터 입력에 따라 변동)
CMD ["node", "/web-ping/app.js"]
```

## 환경변수 값 가져오기

- Node

```js
process.env.TARGET;
process.env.METHOD;
```

- Java

```java
System.getenv("TARGET")
System.getenv("METHOD")
```

## docker-compose

> Docker-compose를 사용하여 분산 애플리케이션을 실행시킬 수 있다.
> Dockerfile -> images -> docker-compose.yml -> containers

```bash
docker-compose up # 이 명령을 실행하면 현재 디렉토리에 있는 docker-compose.yml 파일을 찾는다
docker-compose logs
docker-compose down
docker-compose stop
docker-compose start
```

- docker-compose.yml

```yaml
version: '3.7'

services:
	서비스1:
		image: 이미지1
		command:
		volumes:
		environment:
		working_dir:
		depends_on:
		ports:
			- "8080:80"
		networks:
			- 네트워크1
	서비스2:
		image: 이미지2

networks:
	네트워크1:
		external:
			name: nat

volumes:
	볼륨1:

secrets:
	postgres-connection:
		file: ./config/secrets.json
```
