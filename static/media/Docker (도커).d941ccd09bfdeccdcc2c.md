# Docker (도커)
> 도커 컨테이너는 하드웨어 에뮬레이션 없이 `리눅스 커널`을 공유해서 바로 프로세스를 실행한다.

## 명령어
### 기본 명령
```
docker ps
docker stop 컨테이너 이름
docker start 컨테이너 이름
docker restart 컨테이너 이름
docker rm 컨테이너 이름
docker rmi 이미지 이름
docker exec 컨테이너 이름 // 실행중인 컨테이너에 명령어주기 ex) docker exec -it mysql mysql -uroot
* -it 옵션은 터미널과 컨테이너가 지속적으로 연결되도록 하는 옵션
docker exec -itu 0 컨테이너 이름 /bin/bash // 접속하기

docker cp 컨테이너패스 로컬호스트패스 // 파일 옮기기
```

### image 명령
- image 빌드
```
docker image build --tag 이미지_이름 경로
```

### container 명령
- 컨테이너 실행
```
docker container run 
docker container run --name 이름 -d -p 호스트포트:도커포트 --network 네트워크이름 이미지이름
```
- 볼륨 연결
```
docker container run -d -p 호스트포트:도커포트 -v 볼륨이름:/경로 --name 이름
```

- 마운트 : 호스트 컴퓨터의 파일 시스템에 직접 저장
```
docker container run --mount type=bind,source=$source,target=$target -d -p 8080:80 이미지
```

- 컨테이너 로그
```
docker container logs
```

### 기타 명령
- 네트워크 생성
```
docker network create nat
```

- 볼륨 생성
```
docker volume create 볼륨이름 
```

## docker-compose

> Docker-compose를 사용하여 분산 애플리케이션을 실행시킬 수 있다.
> 

```
docker-compose up // 이 명령을 실행하면 현재 디렉토리에 있는 docker-compose.yml 파일을 찾는다
docker-compose logs
docker-compose down
docker-compose stop
docker-compose start
```

## DockerHub Registry에 push&pull

```
// 로그인
docker login --username 아이디

// 이미지에 참조 부여
docker image tag 이미지이름 아이디/이미지이름:태그

// 이미지를 docker hub에 올리기
docker image push 아이디/이미지이름:태그

// 이미지 가져오기
docker image pull
```

## Dockerfile

> Dockerfile -> build -> image -> container
> 

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

# 포트를 외부로 공개
EXPOSE 80

# CMD와 같은 기능
ENTRYPOINT ["java", "-jar", "/app/*.jar]

VOLUME /data

# 로컬 파일 시스템의 파일 혹은 디렉터리를 이미지로 복사하는 인스트럭션
COPY app.js .

# 이미지로부터 컨테이너를 실행 했을 때 실행할 명령
CMD ["node", "/web-ping/app.js"]
```

## 환경변수 값 가져오기

- Node

```
process.env.TARGET
process.env.METHOD
```

- Java

```
System.getenv("TARGET")
System.getenv("METHOD")
```

## docker-compose.yml

```yaml
version: '3.7'

services:
	서비스이름:
		image: "이미지"
		ports:
			- "8080:80"
		networks:
			- app-net
			
networks:
	app-net:
		external:
			name: nat

secrets:
	postgres-connection:
		file: ./config/secrets.json
```

## docker-mysql

```
docker pull mysql

docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=<password> -d -p 호스트포트:3306 mysql:latest

docker exec -it mysql-container mysql -u root -p
```
## docker tomcat & spring
```

docker cp ./ROOT.war my-tomcat:/usr/local/tomcat/webapps/
```