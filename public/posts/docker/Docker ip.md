# docker ip 지정

> --ip로 지정

```sh
docker run --name my-nginx --restart="always" -d --net mybridge --ip 172.20.0.4 -p 8888:80 nginx
```
