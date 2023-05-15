# Docker volume

> 데이터는 쓰기 가능 레이어에 저장된다
>
> > 쓰기가능 레이어의 생명주기는 컨테이너가 생성되고 삭제될때까지
> >
> > > 그렇기 때문에 데이터는 볼륨에 저장해야한다.

## 3가지 방법

### host경로를 container에 마운트

```bash
# -v [볼륨 이름 or 로컬 경로]:[컨테이너 안 경로]
docker run -d -v mysql-volume:/var/lib/mysql -p 80:80 nginx

docker run -d -v $(pwd):/var/lib/mysql -p 80:80 nginx
```

### data-only container (volume container) 생성하여 마운트

> --volumes-from data_only_container

```
docker run -d --name my-conainer --volumes-from web-volume -p 8080:80 nginx
```

### docker volume 사용

> 도커의 볼륨 관리 기능을 사용
>
> > 기본으로 /var/lib/docker/volumes/${volume-name}/\_data에 데이터가 저장된다.

```bash
docker volume create --name my-volume

docker run -d --name my-sql -v my-volume:/var/lib/mysql -p 3306:3306 mysql
# /var/lib/mysql은 mysql이 데이터를 쌓는 경로이다
# /var/lib/postgresql/<version>/main postgresql
```

## 볼륨을 읽기 전용으로 마운트

> -v my-volume:/usr/share/nginx/html:ro
>
> > :ro 옵션

```
docker run -d --name nginx -v web-volume:/usr/share/nginx/html:ro nginx
```

## 연결되지 않은 볼륨 전부 삭제

```bash
docker volume prune
```
