# docker-compose

> Docker-compose를 사용하여 분산 애플리케이션을 실행시킬 수 있다.
>
> > Dockerfile -> images -> docker-compose.yml -> containers

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
