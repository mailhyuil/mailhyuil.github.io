# Docker (도커)

> 도커 컨테이너는 하드웨어 에뮬레이션 없이 `리눅스 커널`을 공유해서 바로 프로세스를 실행한다.

- 특징
  - 운영체제 수준의 가상화
  - 빠른 속도와 효율성
  - 높은 이식성(=확장성)
  - 롤백

![](/img/hypervisor&container.png)

---

## 명령어

### 기본 명령

```bash
docker ps
docker stop 컨테이너 이름
docker start 컨테이너 이름
docker restart 컨테이너 이름
docker rm 컨테이너 이름
docker rmi 이미지 이름
docker exec 컨테이너 이름 // 실행중인 컨테이너에 명령어주기 # ex) docker exec -it mysql mysql -uroot
# -it 옵션은 터미널과 컨테이너가 지속적으로 연결되도록 하는 옵션

docker exec 컨테이너이름 /bin/bash # bash 접속하기
docker attach ubuntu # 접속

docker cp 컨테이너패스 로컬호스트패스 // 파일 옮기기

# container log 보기
docker logs 컨테이너이름
```

## docker image

- image 빌드

```bash
docker image build --tag 이미지_이름 .
```

## docker container

- 컨테이너 실행

```bash
docker container run
docker container run --name 이름 -d -p 호스트포트:도커포트 --network 네트워크이름 이미지이름
```

- 볼륨 연결

```bash
docker container run -d -p 호스트포트:도커포트 -v 볼륨이름:/경로 --name 이름
```

- 마운트 : 호스트 컴퓨터의 파일 시스템에 직접 저장

```bash
docker container run --mount type=bind,source=$source,target=$target -d -p 8080:80 이미지
```

- 컨테이너 로그

```bash
docker container logs
```

## docker network

> host : localhost와 동일한 네트워크를 사용
> bridge : 하나의 호스트에 있는 컨테이너들이 서로 소통할 수 있게
> overlay : 여러 호스트에 분산된 컨테이너들이 서로 소통할 수 있게

> 컨테이너들은 172.17.0.x ip를 순서대로 받는다
> 컨테이너의 이름은 ip를 참조한다

```bash
docker network create my-network
docker network ls
docker network rm my-network
docker network inspect my-network
docker network connect my-network 컨테이너
docker network disconnect my-network 컨테이너
```

## docker volume

> 데이터는 쓰기 가능 레이어에 저장된다
> 쓰기가능 레이어의 생명주기는 컨테이너가 생성되고 삭제될때까지
> 그렇기 때문에 데이터는 볼륨에 저장해야한다.

```bash
docker volume create my-volume
```

- 볼륨에 이름 부여하기

```bash
# -v [볼륨 이름 or 로컬 경로]:[컨테이너 안 경로]
-v mysql-volume:/var/lib/mysql
```

- 연결되지 않은 볼륨 전부 삭제

```bash
docker volume prune
```

## DockerHub Registry에 push&pull

```bash
# 로그인
docker login --username 아이디

# 이미지에 참조 부여
docker image tag 이미지이름 아이디/이미지이름:태그

# 이미지를 docker hub에 올리기
docker image push 아이디/이미지이름:태그

# 이미지 가져오기
docker image pull
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

## 멈춰있는 도커 bash 열기

```bash
docker commit CONTAINER_ID 새로운이미지이름

docker run -ti --entrypoint=sh 이미지이름
```
