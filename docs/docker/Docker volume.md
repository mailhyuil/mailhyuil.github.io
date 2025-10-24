# Docker volume

> 데이터는 기본적으로 쓰기 가능 레이어에 저장된다 이 레이어는 컨테이너가 삭제되면 같이 삭제됨 따라서 볼륨을 사용
>
> > 볼륨을 생성하여 사용하는 방법과 호스트 경로를 컨테이너에 마운트하는 방법이 있다 (volume, bind mount)
> >
> > > 컨테이너에서 계속 사용할 영속적인 데이터 = 볼륨 사용 (e.g. DB data)
> > >
> > > 호스트에서 사용할 데이터 = 바인드 마운트 사용 (e.g. 로그 파일, 소스 코드, 설정 파일)

## docker volume 사용

> 도커의 볼륨 관리 기능을 사용
>
> > 기본으로 `/var/lib/docker/volumes/${volume-name}/_data`에 데이터가 저장된다.

```bash
docker volume create --name my-volume

docker run -d --name postgres -v my-volume:/var/lib/postgresql/data -p 3306:3306 mysql
# mysql은 /var/lib/mysql

# volume 리스트 출력
docker volume ls

# 연결되지 않은 볼륨 전부 삭제
docker volume prune
```

## host to container (bind mount)

```bash
# 특정 경로를 마운트
docker run -d -v ~/logs:/var/logs -p 80:80 nginx

# 현제 디렉토리를 마운트
docker run -d -v $(pwd):/var/logs -p 80:80 nginx

# --mount 옵션 (-v 옵션으로 bind한 것과 동일하지만 path가 없으면 에러가 난다. -v는 path가 없으면 자동으로 생성)
docker run -d --mount type=bind,source=$(pwd),target=/var/logs -p 80:80 nginx
```

## data-only container (volume container) 생성하여 마운트

> --volumes-from data_only_container

```sh
docker run -d --name my-conainer --volumes-from web-volume -p 8080:80 nginx
```

## 볼륨을 읽기 전용으로 마운트

> -v my-volume:/usr/share/nginx/html:ro
>
> > :ro 옵션

```sh
docker run -d --name nginx -v web-volume:/usr/share/nginx/html:ro nginx
```
