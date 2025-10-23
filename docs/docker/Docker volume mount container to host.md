# Docker volume mount container to host

> docker 기본으로 host의 path를 container로 replace 한다.
>
> host에 파일이 생기는 경우는 mount된 후에 container에서 파일을 생성한 경우이다.
>
> > 따라서 container의 파일을 host로 옮기기 위해서는 named volume을 사용하거나 docker cp 명령어를 사용해야 한다.

```bash
# named volume 사용
docker run -v client-data:/var/whatever client_image

# docker cp 명령어 사용
docker create --name container_name client_image
docker cp container_name:/app/client ./client
docker rm container_name
```
