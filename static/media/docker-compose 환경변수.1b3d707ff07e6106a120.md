# docker-compose 환경변수

> 머신에 설정된 환경변수를 docker-compose.yml에서 사용할 수 있다.
>
> > docker-compose.yaml과 같은 위치에 .env 파일을 사용하면 자동으로 .env 파일을 읽어 환경변수를 설정한다.

```sh
POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
```
