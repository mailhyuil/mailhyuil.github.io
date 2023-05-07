# Docker volume

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
