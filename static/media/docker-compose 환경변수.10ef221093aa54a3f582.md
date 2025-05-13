# docker-compose 환경변수

> 머신에 설정된 환경변수를 docker-compose.yml에서 사용할 수 있다.

```sh
export TEST=HELLO WORLD

# docker-compose.yml
TEST: ${TEST}
```
