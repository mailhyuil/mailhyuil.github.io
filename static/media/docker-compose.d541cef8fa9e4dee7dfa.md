# docker-compose

> Docker-compose를 사용하여 분산 애플리케이션을 실행시킬 수 있다.
>
> > Dockerfile -> images -> docker-compose.yml -> containers

## install

```sh
apt install docker-compose-plugin -y
```

## 명령어

```bash
docker-compose up # 이 명령을 실행하면 현재 디렉토리에 있는 docker-compose.yml 파일을 찾는다
docker-compose down # 모든 컨테이너와 네트워크를 중단 삭제

docker-compose logs
docker-compose stop
docker-compose start
```

## docker-compose.yml

```yaml
version: '3.7'

services:
	db:
		image: 이미지1
		restart: unless-stopped # default 값은 always, unless-stopped를 사용 시 서버가 켜지면 컨테이너도 재시작 된다.
	  # command:
	    volumes:
		- postgres-data:/var/lib/postgresql/<version>/main
		environment:
			POSTGRES_DB: mydb
			POSTGRES_USER: postgres
			POSTGRES_PASSWORD: 1234
	  # working_dir:
		ports:
			- "8080:80"
		networks:
			- 네트워크1
		logging:
			driver: "json-file"
			options:
				max-size: "8m"
				max-file: "10"
	grafana:
		depends_on: # db가 먼저 생성되도록
		- my-db
		image: 이미지2
		restart: unless-stopped # default 값은 always, unless-stopped를 사용 시 서버가 켜지면 컨테이너도 재시작 된다.


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
