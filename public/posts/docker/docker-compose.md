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
# docker compose or docker-compose로 사용 가능

docker compose up # 이 명령을 실행하면 현재 디렉토리에 있는 docker-compose.yml 파일을 찾는다
docker compose up -d # 백그라운드에서 실행

docker compose down # 모든 컨테이너와 네트워크를 중단 및 삭제

docker compose logs
docker compose stop
docker compose start
```

## docker-compose.yml

```yaml
version: "3.8"
services:
  db:
    container_name: postgres
    image: postgres:14-alpine
    ports:
      - "5432:5432"
    restart: always
    volumes:
      - postgres-data:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: 1234
      POSTGRES_DB: mydb
    logging:
      driver: "json-file"
      options:
        max-size: "8m"
        max-file: "10"
    networks:
      - private
  server:
    container_name: server
    image: hyuil/server:0.0.1
    ports:
      - "3000:3000"
    restart: always
    networks:
      - public
      - private
  nginx:
    container_name: nginx
    image: hyuil/nginx:0.0.1
    ports:
      - "80:80"
      - "443:443"
    restart: always
    networks:
      - public
volumes:
  postgres-data: {}
networks:
  public:
    driver: bridge
  private:
    driver: bridge
    internal: true
```
