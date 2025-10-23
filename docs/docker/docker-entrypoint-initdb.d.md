# docker-entrypoint-initdb.d

> docker container 실행될 때 자동으로 읽을 파일들을 모아놓은 디렉토리
>
> > 미리 파일을 만들어두고 volume으로 이곳에 연결하면 컨테이너가 실행될 때 자동으로 실행된다.

## run

```sh
docker run --name postgres -v ./init.sql:/docker-entrypoint-initdb.d/init.sql postgres
```

## Dockerfile

```dockerfile
FROM postgres
COPY init.sql /docker-entrypoint-initdb.d
```
