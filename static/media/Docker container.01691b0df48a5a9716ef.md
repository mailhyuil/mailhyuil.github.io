# Docker container

## 컨테이너 실행

```bash
docker container run
docker container run --name 이름 -d -p 호스트포트:도커포트 --network 네트워크이름 이미지이름
```

## 실행 시 볼륨 연결

```bash
docker container run -d -p 호스트포트:도커포트 -v 볼륨이름:/경로 --name 이름
```

## 실행 시 마운트

> 호스트 컴퓨터의 파일 시스템에 직접 저장

```bash
docker container run --mount type=bind,source=$source,target=$target -d -p 8080:80 이미지
```

- 컨테이너 로그

```bash
docker container logs
```

## container에서 localhost에 접근하기

> `localhost` 대신 `host.docker.internal` 사용!

## container에서 container에 접근하기

- tomcat & mysql

```bash
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=<password> -d --network my-network mysql:latest
docker run --name my-tomcat -e db_password=password -d --network my-network -p 9000:8080 hyuil/my-tomcat9:v1

# datasource url : jdbc:mysql://mysql-container:3306/mydb?serverTimezone=Asia/Seoul&useSSL=false&allowPublicKeyRetrieval=true
# 이클립스는 & 대신 &amp;을 써야함
```
