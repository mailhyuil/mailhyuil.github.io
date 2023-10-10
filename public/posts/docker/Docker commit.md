# docker commit

> 실행중인 컨테이너를 이미지로 만듭니다.

```sh
docker commit container_name image_name
```

## 실행중인 컨테이너에 볼륨을 추가하고 싶을 때

```sh
docker commit postgres:0.1 postgres:0.2
docker run --name postgres -d -p 5432:5432 postgres:0.2
```
