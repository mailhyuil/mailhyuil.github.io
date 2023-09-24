## nks 순서

```sh
docker login
docker build -t my-server -f Dockerfile.server ./
docker tag my-server a301cea9-kr1-registry.container.nhncloud.com/wings/my-server:1.0
docker push a301cea9-kr1-registry.container.nhncloud.com/wings/my-server:1.0
```
